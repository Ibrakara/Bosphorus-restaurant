import {helperFunctions} from "./home"

let contactPage = function (){
    let content = document.querySelector("#content")

    let contactPageContainerAtt = {
        "id": "contactpage-container",
        "class": "mainpage-container"
    }
    helperFunctions.createAppendElement("div", content, contactPageContainerAtt)
    let contactPageContainer = document.querySelector("#contactpage-container")

    let contactGoogleMapAtt = {
        "id": "contact-map"
    }
    helperFunctions.createAppendElement("div", contactPageContainer, contactGoogleMapAtt)

    let contactLocationAtt = {
        "id": "contact-address"
    }
    let contactLocationText = "Avrupa yakası Bebek... N:1, Postal: 34000"
    helperFunctions.createAppendElement("div", contactPageContainer, contactLocationAtt, contactLocationText)

    let contactWorkingHoursAtt = {
        "id": "contact-workinghours"
    }
    let contactWorkingHoursText = `Tue – Thu, 2 pm – 2 pm
    Fri – Sun, 11 am – 4 am
    Closed Mondays`
    helperFunctions.createAppendElement("div", contactPageContainer, contactWorkingHoursAtt, contactWorkingHoursText)

    let contactNumberEmailAtt = {
        "id": "contact-number-email",
    }
    let contactNumberEmaailText = `0(212)111 11 11
    BOSphoRusRest.Aurant@istmail.com` 
    helperFunctions.createAppendElement("div", contactPageContainer, contactNumberEmailAtt, contactNumberEmaailText)
    
}
export{contactPage}