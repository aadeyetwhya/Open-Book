const search=async ()=>{
    //get value of input
    let inputElement=document.querySelector('.inputSearch')
    searchValue=inputElement.value;
    await apiData({"search":searchValue}).then(()=>{

        inputElement.value="";
        console.log("hello");
    }
    );
}