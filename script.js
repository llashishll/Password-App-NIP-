const input = document.querySelector(".input-txt")
const btn = document.querySelector(".btn")
const pass = document.querySelector(".pass")
const output = document.querySelector(".output-txt")

btn.addEventListener("click", () => {

    let passLength = pass.value.length
    if (passLength == 0 || input.value.length == 0) {

        output.style.color = "red"
        output.innerHTML = "Either Username or Password Field is  "

    } else if (passLength < 10 && input.value.length != 0) {
        output.style.color = "red"
        output.innerHTML = "Password length should be at least 10 characters"
    } else if (passLength >= 10) {
        output.style.color = "green"
        output.innerHTML = "You are logged in."
    }
})