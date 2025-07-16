const categoryList = (booksLists) => {

    let seletedElement = document.querySelector('#here');

  //  Remove previously added .category section if it exists
    
    let newCardList = document.createElement('div');

    console.log(booksLists,"booklist");

    newCardList.className = 'category';
    seletedElement.after(newCardList)

    let test = Array.from(booksLists).map((eachBook) => {
        newCardList.appendChild(categoryCard(eachBook, seletedElement));
        console.log(newCardList)
        return newCardList;
    })
    // console.log(test)
}

const categoryCard = (eachBook, selectedElement) => {

    const thumbnail = eachBook?.volumeInfo?.imageLinks?.thumbnail 
    || 'https://tse4.mm.bing.net/th/id/OIP.yzJN4S5Olv5FVAGvlUzoYQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3';

    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = ` 
    <div class="book-image">
                    <img src="${thumbnail}" alt="" class="image">
                      </div>
                    <div class="bookInfo">
                        
                        <h2 class="title">
                            ${eachBook?.volumeInfo?.title || "No title available"}
                        </h2>

                       <i> <p class="author">
                            ${eachBook?.volumeInfo?.authors?.map(eachAuthor=> eachAuthor).join(" , ") || "NO author mentioned" }
                        </p></i>
                        <p class="year">
                            ${eachBook.volumeInfo.publishedDate}
                        </p>
                        <p class="description">
                            ${eachBook?.volumeInfo?.description?.slice(0,180)||"NO description "+"..."}
                        </p>
                </div>`
    
                    // console.log(newCard)

    return newCard
}