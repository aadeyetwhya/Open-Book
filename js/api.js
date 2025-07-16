let loadingElement = document.querySelector('#loading')
const getData = async (category,page,search) => {

    const limit = 9//total no of item to show
    const offset = 5 + limit * (page - 1) // which item to start from


    try {
        if (search) {
 url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(search)}&startIndex=${offset}&maxResults=${limit}`;
        }
        else {
            if (category) {
                currentCategory = category;
            }
            else {
                category = currentCategory // if accessed throught diff page, dont have category i.e. prev category
            }
            url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${offset}&maxResults=${limit}`
        }
        let response = await fetch(url);
        if (response.status == 200) {
            data = await response.json();
            console.log(data.items)
            return data.items
        }
        else {
            console.log("no")
        }
    } catch (error) {
        console.log("Error", error)
    }
    finally {
        loadingElement.classList.remove('show')
        loadingElement.classList.add('hide');
        let element = document.querySelector('#here');
        if (!search) {

            element.innerText = category[0].toUpperCase() + category.slice(1,)
        }
        else{
            element.innerText="Search for "+search
        }
    }
}


const apiData = async ({ category, page = 1, search = null }) => {
    loadingElement.classList.remove('hide');
    loadingElement.classList.add('show');

    const oldCategory = document.querySelector('.category');
    if (oldCategory) {
        oldCategory.remove();
    } // to delete old value

     paginationELement = document.querySelector('.pagination');
    if(search){
        paginationELement.classList.add('hide');
        paginationELement.classList.remove('show');
        console.log("hello")


    }
    else{
        paginationELement.classList.add('show');
                paginationELement.classList.remove('hide');

    }

    await getData(category,page,search).then((booksLists) => {
        categoryList(booksLists)
    })
}

document.addEventListener('DOMContentLoaded', function () {
  // This runs only once, when the initial HTML document is loaded and parsed
  apiData({category:'general'})
});