let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let hLead = document.getElementById("homelead")
let gLead = document.getElementById("guestlead")

function checkLead() {
    if( parseInt(homeScore.textContent) == parseInt(guestScore.textContent) ) {
        hLead.textContent = ""
        gLead.textContent = ""
    }
    else if (parseInt(homeScore.textContent) > parseInt(guestScore.textContent) ){
        hLead.textContent = "Ahead"
        gLead.textContent = ""
    } else {
        hLead.textContent = ""
        gLead.textContent = "Ahead"
    }
}


function addOneH() {
    let num = parseInt(homeScore.textContent)
    homeScore.textContent = num + 1
    checkLead()
} 

function addTwoH() {
    let num = parseInt(homeScore.textContent)
    homeScore.textContent = num + 2
    checkLead()
}

function addThreeH() {
    let num = parseInt(homeScore.textContent)
    homeScore.textContent = num + 3
    checkLead()
}



function addOneG() {
    let num = parseInt(guestScore.textContent)
    guestScore.textContent = num + 1
    checkLead()
}

function addTwoG() {
    let num = parseInt(guestScore.textContent)
    guestScore.textContent = num + 2
    checkLead()
}

function addThreeG() {
    let num = parseInt(guestScore.textContent)
    guestScore.textContent = num + 3
    checkLead()
}

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    checkLead()
}

