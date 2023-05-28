let darkTheme = false;
let body = document.querySelector("body");
let header = document.querySelector(".header");
let darkForm = document.querySelector(".buy-form");
let themeChange = {
    addEventListener() {
        let themeButton = document.querySelector(".theme-button");
        themeButton.addEventListener("click", () => {
            if (darkTheme == false){
                body.classList.add("dark-theme");
                header.classList.add("header-dark")
                darkForm.classList.add("buy-form-dark")
                darkTheme = true;
            } else {
                body.classList.remove("dark-theme");
                header.classList.remove("header-dark")
                darkForm.classList.remove("buy-form-dark")
                darkTheme = false;
            }
            
        });
    }
}
themeChange.addEventListener();