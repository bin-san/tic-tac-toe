//variables and constants
const GAME_WINDOW = document.getElementById("game-window")
const HOME_PAGE = document.getElementById("homepage")
const PLAY_WITH_BOT_LOGIN_PAGE = document.getElementById("playwithbotloginpage")
var CURRENT_PAGE = null //keep a track of the current page
const SBTFBTN = document.getElementById("sbtfbtn")
const BOTLIST = document.getElementById("botlist")

//functions
function pageLoader(FUTURE_PAGE) {
    if(CURRENT_PAGE==FUTURE_PAGE){
        return
    }
    if(CURRENT_PAGE!=null){
        CURRENT_PAGE.style.display = "none"
    }
    FUTURE_PAGE.style.display = ""
    CURRENT_PAGE = FUTURE_PAGE
}
function botSelected(event){
    let t = event.target
    let c = BOTLIST.children
    for(j of c){
        j.style.borderColor = "transparent"
    }
    BOTLIST.selection = t.alt
    t.style.borderColor = "#00ff99"
    SBTFBTN.innerText = "Play with @"+BOTLIST.selection
}

//function bindings
//homepage
document.getElementById("hpb1").onclick = ()=>{
    pageLoader(PLAY_WITH_BOT_LOGIN_PAGE)
}
document.getElementById("hpb2").onclick = ()=>{
    console.log("Not ready yet")
}
//botloginformpage
document.getElementById("sbtf2").onblur = ()=>{
    document.getElementById("sbtf1").style.display = "none"
}
document.getElementById("botlnbtn1").onclick = ()=>{
    pageLoader(HOME_PAGE)
}
document.getElementById("botlnbtn2").onclick = ()=>{
    document.getElementById("sbtf1").style.display = ""
    document.getElementById("sbtf2").focus()
}
document.getElementById("botlnbtn3").onclick = ()=>{
    
}
let temp = document.getElementsByClassName("bot botbtn")
for (let i of temp){
    i.addEventListener("click",botSelected)
}

SBTFBTN.onclick = (e)=>{
    let botname = BOTLIST.selection
    document.getElementById("sbtf1").style.display = "none"
    document.getElementById("botlnbtn2").innerText = "@"+botname
    document.getElementById("botlnbtn2").value = botname
}

//runnable code
pageLoader(PLAY_WITH_BOT_LOGIN_PAGE)



