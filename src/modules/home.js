let helperFunctions = (function() {
    let setMultiAttributes = function(el, attributes){
        for(let key in attributes){
            el.setAttribute(key, attributes[key])
        }
    }
    let createAppendElement = function(elementType, parentName, attributes, innerText){
        let elem = document.createElement(elementType)
        parentName.appendChild(elem)
        if(innerText){
            elem.innerText = innerText
        }if(attributes){
            setMultiAttributes(elem, attributes)
        }
    }
    return{
        createAppendElement
    }
    
})()


let homePage = function(){
    let content = document.querySelector("#content")
    
    let homePageContainerAtt = {
        "id": "homepage-container",
        "class": "mainpage-container"
    }
    helperFunctions.createAppendElement("div", content, homePageContainerAtt)
    let homePageContainer = document.querySelector("#homepage-container")
    
    let mainAtt = {
        "id": "main-container"
    }
    helperFunctions.createAppendElement("main", homePageContainer, mainAtt)
    let main = document.querySelector("#main-container")

    let mainTitleAtt = {
        "id": "nav-main-title",
        "textContent": "Bosphorus Restaurant"
    }
    helperFunctions.createAppendElement("h1", main, mainTitleAtt, "Bosphorus Restaurant")

    let mainImgAtt = {
        "id": "main-img",
        "src": "https://media.timeout.com/images/105416933/630/472/image.jpg",
        "alt": "Restauran Image"
    }
    helperFunctions.createAppendElement("img", main, mainImgAtt)

    let articleAtt = {
        "id": "article-container"
    }
    helperFunctions.createAppendElement("article", main, articleAtt)
    let article = document.querySelector("#article-container")

    let articleTitleAtt = {
        "id": "article-title"
    }
    helperFunctions.createAppendElement("h2", article, articleTitleAtt, "Intercontinental Experince")

    let articlePara = document.createElement("p")
    let articleParaAtt = {
        "id": "article-paragraph"
    }        
    let articleParaText = "We are at the very edge of the Europe, you can enjoy the view of Bosphorous and Asia continent while getting the best service, tradational Turkish cousine with Turkish hospitality."
    helperFunctions.createAppendElement("p", article, articleParaAtt, articleParaText)
    let mainContent = (function(){
    })()
    
}

export {homePage, helperFunctions}