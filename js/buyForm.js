let buyForm = {
    addEventListener() {
        let buyButtons = document.querySelectorAll(".product-buy-button");
        let form = document.querySelector(".form-wrapper");
        buyButtons.forEach(button => {
            button.addEventListener("click", () => {
                form.classList.remove("hide");
            });
        });
        let formBuyButton = document.querySelector(".form-buy-submit");
        formBuyButton.addEventListener("click", (event) => {
            event.preventDefault();
            form.classList.add("hide");
            alert("Покупка успешно совершена!");
        });
        let formCloseButton = document.querySelector(".form-close-button");
        formCloseButton.addEventListener("click", (event) => {
            event.preventDefault();
            form.classList.add("hide");
        });
    }
}
buyForm.addEventListener();