let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shoppingCard.classList.remove('active');
    userLogin.classList.remove('active');
    navbar.classList.remove('active');

}
let shoppingCard=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
    shoppingCard.classList.toggle('active');
    searchForm.classList.remove('active');
    userLogin.classList.remove('active');
    navbar.classList.remove('active');

}
let userLogin=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    userLogin.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCard.classList.remove('active');
    navbar.classList.remove('active');

    
}
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCard.classList.remove('active');
    userLogin.classList.remove('active');
  

}
//swiper
 var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween:20,

      spaceBetween: 10,
     autoplay:{
        delay:7500,
        disbleOnInteraction:false,
     },
     centeredSlides:true,
     
      breakpoints: {
       0: {
          slidesPerView: 1,
    
        },
        768: {
          slidesPerView: 2,
         
        },
        1020: {
          slidesPerView: 3,
       
        },
      },
    });
    //swiper review
     var swiper = new Swiper(".review-slide", {
      loop:true,
      spaceBetween:20,

      spaceBetween: 10,
     autoplay:{
        delay:7500,
        disbleOnInteraction:false,
     },
     centeredSlides:true,
     
      breakpoints: {
       0: {
          slidesPerView: 1,
    
        },
        768: {
          slidesPerView: 2,
         
        },
        1020: {
          slidesPerView: 3,
       
        },
      },
    });
// var theText=$('.typer').data('text'),
// theTextLenght=theText.length,
// n=0,
// theTyper=setInterval(function(){
//     $('.typer').each(function(){
//         $(this).html($(this).html()+theText[n]);
//     });
//     n++;
//     if(n>= theTextLenght){
//        clearInterval(theTyper);
//     }
//     else{
//         if(theTextLenght==n){
//             setInterval(theText);
//         }
//     }
  
// },100);
//typerwrite effect
// var i=0;
// var txt='developermkkk';
// var speed=30;
// function typeWrite(){
//     if(i < txt.length){
//         document.querySelector('span').innerHTML +=txt.charAt(i);
//         i++;
//         setTimeout(typeWrite,speed);
//     }
// }
// typeWrite();
