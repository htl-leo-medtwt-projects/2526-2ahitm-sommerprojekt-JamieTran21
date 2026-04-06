let overlay = document.getElementById("overlay");
let Character1Name = "Aemeath";
let Character2Name = "Castorice";
let Character3Name = "Qiuyuan";
let Character4Name = "Hyacine";
let Character5Name = "Dan Heng";
let Character6Name = "Shorekeeper";

let featuredCharacterName = "Dan Heng";

let TeamLevelNumber = 3;

let wishRemaining = 70;

let fightsRemaining = 2;

let teamPos1= 1;
let teamPos2 = 2;
let teamPos3 = 3;
let notIndexedText = "Not Indexed";


let currentIndex = 0;

let characters = [
    {
        name: `${Character1Name}`,
        image: "./img/Aemeath_Splash_Art.png",
        gif: "./gif/AemethHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(237, 166, 214)"
    },
    {
        name: `${Character2Name}`,
        image: "./img/Castorice_Splash_Art.png",
        gif: "./gif/CastoriceHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(123, 55, 172)",
        backgroundSize: "200"
    },
    {
        name: `${Character3Name}`,
        image: "./img/Qiuyuan_Splash_Art.png",
        gif: "./gif/QiuyuanHover.gif",
        gifPos: "left",
        backgroundColor:"rgba(48, 53, 62)"
    },
    {
        name: `${Character4Name}`,
        image: "./img/Hyacine_Splash_Art.png",
        gif: "./gif/HyacineHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(248, 204, 200)",
    },
    {
        name: `${Character5Name}`,
        image: "./img/Dan_Heng_Splash_Art.png",
        gif: "./gif/DanHengHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(42, 61, 69)",
        backgroundSize: "300"
    },
    {
        name: `${Character6Name}`,
        image: "./img/Shorekeeper_Splash_Art.png",
        gif: "./gif/ShorekeeperHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(21, 51, 153)",
        backgroundSize: "230"
    }

]


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
            <div onclick="navigateToPreBattleChoice()" id="ConfirmButton"><p>Confirm Planet</p></div>
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
    <div id="textBox">
     <h1><img src="./img/Icon_Wishing.png">Wish</h1>
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
    <div id="textBox">
     <h1><img src="./img/Icon_Planet.png">Planets</h1>
    </div>
    <div id="howManyFightsTillNewPlanet">
        <h1>Fights Till New Planet</h1>
        <p id="fightsRemaining">Fights Remaining: <mark> ${fightsRemaining} </mark></p>
    </div>
    <div id="planets">
        <div id="planet1"></div>
        <div id="planet2"></div>
        <div id="planet3"></div>
        <div id="planet4"></div>
        <div id="planet5"></div>
    </div>
    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    `

}

function navigateToTeamLineup(){
    overlay.innerHTML = `<div id="teamLineupScreen">
    </div>
    <div id="textBox">
     <h1><img src="./img/Icon_TeamLineup.png">Team Lineup</h1>
    </div>
    <div id="teamLineupCharacters">
        <div id="teamLineupCharacter1"><div id="teamPos1"><p>${teamPos1}</p></div></div>
        <div id="teamLineupCharacter2"><div id="teamPos2"><p>${teamPos2}</p></div></div>
        <div id="teamLineupCharacter3"><div id="teamPos3"><p>${teamPos3}</p></div></div>
        <div id="teamLineupCharacter4"><div id="teamPos4"><p class="notIndexed">${notIndexedText}</p></div></div>
        <div id="teamLineupCharacter5"><div id="teamPos5"><p class="notIndexed">${notIndexedText}</p></div></div>
        <div id="teamLineupCharacter6"><div id="teamPos6"><p class="notIndexed">${notIndexedText}</p></div></div>
    </div>
    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    <div onclick="navigateToLobby()" id="confirmTeamLineupButton">
        <p>Confirm Team Lineup</p>
    </div>
    `
}

function navigateToCharacters(){
    overlay.innerHTML = `<div id="charactersScreen">
    </div>
    <div id="textBox">
     <h1><img src="./img/Icon_Data_Bank.png">Character<br> Data Bank</h1>
    </div>
    <div id="characters">
        <div id="characterSlideshow"><div id="CharactersNameBox"><p>${Character1Name}</p></div></div>
    </div>
    <div id="switchButtonContainer">
        <div id="left" onclick="toleft()"><img src="img/nav-arrow.png" alt="navLeftArrow"></div>
        <div id="right" onclick="toright()"><img src="img/nav-arrow.png" alt="navRightArrow"></div>
    </div>

    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    `
    let characterSlideshowImg = document.getElementById("characterSlideshow")
    characterSlideshowImg.addEventListener("mouseover", () => {
    characterSlideshowImg.style.backgroundImage = `url('./gif/AemethHover.gif')`;
    })
    characterSlideshowImg.addEventListener("mouseout", () => {
        characterSlideshowImg.style.backgroundImage = `url('./img/Aemeath_Splash_Art.png')`;
    })
} 

function toleft(){
    let characterSlideshowImg = document.getElementById("characterSlideshow")
    let characterNameBox = document.getElementById("CharactersNameBox")


    currentIndex--;

    if(currentIndex < 0){    
        currentIndex = characters.length-1;
     
        characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        characterNameBox.innerHTML = `<p>${characters[currentIndex].name}</p>`
        characterSlideshowImg.style.backgroundColor = characters[currentIndex].backgroundColor;

        if(characters[currentIndex].backgroundSize){
            characterSlideshowImg.style.backgroundSize = parseInt(characters[currentIndex].backgroundSize)+ "%";
        }else{
            characterSlideshowImg.style.backgroundSize = "cover";
        }

        characterSlideshowImg.addEventListener("mouseover", () => {
            characterSlideshowImg.style.backgroundSize = "cover";
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].gif}')`;
            if(characters[currentIndex].gifPos == "left"){
                characterSlideshowImg.style.backgroundPosition = "left";
            }else{
                characterSlideshowImg.style.backgroundPosition = "center";
            }
      
        })

        characterSlideshowImg.addEventListener("mouseout", () => {
            if(characters[currentIndex].backgroundSize){
                characterSlideshowImg.style.backgroundSize = parseInt(characters[currentIndex].backgroundSize)+ "%";
            }else{
            characterSlideshowImg.style.backgroundSize = "cover";
            }
            characterSlideshowImg.style.backgroundPosition = "center";
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        })





    }else{
        characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        characterNameBox.innerHTML = `<p>${characters[currentIndex].name}</p>`
        characterSlideshowImg.style.backgroundColor = characters[currentIndex].backgroundColor;

        characterSlideshowImg.addEventListener("mouseover", () => {
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].gif}')`;
        })

        characterSlideshowImg.addEventListener("mouseout", () => {
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        })

        if(characters[currentIndex].backgroundSize){
            characterSlideshowImg.style.backgroundSize = parseInt(characters[currentIndex].backgroundSize)+ "%";
        }else{
            characterSlideshowImg.style.backgroundSize = "cover";
        }
    }
    console.log(currentIndex)


}

