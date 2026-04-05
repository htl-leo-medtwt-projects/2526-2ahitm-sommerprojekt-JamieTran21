let overlay = document.getElementById("overlay");
let Character1Name = "Aemeath";
let Character2Name = "Castorice";
let Character3Name = "Qiuyuan";
let TeamLevelNumber = 3;


function navigateToLobby(){
   
    overlay.innerHTML = `<div id="lobbyScreen">
        <div id="navbar">
            <img id="wishingIcon" src="./img/Icon_Wishing.png" alt="Wish">
            <img id="teamLineupIcon" src="./img/Icon_TeamLineup.png" alt="Team Lineup">
            <img id="charactersIcon" src="./img/Icon_Characters.png" alt="Characters">
        </div>
        <div id="WorldSelecter">
        <div id="PracticeRange"><p>Practice Range</p></div>
            <div id="worldIcon">
                <img src="./img/World_The_Xianzhou_Luofu.png" alt="worldIcon">
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