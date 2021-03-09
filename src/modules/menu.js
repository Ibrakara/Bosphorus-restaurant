import {helperFunctions} from "./home"
let menuPage = function () {
    let content = document.querySelector("#content")
    let menuPageContainerAtt = {
        "id": "menupage-container",
        "class": "mainpage-container"
    }
    helperFunctions.createAppendElement("div", content, menuPageContainerAtt)
    let menuPageContainer = document.querySelector("#menupage-container")

    let menuPackage1Att = {
        "class": "menu-package",
        "id": "menu-package1"
    }
    helperFunctions.createAppendElement("div", menuPageContainer, menuPackage1Att)
    let menuPackage1 = document.querySelector("#menu-package1")

    helperFunctions.createAppendElement("div", menuPackage1, {"id": "menu-package1-img", "class": "menu-package-img"})
    helperFunctions.createAppendElement("h4", menuPackage1, null, "Package 1")
    helperFunctions.createAppendElement("p", menuPackage1, null, "A main dish you choose and 2 glass of Rakı with Mezes(side dishes).")
    helperFunctions.createAppendElement("div", menuPackage1, {"class": "menu-price"}, "20€")

    let menuPackage2Att = {
        "class": "menu-package",
        "id": "menu-package2"
    }
    helperFunctions.createAppendElement("div", menuPageContainer, menuPackage2Att)
    let menuPackage2 = document.querySelector("#menu-package2")
    helperFunctions.createAppendElement("div", menuPackage2, {"id": "menu-package2-img", "class": "menu-package-img"})
    helperFunctions.createAppendElement("h4", menuPackage2, null, "Package 2")
    helperFunctions.createAppendElement("p", menuPackage2, null, "A main dish you choose and a .33 cc bottle of Rakı with Mezes(side dishes).")
    helperFunctions.createAppendElement("div", menuPackage2, {"class": "menu-price"}, "35€")

    let menuPackage3Att = {
        "class": "menu-package",
        "id": "menu-package3"
    }
    helperFunctions.createAppendElement("div", menuPageContainer, menuPackage3Att)
    let menuPackage3 = document.querySelector("#menu-package3")
    helperFunctions.createAppendElement("img", menuPackage3, {"id": "menu-package3-img", "class": "menu-package-img"})
    helperFunctions.createAppendElement("h4", menuPackage3, null, "Package 3")
    helperFunctions.createAppendElement("p", menuPackage3, null, "A main dish you choose and a .70 cc bottle of Rakı with Mezes(side dishes).")
    helperFunctions.createAppendElement("div", menuPackage3, {"class": "menu-price"}, "50€")
}
export {menuPage}