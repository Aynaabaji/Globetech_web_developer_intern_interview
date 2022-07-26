button1 = document.querySelector("#home_link");
button2 = document.querySelector("#service_link");
button3 = document.querySelector("#login_link");


button1.addEventListener('click',()=>{
    button1.classList.add('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
});


button2.addEventListener('click',()=>{
    button2.classList.add('active');
    button1.classList.remove('active');
    button3.classList.remove('active');
});


button3.addEventListener('click',()=>{
    button3.classList.add('active');
    button1.classList.remove('active');
    button2.classList.remove('active');
});