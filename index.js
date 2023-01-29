// template_bz1343j
// service_gjn68u6
// HNGLvb58O-vGL3jfg

function contact(event) {
    event.preventDefault();
//     emailjs
//     .sendForm( 
//         'service_gjn68u6',
//         'template_bz1343j',
//         event.target,
//         'HNGLvb58O-vGL3jfg'
//     ).then(() => {
//         console.lot('this worked1')
//     })
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log('it worked 1')
}, 1000);
}