  function closeErrorBanner() {
    const banner = document.querySelectorAll('.error-banner');
    if (banner) {
        Array.from(banner).forEach((eachBanner)=>{
            console.log(eachBanner)

            eachBanner.style.display = 'none';
        })
    }
  }


 
 const putError=(errorMessage)=>{
    console.log("hello");
 errorHTML=`
            <span class="error-message"> Something went wrong. Please try again.</span>
            <span class="error-close" onclick="closeErrorBanner()">✖</span>
        `;
     banner = document.querySelectorAll('.error-banner');

element=document.getElementsByTagName('main')[0];

errorElement=document.createElement('div');
errorElement.id="errorBanner";
errorElement.className='error-banner'
errorElement.innerHTML=errorHTML;

if(banner.length===0){

    element.prepend(errorElement);
}


    
 }
