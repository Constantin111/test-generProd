
// вызов и скрытие всплывахи с формой

function formUp(a,b,c) {
    let buttonUp = document.querySelector("."+ a);
    let buttonClose = document.querySelector("."+ b);
    let popup = document.querySelector("."+ c);
    buttonUp.onclick = function () {
        popup.classList.add("active");
    };
    buttonClose.onclick = function () {
        popup.classList.remove("active");
    };

}

formUp("buttonUp","buttonClose","popUp-wrap");