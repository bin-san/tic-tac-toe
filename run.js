const GAME_WINDOW = document.getElementById("game-window")
const HOME_PAGE = document.getElementById("homepage")
const PLAY_WITH_BOT_LOGIN_PAGE = document.getElementById("playwithbotloginpage")
var CURRENT_PAGE = HOME_PAGE //keep a track of the current page

//bindings 
document.defaultView.onresize = (event)=>{
    //sets for different screen
    screenAdapt(GAME_WINDOW)
}

//raw program
screenAdapt(GAME_WINDOW)
//pageLoader(HOME_PAGE)
HOME_PAGE.hidden = true
