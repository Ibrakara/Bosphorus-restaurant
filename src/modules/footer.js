import {helperFunctions, homePage} from "./home"
import{menuPage} from "./menu"
import{contactPage} from "./contact"
import {headerRender} from './header'

let content = document.querySelector("#content")
let footer = function(){
    let footerContainerAtt = {
        "id": "footer-container",
        "class": "footer-container"
    }
    helperFunctions.createAppendElement("footer", content, footerContainerAtt)
    let footerContainer = document.querySelector("#footer-container")

    let footerNavAtt = {
        "id": "footer-nav"
    }
    helperFunctions.createAppendElement("nav", footerContainer, footerNavAtt)
    let footerNav = document.querySelector("#footer-nav")
    
    let footerInfo1Att = {
        "class": "footer-info",
        "id": "footer-info1"
    }
    helperFunctions.createAppendElement("h4", footerNav, footerInfo1Att, "TM ®")

    let footerInfo2Att = {
        "class": "footer-info",
        "id": "footer-info2"
    }
    helperFunctions.createAppendElement("h4", footerNav, footerInfo2Att, "This website designed by Karaduman WebTech")
    let footerInfo2 = document.querySelector("#footer-info2")

    let footerHomeLinkAtt = {
        "class": "footer-link",
        "id": "footer-home-link"
    }
    helperFunctions.createAppendElement("button", footerNav, footerHomeLinkAtt, "Home")
    let footerHomeLink = document.querySelector('#footer-home-link')
    footerHomeLink.addEventListener("click", (e) => {
        document.querySelectorAll(".mainpage-container").forEach((e) => e.remove())
        document.querySelector("#footer-container").remove()
        document.querySelector("#header").remove()
        headerRender()
        homePage()
        footer()
    })

    let footerMenuLinkAtt = {
        "class": "footer-link",
        "id": "footer-menu-link"
    }
    helperFunctions.createAppendElement("button", footerNav, footerMenuLinkAtt, "Menu")
    let footerMenuLink = document.querySelector('#footer-menu-link')
    footerMenuLink.addEventListener("click", (e) => {
        document.querySelectorAll(".mainpage-container").forEach((e) => e.remove())
        document.querySelector("#footer-container").remove()
        document.querySelector("#header").remove()
        headerRender()
        menuPage()
        footer()
    })

    let footerContactLinkAtt = {
        "class": "footer-link",
        "id": "footer-contact-link"
    }
    helperFunctions.createAppendElement("button", footerNav, footerContactLinkAtt, "Contact")
    let footerContactLink = document.querySelector('#footer-contact-link')
    footerContactLink.addEventListener("click", (e) => {
        document.querySelectorAll(".mainpage-container").forEach((e) => e.remove())
        document.querySelector("#footer-container").remove()
        document.querySelector("#header").remove()
        headerRender()
        contactPage()
        footer()
    })

    let footerAddressDivAtt = {
        "id": "footer-address-div"
    }
    helperFunctions.createAppendElement("div",footerNav,footerAddressDivAtt)
    let footerAddressDiv = document.querySelector("#footer-address-div")

    let footerAddressTitleAtt = {
        "id": "footer-address-title"
    }
    helperFunctions.createAppendElement("h5", footerAddressDiv, footerAddressTitleAtt, "You can find us at:")

    let footerAddressParaAtt = {
        "id": "footer-address-paragraph"
    }
    helperFunctions.createAppendElement("p", footerAddressDiv, footerAddressParaAtt, "Avrupa yakası Bebek... N:1, Postal: 34000")

}
export {footer}