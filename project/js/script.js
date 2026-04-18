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


let cardId = -1;

let alreadySelected = false;
let optionCount = 0;


let nextTurn = 1
let skillPoints = 3;
let ultchargeC1 = 20;
let ultchargeC2 = 0;
let ultchargeC3 = 0;
let ability1Selected = false
let ability2Selected = false
let ability3Selected = false

let enemys = [
    {
        name: 'Stormbringer',
        hp: 6,
        attack:1
    }



]

let characters = [
    {
        name: `${Character1Name}`,
        image: "./img/Aemeath_Splash_Art.png",
        gif: "./gif/AemethHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(237, 166, 214)",
        hp: 5,
        attack: 2
    },
    {
        name: `${Character2Name}`,
        image: "./img/Castorice_Splash_Art.png",
        gif: "./gif/CastoriceHover.gif",
        gifPos: "center",
        backgroundColor:"rgba(123, 55, 172)",
        backgroundSize: "200",
        hp:3
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


let options = [
    {
        title: "Pain for Power",
        description: "start with 2 extra Skill Points but all character lose 25% hp"
    },
    {
        title: "Sacrificial Pact",
        description: "one random character is unable to attack for 2 turns but one random character gets +3 atk"
    },
    {
        title: "Blood Surge",
        description: "all characters gain +4 attack but lose -2 hp"
    },
    {
        title: "Time Warp",
        description: "all characters have a turn in the start but the enemys get +3 atk"
    },
    {
        title: "Wild Gamble",
        description: "one random character gains +6 attack but another random character skips their next turn"
    },
    {
        title: "Chain Assault",
        description: "all characters attack twice but cannot use enhance skill for this battle"
    },
    {
        title: "Overclocked",
        description: "gain 5+ atk but every character takes 1- hp at the end of every turn"
    }
    
]


let preBattleCards = [
    {   name: "Card 1",
        image: "./img/Card_PreBattle1.png", 
    },
    {
        name: "Card 2",
        image: "./img/Card_PreBattle2.png",
    },
    {
        name: "Card 3",
        image: "./img/Card_PreBattle3.png",
    },
    {
        name: "Card 4",
        image: "./img/Card_PreBattle4.png"
    }
]



function navigateToLobby(){
   
    overlay.innerHTML = `
    <div id="popUpScreen">
        <div id="tutorialQuestionBox">
            <h1>Would you like to play the Tutorial?</h1>
            <div id="yesOrNoBoxes">
                <div onclick="navigateToTutorial()" id="yesButton">Yes</div>
                <div onclick="removePopUp()" id="noButton">No</div>
            </div>
        </div>
    </div>
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
        
    
    
    
   `
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
    <div id="vowBox">
        <h1 id="vowTitle">Choose a Vow</h1>

    
        <div id="option1" class="optionBox" onclick="selectOption(this,0)"></div>


        <div id="option2" class="optionBox" onclick="selectOption(this,1)"></div>
    
    </div>
`   
    let backToLobbyButton = document.getElementById("backToLobbyButton")
    let option1= document.getElementById("option1")
    let option2= document.getElementById("option2")
    let vowBox = document.getElementById("vowBox")  
    let preBattleCard = document.getElementById("preBattleCard")
    
    let randomCard =  setInterval(() => { 
       
        preBattleCard.style.backgroundImage = `url('./img/Card_PreBattle${Math.floor(Math.random() * 4) + 1}.png')`
        let randomNumber = Math.floor(Math.random() * options.length)
        let randomNumber2 = Math.floor(Math.random() * options.length)
        option1.innerHTML = `
        <h1><img class="choiceIcon" src="./img/Icon_Choice.png"> ${options[randomNumber].title}</h1>
        <p>${options[randomNumber].description}</p>
        <div onclick="navigateToBattle()" class="confirmOptionBattleCards"></div>
        `
        option2.innerHTML = `
        <h1><img class="choiceIcon" src="./img/Icon_Choice.png"> ${options[randomNumber2].title}</h1>
        <p>${options[randomNumber2].description}</p>
        <div onclick="navigateToBattle()" class="confirmOptionBattleCards"></div>
        `     
        let confirm = document.getElementsByClassName("confirmOptionBattleCards")

        for (let i = 0; i < confirm.length; i++) {
            confirm[i].style.display = "none"
            
        }
        
    }, 100) 
    setTimeout(() => {
        clearInterval(randomCard)
        option1.classList.add("selectedOption")
        option2.classList.add("selectedOption2")
        vowBox.classList.add("vowBoxAnimation")
        preBattleCard.classList.add("preBattleCardAnimation")
        backToLobbyButton.style.display = "none";
    }, 5000)

   
}

function selectOption(option, optionNumber){
    let confirm = document.getElementsByClassName("confirmOptionBattleCards")
    let optionBox = document.getElementsByClassName("optionBox")


    if(optionNumber == 0){
        optionBox[optionNumber].style.border ="2px solid #ffc870"
        confirm[optionNumber].innerHTML = "Confirm"

        optionBox[1].style.border ="none"
        confirm[1].style.display = "none"
        confirm[1].innerHTML = ""

    }else if(optionNumber == 1){
        optionBox[optionNumber].style.border ="2px solid #ffc870"
        confirm[optionNumber].innerHTML = "Confirm"

        optionBox[0].style.border ="none"
        confirm[0].style.display = "none"
        confirm[0].innerHTML = ""
    }
 

    if(!alreadySelected && optionCount == 0){

        confirm[optionNumber].innerHTML = "Confirm"
        confirm[optionNumber].style.display = "block"
        option.style.border = "2px solid #ffc870"; 
        alreadySelected = true
        optionCount++
    }else{
        console.log(optionCount)
        confirm[optionNumber].style.display = "none"
        option.style.border = "none"
        alreadySelected = false
        optionCount--
    }
   
}


function removePopUp(){
    let popUpScreen = document.getElementById("popUpScreen");
    popUpScreen.style.display = "none";
}

function navigateToTutorial() {
    overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBox">
            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>
            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  
            <div id="attacksBox">
                <h1>Attacks</h1>
                <div id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>
            <div id="characterSprites">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>
            <div id="characterBattleInfo">
                <div id="position1Box">
                    <img id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1}%</p>
                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>
                    <div id="playerHpBar"></div>
                </div>
            </div>
            <div id="skillPointBox">
                <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
            </div>
        </div>
    </div>
    `;

    for(let i = 0; i < 5;i++){
        let skillPointBar = document.getElementById("skillPointBar");
        skillPointBar.innerHTML += `<div class="skillPoint"><img src="./img/SkillPoint_uncharged.png"></div>`
      

    }  
    for(let i = 0; i < skillPoints;i++){
            let skillPointsCharged = document.getElementsByClassName("skillPoint")
            skillPointsCharged[i].innerHTML = `<img src="./img/SkillPoint_charged.png">`
            skillPointsCharged[i].style.filter = "grayscale(0%)"
            
        }
    for(let i = 0; i < enemys[0].hp;i++){
        let enemyHpBar = document.getElementById("enemyHpBar");
        enemyHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[0].hp;i++){
        let playerHpBar = document.getElementById("playerHpBar");
        playerHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }

    let playerTurn = document.getElementById("playerTurn");
    let enemyTurn = document.getElementById("enemyTurn");

    if (nextTurn == 0) {
        playerTurn.classList.add("nextTurn");
        enemyTurn.classList.remove("nextTurn");
    } else {
        enemyTurn.classList.add("nextTurn");
        playerTurn.classList.remove("nextTurn");
    }
}

