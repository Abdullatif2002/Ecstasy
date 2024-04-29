import { User } from "./class/User.js";

const user = new User()
const email_input = document.querySelector('#user-email')
const password_input = document.querySelector('#password')

// @ts-ignore
document.querySelector('#register-button').addEventListener('click',(event) =>{
    event.preventDefault()
    // @ts-ignore
    const email = email_input.value
    // @ts-ignore
    const password = password_input.value

    user.register(email, password).then(json => {
       window.location.href = "login.html"
    }).catch(error => {
        alert(error)
    })
})