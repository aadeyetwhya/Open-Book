let loadingElement=document.querySelector('#loading')

const getData=async(category)=>{


    const offset=5// which item to start from
    const limit=6//total no of item to show
    try {
        let response=await fetch(`https://openlibrary.org/subjects/${category}.json?limit=${limit}&offset=${offset}`);
        if(response.status==200){
                data=await response.json();
                console.log(data.works)
                return data.works
            }
            else{
            console.log("no")
        }
    } catch (error) {
        console.log("Error",error) 
    }
    finally{
    loadingElement.classList.remove('show')
    loadingElement.classList.add('hide');
    let element=document.querySelector('#here');
    element.innerText=category[0].toUpperCase()+category.slice(1,)
    }
}


const apiData=async(category)=>{
        loadingElement.classList.remove('hide');
    loadingElement.classList.add('show');
    console.log(category)

    await getData(category).then((booksLists)=>{
        categoryList(booksLists)
    })
}
