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