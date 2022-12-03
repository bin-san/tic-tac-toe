function screenAdapt(GAME_WINDOW) {
    //Adapts the screen according to the window size
    let mw_WIDTH = window.innerWidth, mw_HEIGHT = window.innerHeight
    if(mw_WIDTH<=mw_HEIGHT){
        GAME_WINDOW.style.width = ""
        GAME_WINDOW.style.height = ""
        GAME_WINDOW.style.position = "absolute"
        GAME_WINDOW.style.top = GAME_WINDOW.style.bottom = GAME_WINDOW.style.left = GAME_WINDOW.style.right = "0vw"
    }
    else{
        GAME_WINDOW.style.position = "absolute"
        GAME_WINDOW.style.top = "0vw"
        GAME_WINDOW.style.bottom = "0vw"
        //let c = (((mw_WIDTH-mw_HEIGHT)*50)/mw_WIDTH).toString()
        GAME_WINDOW.style.left = GAME_WINDOW.style.right = (((mw_WIDTH-mw_HEIGHT)*50)/mw_WIDTH).toString()+"vw"
    }
    
}
function pageLoader(FUTURE_PAGE) {
    if(CURRENT_PAGE==FUTURE_PAGE){
        return
    }
    CURRENT_PAGE.hidden = true
    FUTURE_PAGE.hidden = false
    CURRENT_PAGE = FUTURE_PAGE
}

//functions
function createBotSelectionWindow() {
    console.log("Creating window")
    document.querySelector(".selectbotform").hidden = false
}

function destroyBotSelectionWindow(){
    document.querySelector(".selectbotform").hidden = true
}
