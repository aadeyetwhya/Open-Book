const categoryList = (booksLists) => {

    let seletedElement = document.querySelector('#here');

  //  Remove previously added .category section if it exists
    const oldCategory = document.querySelector('.category');
    if (oldCategory) {
        oldCategory.remove();
    }
    let newCardList = document.createElement('div');



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

    
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = ` 
                    <img src="https://covers.openlibrary.org/b/id/${eachBook.cover_id}.jpg" alt="" class="image">
                    <div class="bookInfo">
                        <h2 class="title">
                            ${eachBook.title}
                        </h2>

                       <i> <p class="author">
                            ${eachBook.authors[0].name}
                        </p></i>
                        <p class="year">
                            ${eachBook.first_publish_year}
                        </p>
                        <p class="description">
                            ${eachBook.subject.map(eachSubject=>eachSubject).slice(0,3)}
                        </p>
                </div>`
    
                    // console.log(newCard)

    return newCard
}