let loadingElement = document.querySelector('#loading');
let currentCategory = 'general';



const getData = async (category, page, search) => {
    const limit = 9;
    const offset = 5 + limit * (page - 1);
    let url = '';
    
    try {
        if (search) {
            url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(search)}&startIndex=${offset}&maxResults=${limit}`;
        } else {
            if (category) {
                currentCategory = category;
            } else {
                category = currentCategory;
            }
            url = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&startIndex=${offset}&maxResults=${limit}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            putError("No books found.");
            return [];
        }

        console.log(data.items);
        return data.items;

    } catch (error) {
        putError("Failed to fetch data from API.");
        console.error("Error:", error);
        return [];
    } finally {
        loadingElement.classList.remove('show');
        loadingElement.classList.add('hide');

        const element = document.querySelector('#here');
        if (element) {
            element.innerText = search
                ? `Search for "${search}"`
                : category.charAt(0).toUpperCase() + category.slice(1);
        }
    }
};

const apiData = async ({ category, page = 1, search = null }) => {
    loadingElement.classList.remove('hide');
    loadingElement.classList.add('show');

    const oldCategory = document.querySelector('.category');
    if (oldCategory) {
        oldCategory.remove();
    }

    const paginationElement = document.querySelector('.pagination');
    if (paginationElement) {
        if (search) {
            paginationElement.classList.add('hide');
            paginationElement.classList.remove('show');
        } else {
            paginationElement.classList.add('show');
            paginationElement.classList.remove('hide');
        }
    }

    try {
        const booksList = await getData(category, page, search);
        categoryList(booksList);
    } catch (err) {
        putError("Unexpected error loading data.");
        console.error("apiData error:", err);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    apiData({ category: 'general' });
});
