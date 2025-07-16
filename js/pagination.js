// Initial slot and page settings
let pageSlot = 1; // Each slot shows 3 page numbers
let initialDisplayPage = 1;
let pageValue = 3;

// DOM Elements
let prevElement = document.querySelector('.prev');
let pages = document.querySelectorAll('.pageno');

console.log(prevElement);

// Disable the 'prev' button if we're on the first slot
if (pageSlot === 1) {
    prevElement.classList.add('disabled');
}

console.log(pages);

// Function to change the page slot (next or previous)
const changePageSlot = (changingValue) => {
    // Adjust the base page value when moving backward
    if (changingValue === -1) {
        pageValue -= 6;
    }

    // Update the current page slot
    pageSlot = changingValue === 1 ? pageSlot + 1 : pageSlot - 1;

    // Toggle 'disabled' class for the 'prev' button based on slot
    if (pageSlot === 1) {
        prevElement.classList.add('disabled');
    } else {
        prevElement.classList.remove('disabled');
    }

    console.log("Current slot:", pageSlot);

    // Update the visible page numbers
    Array.from(pages).forEach((eachPageNumber) => {
        pageValue += 1;
        eachPageNumber.innerText = pageValue;
        eachPageNumber.id=pageValue;
    });
};

const switchPage=(e)=>{
    apiData({page:e.target.id})
}
