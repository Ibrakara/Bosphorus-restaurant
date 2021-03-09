import {helperFunctions} from "./home"

let content = document.querySelector("#content")
let footer = function(){
    let footerContainerAtt = {
        "id": "footer-container",
        "class": "footer-container"
    }
    helperFunctions.createAppendElement("footer", content, footerContainerAtt)
    let footerContainer = document.querySelector("#footer-container")
    
    let footerInfo1Att = {
        "class": "footer-info",
        "id": "footer-info1"
    }
    helperFunctions.createAppendElement("h3", footerContainer, footerInfo1Att, "Bosphorus Restaurant® is a Trade Marked brand.")
    

    let footerInfo2Att = {
        "class": "footer-info",
        "id": "footer-info2"
    }
    helperFunctions.createAppendElement("div", footerContainer, footerInfo2Att, "This website designed by IbraKara")
    let footerInfo2 = document.querySelector("#footer-info2")
    
    let footerAddressDivAtt = {
        "id": "footer-address-div",
        "class": "footer-info"
    }
    helperFunctions.createAppendElement("div",footerContainer,footerAddressDivAtt)
    let footerAddressDiv = document.querySelector("#footer-address-div")

    let footerAddressTitleAtt = {
        "id": "footer-address-title"
    }
    helperFunctions.createAppendElement("h5", footerAddressDiv, footerAddressTitleAtt, "You can find us at:")

    let footerAddressParaAtt = {
        "id": "footer-address-paragraph"
    }
    helperFunctions.createAppendElement("p", footerAddressDiv, footerAddressParaAtt, "Avrupa Yakası Bebek... N:1, Postal: 34000")

}
export {footer}