import {helperFunctions} from "./home"

let contactPage = function (){
    let content = document.querySelector("#content")

    let contactPageContainerAtt = {
        "id": "contactpage-container",
        "class": "mainpage-container"
    }
    helperFunctions.createAppendElement("div", content, contactPageContainerAtt)
    let contactPageContainer = document.querySelector("#contactpage-container")

    helperFunctions.createAppendElement("div", contactPageContainer, {"id": "contact-main-container"})
    let contactMainContainer = document.querySelector("#contact-main-container")

    let contactLocationAtt = {
        "id": "contact-address",
        "class": "contact-content-div"
    }
    let contactLocationText = "Address: Avrupa Yakası Bebek... N:1, Postal: 34000"
    helperFunctions.createAppendElement("div", contactMainContainer, contactLocationAtt, contactLocationText)

    let contactWorkingHoursAtt = {
        "id": "contact-workinghours",
        "class": "contact-content-div"
    }
    let contactWorkingHoursText = `Working Hours:
    Tue – Thu, 2 pm – 2 pm
    Fri – Sun, 11 am – 4 am
    We are Closed on Mondays`
    helperFunctions.createAppendElement("div", contactMainContainer, contactWorkingHoursAtt, contactWorkingHoursText)

    let contactNumberEmailAtt = {
        "id": "contact-number-email",
        "class": "contact-content-div"
    }
    let contactNumberEmaailText = `Phone: 0(212)111 11 11
    Mail: BosphoRusRestaurant@istmail.com.sv` 
    helperFunctions.createAppendElement("div", contactMainContainer, contactNumberEmailAtt, contactNumberEmaailText)
    
}
export{contactPage}