import { footer } from "./footer"
import {helperFunctions, homePage} from "./home"
import{menuPage} from "./menu"
import{contactPage} from "./contact"


let content = document.querySelector("#content")


let headerRender = function(){        
    let headerTagAtt = {
        "id": "header",
        "class": "header-container"
    }
    helperFunctions.createAppendElement("header", content, headerTagAtt)
    let headerTag = document.querySelector("#header")      
    
    let headerNavAtt = {
        "id": "header-nav"
    }
    helperFunctions.createAppendElement("nav", headerTag, headerNavAtt)
    let headerNav = document.querySelector("#header-nav")
    
    let headerHomeLinkAtt = {
        "id": "header-home-link",
        'class': 'header-link'
    }
    helperFunctions.createAppendElement("button", headerNav, headerHomeLinkAtt, "Home")
    let headerHomeLink = document.querySelector("#header-home-link")
    headerHomeLink.addEventListener("click", (e) => {
        document.querySelectorAll(".mainpage-container").forEach((e) => e.remove())
        document.querySelector("#footer-container").remove()
        document.querySelector("#header").remove()
        headerRender()
        homePage()
        footer()
    })
    

    let headerMenuLinkAtt = {
        "id": "header-about-link",
        'class': 'header-link'
    }
    helperFunctions.createAppendElement("button", headerNav, headerMenuLinkAtt, "Menu")
    let headerMenuLink = document.querySelector("#header-about-link")
    headerMenuLink.addEventListener("click", (e) => {
        document.querySelectorAll(".mainpage-container").forEach((e) => e.remove())
        document.querySelector("#footer-container").remove()
        document.querySelector("#header").remove()
        headerRender()
        menuPage()
        footer()
    })

    let headerContactLinkAtt = {
        "id": "header-contact-link",
        'class': 'header-link'
    }
    helperFunctions.createAppendElement("button", headerNav, headerContactLinkAtt, "Contact")
    let headerContactLink = document.querySelector("#header-contact-link")
    headerContactLink.addEventListener("click", (e) => {
        document.querySelectorAll(".mainpage-container").forEach((e) => e.remove())
        document.querySelector("#footer-container").remove()
        document.querySelector("#header").remove()
        headerRender()
        contactPage()
        footer()
    })
    
}

export {headerRender}