let overlay = document.getElementById("overlay");
let Character1Name = "Aemeath";
let Character2Name = "Castorice";
let Character3Name = "Qiuyuan";
let featuredCharacterName = "Dan Heng";
let TeamLevelNumber = 3;
let wishRemaining = 70;


function navigateToLobby(){
   
    overlay.innerHTML = `<div id="lobbyScreen">
        <div id="navbar">
            <img onclick="navigateToWish()" id="wishingIcon" src="./img/Icon_Wishing.png" alt="Wish">
            <img onclick="navigateToTeamLineup()" id="teamLineupIcon" src="./img/Icon_TeamLineup.png" alt="Team Lineup">
            <img onclick="navigateToCharacters()" id="charactersIcon" src="./img/Icon_Characters.png" alt="Characters">
        </div>
        <div id="WorldSelecter">
        <div id="PracticeRange"><p>Practice Range</p></div>
            <div id="worldIcon">
                <img onclick="navigateToPlanets()" src="./img/World_The_Xianzhou_Luofu.png" alt="worldIcon">
            </div>
            <div id="ConfirmButton"><p>Confirm Planet</p></div>
        </div>
        <div id="CharactersLineup">
            <div id="Character1"><div id="Character1NameBox"><p>${Character1Name}</p></div></div>
            <div id="Character2"><div id="Character2NameBox"><p>${Character2Name}</p></div></div>
            <div id="Character3"><div id="Character3NameBox"><p>${Character3Name}</p></div></div>
        </div>
        <div id="TeamLevel">
            <p>Team Level</p>
            <p id="TeamLevelNumber">${TeamLevelNumber}</p>

        </div>
        
    
    
    
    </div>`
    overlay.style.backgroundImage = "url('./img/lobbyScreen.png')"




}

function navigateToWish(){
    overlay.innerHTML = `<div id="wishingScreen">  
    </div>
    <div id="wishingBox">
        <div id="featuredCharacter">
        </div>
        <div id="wishingInfo">    
        <h1>${featuredCharacterName}</h1>
        <p id="infoText">Every <mark>10x</mark> Wish gives a chance to obtain a 5-star character!<hr>
            <div id="pityCounter">
                <p>Guranteed 5-star character after <mark> 80 </mark> wishes</p><hr>
                <p id="wishRemaining">Wishes Till 5-Star: <mark> ${wishRemaining}</mark></p>
            </div>
        </div>
        <div id="wishing">
           <p>10x</p> <img src="./img/Item_Wishing_Style_1.png" alt="Other Characters">
        </div>
    </div>

    <div id="wishingCharacters">
        <div id="wishingCharacter1">
        </div>
        <div id="wishingCharacter2">
        </div>
    </div>
    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    `
 
    

        
  



}

function navigateToPlanets(){
    overlay.innerHTML = `<div id="planetsScreen">
    </div>
    <div id="planets"><div id="planet1"><p>The Xianzhou Luofu</p></div>
    <div id="planet2"><p>Planet 2</p></div>
    <div id="planet3"><p>Planet 3</p></div>
    </div>
    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    `

}