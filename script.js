//Projects Carousel
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel_item");
    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel_button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel_nav">
            ${buttonsHTML.join("")}
        </div>
        `);

    const buttons = carousel.querySelectorAll(".carousel_button");
    const subtitles = carousel.querySelectorAll(".carousel_subtitle");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel_item--selected"));
            buttons.forEach(button => button.classList.remove("carousel_button--selected"));
            subtitles.forEach(subtitle => subtitle.classList.remove("carousel_subtitle--selected"));

            items[i].classList.add("carousel_item--selected");
            buttons[i].classList.add("carousel_button--selected");
            subtitles[i].classList.add("carousel_subtitle--selected");
        });
    });
    items[0].classList.add("carousel_item--selected");
    buttons[0].classList.add("carousel_button--selected");
    subtitles[0].classList.add("carousel_subtitle--selected");
});

//Form Validation
const form = document.getElementById(`contactForm`);

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event){
nameError.textContent = '';
emailError.textContent = '';
messageError.textContent = '';
successMessage.textContent = '';

let isValid = true;

if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please Enter Your Name';
    event.preventDefault();
    isValid = false;
};

if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please Enter Your Email';
    event.preventDefault();
    isValid = false;
} else if(!validateEmail(emailInput.value)) {
    emailError.textContent = "This Email Address is Not Valid"
    event.preventDefault();
    isValid = false;
}

if (messageInput.value.trim() === '') {
    messageError.textContent = 'Your Message is Empty!'
    event.preventDefault();
    isValid = false;
}

if(isValid) {
    successMessage.textContent = "Thanks for reaching out! I'll get back to you as soon as I can!"
}
});

//Email Validation
function validateEmail(email){
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}