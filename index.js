let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }

}

function contact(event) {
    event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_gjn68u6',
      'template_bz1343j',
      event.target,
      'OuQF6sYWlCsPNO0qk'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at bassamjjundi@gmail.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

