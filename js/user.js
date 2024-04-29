import {User} from './class/User.js'

const login_link_a = document.querySelector('a#login-link')

const user = new User()

// @ts-ignore
if (user.isLoggedIn){
    // @ts-ignore
    login_link_a.innerHTML = "Logout"
    // @ts-ignore
    login_link_a.href = "logout.html"
}else{
    // @ts-ignore
    login_link_a.innerHTML = "Login"
    // @ts-ignore
    login_link_a.href = "login.html"
}