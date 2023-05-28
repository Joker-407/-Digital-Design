let upButton = {
    el: document.querySelector(".up-button"),
    show() {
        this.el.classList.remove("hide");
    },
    hide() {
        this.el.classList.add("hide");  
    },
    addEventListener() {
        window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector(".up-button").onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        }
    }
}
upButton.addEventListener();