function toright(){
        let characterSlideshowImg = document.getElementById("characterSlideshow")
    let characterNameBox = document.getElementById("CharactersNameBox")


    currentIndex++;

    if(currentIndex == characters.length){    
        currentIndex = 0;
     
        characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        characterNameBox.innerHTML = `<p>${characters[currentIndex].name}</p>`
        characterSlideshowImg.style.backgroundColor = characters[currentIndex].backgroundColor;

        if(characters[currentIndex].backgroundSize){
            characterSlideshowImg.style.backgroundSize = parseInt(characters[currentIndex].backgroundSize)+ "%";
        }else{
            characterSlideshowImg.style.backgroundSize = "cover";
        }

        characterSlideshowImg.addEventListener("mouseover", () => {
            characterSlideshowImg.style.backgroundSize = "cover";
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].gif}')`;
            if(characters[currentIndex].gifPos == "left"){
                characterSlideshowImg.style.backgroundPosition = "left";
            }else{
                characterSlideshowImg.style.backgroundPosition = "center";
            }
      
        })

        characterSlideshowImg.addEventListener("mouseout", () => {
            if(characters[currentIndex].backgroundSize){
                characterSlideshowImg.style.backgroundSize = parseInt(characters[currentIndex].backgroundSize)+ "%";
            }else{
            characterSlideshowImg.style.backgroundSize = "cover";
            }
            characterSlideshowImg.style.backgroundPosition = "center";
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        })





    }else{
        characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        characterNameBox.innerHTML = `<p>${characters[currentIndex].name}</p>`
        characterSlideshowImg.style.backgroundColor = characters[currentIndex].backgroundColor;

        characterSlideshowImg.addEventListener("mouseover", () => {
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].gif}')`;
        })

        characterSlideshowImg.addEventListener("mouseout", () => {
            characterSlideshowImg.style.backgroundImage = `url('${characters[currentIndex].image}')`;
        })

        if(characters[currentIndex].backgroundSize){
            characterSlideshowImg.style.backgroundSize = parseInt(characters[currentIndex].backgroundSize)+ "%";
        }else{
            characterSlideshowImg.style.backgroundSize = "cover";
        }
    }
    console.log(currentIndex)

}

function navigateToPreBattleChoice(){
    overlay.innerHTML = `<div id="preBattleChoiceScreen">
    </div>
    <div id="textBox">
        <h1><img src="./img/Icon_PreBattle.png">Pre-Battle<br> Card</h1>
    </div>
    <div id="preBattleChoice">
        <div id="preBattleCard"><p></p></div>
    </div>
    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    `
    let backToLobbyButton = document.getElementById("backToLobbyButton")


    let randomCard =  setInterval(() => {
        let preBattleCard = document.getElementById("preBattleCard")
        preBattleCard.style.backgroundImage = `url('./img/Card_PreBattle${Math.floor(Math.random() * 4) + 1}.png')`
    }, 100) 
    setTimeout(() => {
    clearInterval(randomCard)
    preBattleCard.classList.add("preBattleCardAnimation")
    backToLobbyButton.style.display = "none";
    }, 5000)

}