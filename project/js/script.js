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
let ultchargeC1Tut = 20;
let ultchargeC2 = 0;
let ultchargeC3 = 0;
let wishes = 20;
let quickFarm = 1;
let startCharacters = [Character1Name, Character2Name, Character3Name];

if (localStorage.getItem("ownedCharacters") == null) {
    localStorage.setItem("ownedCharacters", JSON.stringify(startCharacters));
}

if (localStorage.getItem("wishes") == null) {
    localStorage.setItem("wishes", wishes);
}

if (localStorage.getItem("quickFarm") == null) {
    localStorage.setItem("quickFarm", quickFarm);
}

if (localStorage.getItem("teamLevel") == null) {
    localStorage.setItem("teamLevel", TeamLevelNumber);
}

wishes = parseInt(localStorage.getItem("wishes"));
quickFarm = parseInt(localStorage.getItem("quickFarm"));
TeamLevelNumber = parseInt(localStorage.getItem("teamLevel"));


let goToNextStep = false

let understand = false

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
        backgroundColor: "rgba(237, 166, 214)",
        posSprite: "./img/Aemeath_Sprite.png",
        skillSprite: "./img/Aemeath_attackSkill.png",
        skillAttack: "./img/Skill_Aemeath.png",
        basicAttack: "./img/Basic_Aemeath.png",
        turnIcon: "./img/Aemeath_Icon.png",
        attackSkill: "./img/Skill_Aemeath.png",
        ultimateSkill: "./img/Aemeath_Ultimate.png",
        hp: 5,
        attack1: 1,
        attack2: 2,
        attack3: 3
    },
    {
        name: `${Character2Name}`,
        image: "./img/Castorice_Splash_Art.png",
        gif: "./gif/CastoriceHover.gif",
        gifPos: "center",
        backgroundColor: "rgba(123, 55, 172)",
        backgroundSize: "200",
        posSprite: "./img/Castorice_Sprite.png",
        skillSprite: "./img/Castorice_attackSkill.png",
        skillAttack: "./img/Skill_Castorice.png",
        basicAttack: "./img/Basic_Castorice.png",
        turnIcon: "./img/Castorice_Icon.png",
        hp: 4,
    },
    {
        name: `${Character3Name}`,
        image: "./img/Qiuyuan_Splash_Art.png",
        gif: "./gif/QiuyuanHover.gif",
        gifPos: "left",
        backgroundColor: "rgba(48, 53, 62)"
    },
    {
        name: `${Character4Name}`,
        image: "./img/Hyacine_Splash_Art.png",
        gif: "./gif/HyacineHover.gif",
        gifPos: "center",
        backgroundColor: "rgba(248, 204, 200)"
    },
    {
        name: `${Character5Name}`,
        image: "./img/Dan_Heng_Splash_Art.png",
        gif: "./gif/DanHengHover.gif",
        gifPos: "center",
        backgroundColor: "rgba(42, 61, 69)",
        backgroundSize: "300",
        owned: false
    },
    {
        name: `${Character6Name}`,
        image: "./img/Shorekeeper_Splash_Art.png",
        gif: "./gif/ShorekeeperHover.gif",
        gifPos: "center",
        backgroundColor: "rgba(21, 51, 153)",
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
                <div onclick="navigateToPreBattleChoiceTutorial()" id="yesButton">Yes</div>
                <div onclick="removePopUp();" id="noButton">No</div>
            </div>
        </div>
    </div>
        <div id="navbar">
            <img onclick="navigateToWish()" id="wishingIcon" src="./img/Icon_Wishing.png" alt="Wish">
            <img onclick="navigateToTeamLineup()" id="teamLineupIcon" src="./img/Icon_TeamLineup.png" alt="Team Lineup">
            <img onclick="navigateToCharacters()" id="charactersIcon" src="./img/Icon_Characters.png" alt="Characters">
        </div>
        <div id="WorldSelecter">
        <div onclick="navigateToPracticeRange()" id="PracticeRange"><p>Practice Range</p></div>
            <div id="worldIcon">
                <img onclick="navigateToPlanets()" src="./img/World_The_Xianzhou_Luofu.png" alt="worldIcon">
            </div>
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
    //? mit Ki
    overlay.innerHTML = `
    <div id="wishingScreen"></div>

    <div id="textBox">
        <h1><img src="./img/Icon_Wishing.png">Wish</h1>
    </div>

    <div id="wishingBox">
        <div id="featuredCharacter"></div>

        <div id="wishingInfo">
            <h1>${featuredCharacterName}</h1>

            <p id="infoText">
                Every <mark>10x</mark> Wish gives a chance to obtain a 5-star character!
                <hr>

            <div id="pityCounter">
                <p>Guaranteed 5-star character after <mark>80</mark> wishes</p>
                <hr>
                <p id="wishRemaining">
                    Wishes Till 5-Star: <mark>${wishRemaining}</mark>
                </p>
            </div>
        </div>

        <div id="wishing"
            onclick="${wishes >= 10 ? 'wishingAnimation()' : ''}"
            style="cursor: ${wishes >= 10 ? 'pointer' : 'not-allowed'}; opacity: ${wishes >= 10 ? 1 : 0.5};"
        >
            <p>10x</p>
            <img src="./img/Item_Wishing_Style_1.png">
        </div>
    </div>

    <div id="wishingCharacters">
        <div id="wishingCharacter1"></div>
        <div id="wishingCharacter2"></div>
    </div>

    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>

    <div id="playerWishes">
        <h1>${wishes}</h1>
        <img src="./img/Item_Wishing_Style_1.png">
    </div>
`;
 
    

        
  



}

function wishingAnimation(){
    wishes =wishes -10;
    localStorage.setItem("wishes", wishes);


    let chanceOfChar = Math.floor(Math.random() * 2) 
    console.log(chanceOfChar)
    if(chanceOfChar == 0){
            overlay.innerHTML = 
            
            `
            <div id="messageBox"><p id="wishingMessage">No Luck:(</p><img id="NoLuckSticker" src="./img/NoLuck.png" ></div>
           
   
           <div id="wishingScreen">  
        </div>   
        <div id="popUpWishing">
         </div>  
       
        <div id="wishingBox">
         <div id="textBox">
        <h1><img src="./img/Icon_Wishing.png">Wish</h1>
        </div>
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
            <div id="wishing" onclick="wishingAnimation()">
            <p>10x</p> <img src="./img/Item_Wishing_Style_1.png" alt="Other Characters">
            </div>
        </div>
        <div id="wishingCharacters">
            <div id="wishingCharacter1">
            </div>
            <div id="wishingCharacter2">
            </div> 
             <div id="backToLobbyButton" onclick="navigateToLobby()">
            <p>Back to Lobby</p>
        </div>
        <div id="playerWishes"><h1>${wishes}</h1> <img src="./img/Item_Wishing_Style_1.png"</div> 
        </div>
      
    
    `
    overlay.innerHTML+=`
        <div id="loadingBar"></div>
    `
    let loadingUp= 10
    let loading = setInterval(() => {
        document.getElementById("loadingBar").style.width = `${loadingUp}vw`;
        loadingUp += 10;
        if(loadingUp == 100){
            clearInterval(loading)
            wishes-= 10
            navigateToWish()
        }
    }, 200);

    }else {
        overlay.innerHTML = `<video id="animationVideo" src="./videos/danHengAnimation.mp4" autoplay muted></video>`;
        setTimeout(() => {
            let ownedCharacters = JSON.parse(localStorage.getItem("ownedCharacters"));
            let alreadyOwned = false;
            for (let i = 0; i < ownedCharacters.length; i++) {
                if (ownedCharacters[i] == Character5Name) {
                    alreadyOwned = true;
                }
            }
            if (alreadyOwned == false) {
                ownedCharacters.push(Character5Name);
                localStorage.setItem("ownedCharacters", JSON.stringify(ownedCharacters));
            }
            navigateToWish();
        }, 4500);
    }


}

function navigateToPlanets(){
    overlay.style.overflow = "hidden"; 

    overlay.innerHTML = `
    <div id="planetsScreen"></div>

    <div id="textBox">
        <h1><img src="./img/Icon_Planet.png">Planets</h1>
    </div>

    <div id="howManyFightsTillNewPlanet">
        <h1>Fights Till New Planet</h1>
        <p id="fightsRemaining">
            Fights Remaining: <mark>${fightsRemaining}</mark>
        </p>
    </div>

    <div class="swiper">
        <div class="swiper-wrapper">

            <div class="swiper-slide">
                <div class="planet" id="planet1"></div>
            </div>

            <div class="swiper-slide">
                <div class="planet" id="planet2"></div>
            </div>

            <div class="swiper-slide">
                <div class="planet" id="planet3"></div>
            </div>

        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>

    <div id="backToLobbyButton" onclick="navigateToLobby()">
        <p>Back to Lobby</p>
    </div>
    <div onclick="navigateToPreBattleChoice()" id="ConfirmButton"><p>Confirm Planet</p></div>
    `;

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 50,
        centeredSlides: true,
        grabCursor: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
     // <div id="planet3"></div>
        // <div id="planet4"></div>
        // <div id="planet5"></div>
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
if(localStorage.getItem("ownedCharacters").includes(Character5Name)){
    document.getElementById("teamLineupCharacter5").style.filter = `grayscale(0%)`;
    document.getElementById("teamPos5").innerHTML = `<p>${Character5Name}</p>`
}
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
        while(randomNumber == randomNumber2){
            randomNumber2 = Math.floor(Math.random() * options.length)
        }
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
    }, 100)

   
}

function selectOption(option, optionNumber){
    let confirm = document.getElementsByClassName("confirmOptionBattleCards")
    let optionBox = document.getElementsByClassName("optionBox")


    if(optionNumber == 0){
        optionBox[optionNumber].style.border ="2px solid #ffc870"
        confirm[optionNumber].innerHTML = `<div onclick="navigateToBattle()">Confirm</div>`

        optionBox[1].style.border ="none"
        confirm[1].style.display = "none"
        confirm[1].innerHTML = ""

    }else if(optionNumber == 1){
        optionBox[optionNumber].style.border ="2px solid #ffc870"
        confirm[optionNumber].innerHTML =  `<div onclick="navigateToBattle()">Confirm</div>`

        optionBox[0].style.border ="none"
        confirm[0].style.display = "none"
        confirm[0].innerHTML = ""
    }
 

    if(!alreadySelected && optionCount == 0){

        confirm[optionNumber].innerHTML = `<div onclick="navigateToBattle()">Confirm</div>`
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
let popUp = false
function navigateToPreBattleChoiceTutorial(){ 



    if(!popUp){
    overlay.innerHTML = `<div id="preBattleChoiceScreen">
    </div>
    <div id="popUpScreen">
        <div id="tutorialQuestionBox2">
            <h1 id="tutorialQuestion">Pre-Battle Choice</h1>
            <div id="tutorialInfo">
            <p class="tutorialQuickInfo">-Random Shuffle.</p>
            <p class="tutorialQuickInfo">-Draw a Vow</p>
            <p class="tutorialQuickInfo">-Get a Buff and Debuff.</p>
            <p class="tutorialQuickInfo">-This time, your Vow is chosen for you.</p>
            </div>
            <div id="yesOrNoBoxes">
                <div onclick="removePopUp(),nextStep()" id="confirmButton">I understand</div>
            </div>
        </div>
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
    }else{
        overlay.innerHTML = `<div id="textBox">
        <h1><img src="./img/Icon_PreBattle.png">Pre-Battle<br> Card</h1>
    </div>
    <div id="preBattleChoice">
        <div id="preBattleCard"><p></p></div>
    </div>
    <div id="vowBox">
        <h1 id="vowTitle">Choose a Vow</h1>
    
        <div id="option1" class="optionBox"></div>


        <div id="option2" class="optionBox" style="cursor: not-allowed;"></div>
    
    </div>
    `  
    }
    let backToLobbyButton = document.getElementById("backToLobbyButton")
    let option1= document.getElementById("option1")
    let option2= document.getElementById("option2")
    let vowBox = document.getElementById("vowBox")  
    let preBattleCard = document.getElementById("preBattleCard")
    if(goToNextStep){
        let randomCard =  setInterval(() => { 
        
            preBattleCard.style.backgroundImage = `url('./img/Card_PreBattle${Math.floor(Math.random() * 4) + 1}.png')`
            let randomNumber = Math.floor(Math.random() * options.length)
            let randomNumber2 = Math.floor(Math.random() * options.length)
            option1.innerHTML = `
            <h1><img class="choiceIcon" src="./img/Icon_Choice.png"> ${options[randomNumber].title}</h1>
            <p>${options[randomNumber].description}</p>
            <div onclick="navigateToTutorial()" class="confirmOptionBattleCards"></div>
            `
            option2.innerHTML = `
            <h1><img class="choiceIcon" src="./img/Icon_Choice.png"> ${options[randomNumber2].title}</h1>
            <p>${options[randomNumber2].description}</p>
            <div style="cursor: not-allowed;" class="confirmOptionBattleCards"></div>
            `     
            let confirm = document.getElementsByClassName("confirmOptionBattleCards")

            for (let i = 0; i < confirm.length; i++) {
                confirm[i].style.display = "none"
                
            }
            
        }, 100) 
        setTimeout(() => {
            preBattleCard.style.backgroundImage = `url('./img/Card_PreBattleTutorial.png')`
            option1.innerHTML = `
            <h1><img class="choiceIcon" src="./img/Icon_Choice.png"> ${options[6].title}</h1>
            <p>${options[6].description}</p>
            <div onclick="navigateToTutorial()" class="confirmOptionBattleCards"></div>
            `
            option2.innerHTML = `
            <h1><img class="choiceIcon" src="./img/Icon_Choice.png"> ${options[2].title}</h1>
            <p>${options[2].description}</p>
            <div style="cursor: not-allowed;" class="confirmOptionBattleCards"></div>
            `     
            clearInterval(randomCard)
            let optionBox = document.getElementsByClassName("optionBox")
            let confirm = document.getElementsByClassName("confirmOptionBattleCards")
            optionBox[0].style.border ="2px solid #ffc870"
            confirm[0].innerHTML = "Confirm"
            confirm[1].style.display = "none"
            option1.classList.add("selectedOption")
            option2.classList.add("selectedOption2")
            vowBox.classList.add("vowBoxAnimation")
            preBattleCard.classList.add("preBattleCardAnimation")
            backToLobbyButton.style.display = "none";
        }, 300)
    }
   
}

function nextStep(){
    let popUpScreen = document.getElementById("popUpScreen");
    popUpScreen.style.display = "none";
    goToNextStep = true
    popUp = true
    navigateToPreBattleChoiceTutorial()
}

let tutorialStep = 0
function navigateToTutorial() {
    overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBoxTutorial">

            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>

            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  

            <div id="attacksBoxTutorial">
                <h1>Attacks</h1>
                <div id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>

            <div id="characterSpritesTutorial">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>

            <div id="characterBattleInfoTutorial">
                <div id="position1Box">
                    <img id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1Tut}%</p>

                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>

                    <div id="playerHpBar"></div>
                </div>
            </div>

            <div id="skillPointBoxTutorial">
                <div id="skillPointBarTutorial">
                    <p id="skillPointText">${skillPoints}</p>
                </div>
            </div>

        </div>
    </div>
    <div id="tutorialTextBox">
        <h1>Turn Indicator</h1>
        <p>-Who’s playing now<br>
        -and who’s up next</p>
        <div onclick="tutorialStep++, navigateToTutorial()"  id="confirmButton">I understand</div>
    </div>
    <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
    `
   
    for(let i = 0; i < 5;i++){
        let skillPointBar = document.getElementById("skillPointBarTutorial");
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
    let leadingArrow = document.getElementById("leadingArrow")
    let turnBoxTutorial = document.getElementById("turnBoxTutorial")

    switch(tutorialStep){
        case 0:
            turnBoxTutorial.style.boxShadow = "0 0 10px 2px #ffc870";
            leadingArrow.style.top = "5vw"
            leadingArrow.style.left = "15vw"
            break;
        case 1:    
            document.getElementById("attacksBoxTutorial").classList.add("tutorialJump")
            turnBoxTutorial.style.border = "none"
            turnBoxTutorial.style.boxShadow = "";
            document.getElementById("attacksBoxTutorial").style.boxShadow = "0 0 10px 2px #ffc870"
            leadingArrow.style.top = "23vw"
            tutorialTextBox.innerHTML = `
            <h1>Attacks</h1>
            <p>-Your basic skill and enhanced skill<br>
            -Use them to defeat the enemy</p>
            <div onclick="tutorialStep++,  navigateToSkillPointsTutorial(0) "  id="confirmButton">I understand</div>
            `
            break;
    }
}

function navigateToTutorialAttacks(){
    


    overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBoxTutorial">

            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>

            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  

            <div id="attacksBoxTutorial">
                <h1>Attacks</h1>
                <div  onclick="navigateToSkillPoints(0)" id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div onclick="navigateToSkillPoints(1)" id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>

            <div id="characterSpritesTutorial">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>

            <div id="characterBattleInfoTutorial">
                <div id="position1Box">
                    <img id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1Tut}%</p>

                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>

                    <div id="playerHpBar"></div>
                </div>
            </div>

            <div id="skillPointBoxTutorial">
                <div id="skillPointBarTutorial">
                    <p id="skillPointText">${skillPoints}</p>
                </div>
            </div>

        </div>
    </div>
    <div id="tutorialTextBox">
        <h1>Turn Indicator</h1>
        <p>-Who’s playing now<br>
        -and who’s up next</p>
        <div onclick="tutorialStep++, navigateToTutorial()"  id="confirmButton">I understand</div>
    </div>
    <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
    `
    let leadingArrow = document.getElementById("leadingArrow")
    leadingArrow.style.opacity = 0;
    document.getElementById("tutorialContent").style.filter = "brightness(100%)"
    let tutorialTextBox = document.getElementById("tutorialTextBox")
    tutorialTextBox.style.display = "none"
    for(let i = 0; i < 5;i++){
        let skillPointBar = document.getElementById("skillPointBarTutorial");
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
function navigateToSkillPointsTutorial(attackNumber){  
    
    if(attackNumber == 1){

            overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBoxTutorial">

            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>

            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  

            <div id="attacksBoxTutorial">
                <h1>Attacks</h1>
                <div id="attack1"><img style="cursor: not-allowed;" src="./img/Basic_Aemeath.png"></div>
                <div onclick="navigateToDamageTutorial(1)" id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>

            <div id="characterSpritesTutorial">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>

            <div id="characterBattleInfoTutorial">
                <div id="position1Box">
                    <img id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1Tut}%</p>

                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>

                    <div id="playerHpBar"></div>
                </div>
            </div>

            <div id="skillPointBoxTutorial">
                <div id="skillPointBarTutorial">
                    <p id="skillPointText">${skillPoints}</p>
                </div>
            </div>

        </div>
    </div> 
    <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
    <div id="tutorialTextBox">
        <h1>Skill Point Reduction & Enemy losing Hp</h1>
        <p>-Choosing The Enhanced Skill => losing 1 Skill Point<br>
        -deals more damage</p>
        <div onclick="tutorialStep++, navigateToSkillPointsTutorial(1)"  id="confirmButton">I understand</div>
    </div>
   
    `
    }else if(attackNumber == 0){
    
        overlay.innerHTML = `
        <div id="tutorialContent">  
            <div id="turnBoxTutorial">

                <div id="playerTurn">
                    <img src="./img/Aemeath_Icon.png">
                    <p id="playerTurnText">Turn</p>
                </div>

                <div id="enemyTurn">
                    <img src="./img/Enemy_Stormbringer_Icon.png">
                    <p id="enemyTurnText">Next</p>
                </div>  

                <div id="attacksBoxTutorial">
                    <h1>Attacks</h1>
                    <div onclick="navigateToDamageTutorial(0)" id="attack1"><img  src="./img/Basic_Aemeath.png"></div>
                    <div id="attack2"><img style="cursor: not-allowed;" src="./img/Skill_Aemeath.png"></div>
                </div>

                <div id="characterSpritesTutorial">
                    <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                </div>

                <div id="characterBattleInfoTutorial">
                    <div id="position1Box">
                        <img id="playerIcon" src="./img/Aemeath_Icon.png">
                        <p id="ultcharge">${ultchargeC1Tut}%</p>

                        <div id="playerUltimate">  
                            <img onclick="navigateToEndScreen()"  id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                        </div>

                        <div id="playerHpBar"></div>
                    </div>
                </div>

                <div id="skillPointBoxTutorial">
                    <div id="skillPointBarTutorial">
                        <p id="skillPointText">${skillPoints}</p>
                    </div>
                </div>

            </div>
        </div> 
        <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
        <div id="tutorialTextBox">
            <h1>Skill Point Reduction & Enemy losing Hp</h1>
            <p>-Choosing The Enhanced Skill => losing 1 Skill Point<br>
            -Enemy losing Health Points</p>
            <div onclick="tutorialStep++, navigateToSkillPointsTutorial(0)"  id="confirmButton">I understand</div>
        </div>
    
        `
    }
    let tutorialTextBox = document.getElementById("tutorialTextBox")
    if(!understand && attackNumber == 1){
        let skillPointBoxTutorial = document.getElementById("skillPointBoxTutorial")
        skillPointBoxTutorial.classList.add("tutorialJump2")
        skillPointBoxTutorial.style.border = "2px solid #ffc870"
        let enemyHpBarTutorial = document.getElementById("enemyHpBar")
        enemyHpBarTutorial.style.border = "8px solid #ffc870"
        enemyHpBarTutorial.classList.add("tutorialJump")
        let leadingArrow = document.getElementById("leadingArrow")
        leadingArrow.style.opacity = 0;
        document.getElementById("tutorialContent").style.filter = "brightness(50%)"
        tutorialTextBox.style.display = "block"
        understand = true
    }else if(understand && attackNumber == 1){
        let skillPointBoxTutorial = document.getElementById("skillPointBoxTutorial")
        skillPointBoxTutorial.style.border = "none"
        let enemyHpBarTutorial = document.getElementById("enemyHpBar")
        enemyHpBarTutorial.style.border = "none"
        let leadingArrow = document.getElementById("leadingArrow")
        leadingArrow.style.opacity = 0;
        document.getElementById("tutorialContent").style.filter = "brightness(100%)"
        tutorialTextBox.style.display = "none"

    }

        if(!understand && attackNumber == 0){

        let skillPointBoxTutorial = document.getElementById("skillPointBoxTutorial")
        skillPointBoxTutorial.classList.add("tutorialJump2")
        skillPointBoxTutorial.style.border = "2px solid #ffc870"
        let enemyHpBarTutorial = document.getElementById("enemyHpBar")
        enemyHpBarTutorial.style.border = "8px solid #ffc870"
        enemyHpBarTutorial.classList.add("tutorialJump")
        let leadingArrow = document.getElementById("leadingArrow")
        leadingArrow.style.opacity = 0;  
        document.getElementById("tutorialContent").style.filter = "brightness(50%)"
        tutorialTextBox.innerHTML = `
        <h1>Skill Reduction & Enemy losing Hp</h1>
        <p>-Choosing The Basic Skill => gain 1 Skill Point<br>
        -Enemy losing Health Points</p>
        <div onclick="tutorialStep++, navigateToSkillPointsTutorial(1)"  id="confirmButton">I understand</div>
        `
        tutorialTextBox.style.display = "block"
    }else if(understand && attackNumber == 0){
        let skillPointBoxTutorial = document.getElementById("skillPointBoxTutorial")
        skillPointBoxTutorial.style.border = "none"
        let enemyHpBarTutorial = document.getElementById("enemyHpBar")
        enemyHpBarTutorial.style.border = "none"
        let leadingArrow = document.getElementById("leadingArrow")
        leadingArrow.style.opacity = 0;
        document.getElementById("tutorialContent").style.filter = "brightness(100%)"
        tutorialTextBox.style.display = "none"

    }

    if(attackNumber == 2){
               overlay.innerHTML = `
        <div id="tutorialContent">  
            <div id="turnBoxTutorial">

                <div id="playerTurn">
                    <img src="./img/Aemeath_Icon.png">
                    <p id="playerTurnText">Turn</p>
                </div>

                <div id="enemyTurn">
                    <img src="./img/Enemy_Stormbringer_Icon.png">
                    <p id="enemyTurnText">Next</p>
                </div>  

                <div id="attacksBoxTutorial">
                    <h1>Attacks</h1>
                    <div onclick="navigateToDamageTutorial(0)" id="attack1"><img  src="./img/Basic_Aemeath.png"></div>
                    <div id="attack2"><img style="cursor: not-allowed;" src="./img/Skill_Aemeath.png"></div>
                </div>

                <div id="characterSpritesTutorial">
                    <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                </div>

                <div id="characterBattleInfoTutorial">
                    <div id="position1Box">
                        <img id="playerIcon" src="./img/Aemeath_Icon.png">
                        <p id="ultcharge">${ultchargeC1Tut}%</p>

                        <div id="playerUltimate">  
                            <img onclick="navigateToEndScreen()"  id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                        </div>

                        <div id="playerHpBar"></div>
                    </div>
                </div>

                <div id="skillPointBoxTutorial">
                    <div id="skillPointBarTutorial">
                        <p id="skillPointText">${skillPoints}</p>
                    </div>
                </div>

            </div>
        </div> 
    
        `
        tutorialTextBox.style.display = "none"
        document.getElementById("tutorialContent").style.filter = "brightness(100%)"
        document.getElementById("ultimateSkill").style.opacity = 1
    }




    for(let i = 0; i < 5;i++){
        let skillPointBar = document.getElementById("skillPointBarTutorial");
        skillPointBar.innerHTML += `<div class="skillPoint"><img src="./img/SkillPoint_uncharged.png"></div>`
      

    }  
    for(let i = 0; i < skillPoints;i++){
            let skillPointsCharged = document.getElementsByClassName("skillPoint")
            skillPointsCharged[i].innerHTML = `<img src="./img/SkillPoint_charged.png">`
            skillPointsCharged[i].style.filter = "grayscale(0%)" 
            if(attackNumber == 1){
                leadingArrow.style.opacity = 1;
                skillPointsCharged[skillPoints-1].innerHTML = `<img id="skillPointUncharged" src="./img/SkillPoint_charged.png">`
                document.getElementById("skillPointUncharged").classList.add("gettingUncharged")
                skillPointsCharged[skillPoints].style.filter = "grayscale(0%)"
            }
            else if(attackNumber == 0){
                leadingArrow.style.opacity = 1; 
                leadingArrow.style.top = "20vw"
                skillPointsCharged[skillPoints].innerHTML = `<img id="skillPointCharged" src="./img/SkillPoint_charged.png">`
                document.getElementById("skillPointCharged").classList.add("gettingCharged")
                skillPointsCharged[skillPoints].style.filter = "grayscale(0%)"
            }

            
        }
    console.log(enemys[0].hp)
    for(let i = 0; i < enemys[0].hp;i++){
        let enemyHpBar = document.getElementById("enemyHpBar");
        enemyHpBar.innerHTML += `<div class="hpPointEnemy"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[0].hp;i++){
        let playerHpBar = document.getElementById("playerHpBar");
        playerHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }

    let enemyHpBar = document.getElementsByClassName("hpPointEnemy");


    if(attackNumber == 1){    
    for (let i = 0; i < characters[0].attack2; i++) {
        let index = enemyHpBar.length - 1 - i;
        if (enemyHpBar[index]) {
            enemyHpBar[index].innerHTML = `<img  id="losingHp" src="./img/Icon_Hp_losing.png">`;
               document.getElementById("losingHp").classList.add("losingHp")
        }
    }
        let attack2 = document.getElementById("attack2")

        attack2.style.transform = "scale(1.3)"
    }
    if(attackNumber == 0){
        for (let i = 0; i < characters[0].attack1; i++) {
            let index = enemyHpBar.length - 1 - i;
            if (enemyHpBar[index]) {
                enemyHpBar[index].innerHTML = `<img  id="losingHp" src="./img/Icon_Hp_losing.png">`;
                document.getElementById("losingHp").classList.add("losingHp")
            }
        }
        let attack1 = document.getElementById("attack1")

        attack1.style.transform = "scale(1.3)"
    }
    if(attackNumber == 2){
        for (let i = 0; i < characters[0].attack3; i++) {
            let index = enemyHpBar.length - 1 - i;
            if (enemyHpBar[index]) {
                enemyHpBar[index].innerHTML = `<img  id="losingHp" src="./img/Icon_Hp_losing.png">`;
                document.getElementById("losingHp").classList.add("losingHp")
            }
        }
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

let dotDamage = 1;

function navigateToDamageTutorial(attackNumber){
    if(attackNumber == 1){
        skillPoints--
        ultchargeC1Tut+= 65 
        enemys[0].hp -= characters[0].attack2
         overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBoxTutorial">

            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>

            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  

            <div id="attacksBoxTutorial">
                <h1>Attacks</h1>
                <div id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div onclick="navigateToDamage(1)" id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>

            <div id="characterSpritesTutorial">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>

            <div id="characterBattleInfoTutorial">
                <div id="position1Box">
                    <img id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1Tut}%</p>

                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>

                    <div id="playerHpBar"></div>
                </div>
            </div>

            <div id="skillPointBoxTutorial">
                <div id="skillPointBarTutorial">
                    <p id="skillPointText">${skillPoints}</p>
                </div>
            </div>

        </div>
    </div>
    <div id="tutorialTextBox">
        <h1>Now use the Basic Attack to get the last 15% for the Ultimate</h1>
        <div onclick="tutorialStep++, navigateToSkillPointsTutorial(0)"  id="confirmButton">I understand</div>
    </div>
    <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
    `
    let leadingArrow = document.getElementById("leadingArrow")
    leadingArrow.style.opacity = 0
    }else if(attackNumber == 0){
        skillPoints++
        ultchargeC1+= 15
        enemys[0].hp -= characters[0].attack1
         overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBoxTutorial">

            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>

            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  

            <div id="attacksBoxTutorial">
                <h1>Attacks</h1>
                <div id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div onclick="navigateToDamage(1)" id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>

            <div id="characterSpritesTutorial">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>

            <div id="characterBattleInfoTutorial">
                <div id="position1Box">
                    <img id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1Tut}%</p>

                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>

                    <div id="playerHpBar"></div>
                </div>
            </div>

            <div id="skillPointBoxTutorial">
                <div id="skillPointBarTutorial">
                    <p id="skillPointText">${skillPoints}</p>
                </div>
            </div>

        </div>
    </div>
    <div id="tutorialTextBox">
        <h1>Use The Ulitmate to finish the Enemy</h1>
        <div onclick="tutorialStep++, navigateToSkillPointsTutorial(2)"  id="confirmButton">I understand</div>
    </div>
    <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
    `
        let playerUltimate = document.getElementById("ultimateSkill")
        playerUltimate.style.border = "5px solid #ffc870"
        playerUltimate.classList.add("tutorialJump")
        let leadingArrow = document.getElementById("leadingArrow")
        playerUltimate.style.opacity = 1
        playerUltimate.classList.add("ulitmateGLow")
        leadingArrow.style.opacity = 1
        leadingArrow.style.top = "38vw"
        leadingArrow.style.left = "25vw"
    }
    if(attackNumber == 2){
                enemys[0].hp -= characters[0].attack3

                overlay.innerHTML = `
    <div id="tutorialContent">  
        <div id="turnBoxTutorial">

            <div id="playerTurn">
                <img src="./img/Aemeath_Icon.png">
                <p id="playerTurnText">Turn</p>
            </div>

            <div id="enemyTurn">
                <img src="./img/Enemy_Stormbringer_Icon.png">
                <p id="enemyTurnText">Next</p>
            </div>  

            <div id="attacksBoxTutorial">
                <h1>Attacks</h1>
                <div id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div onclick="navigateToDamage(1)" id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>

            <div id="characterSpritesTutorial">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>

            <div id="characterBattleInfoTutorial">
                <div id="position1Box">
                    <img   id="playerIcon" src="./img/Aemeath_Icon.png">
                    <p id="ultcharge">${ultchargeC1Tut}%</p>

                    <div id="playerUltimate">  
                        <img id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    </div>

                    <div id="playerHpBar"></div>
                </div>
            </div>

            <div id="skillPointBoxTutorial">
                <div id="skillPointBarTutorial">
                    <p id="skillPointText">${skillPoints}</p>
                </div>
            </div>

        </div>
    </div>
    <div id="tutorialTextBox">
        <h1>Use The Ulitmate to finish the Enemy</h1>
        <div onclick="tutorialStep++, navigateToSkillPointsTutorial(2)"  id="confirmButton">I understand</div>
    </div>
    <div id="leadingArrow"><img src="./img/nav-arrow-left.png"></div>
    `    
    document.getElementById("tutorialContent").style.filter = "brightness(100%)"
    let tutorialTextBox = document.getElementById("tutorialTextBox")
    tutorialTextBox.style.display = "none"
    }

    characters[0].hp -= (dotDamage+ enemys[0].attack);
   

    for(let i = 0; i < 5;i++){
        let skillPointBar = document.getElementById("skillPointBarTutorial");
        skillPointBar.innerHTML += `<div class="skillPoint"><img src="./img/SkillPoint_uncharged.png"></div>`
      

    }  
    for(let i = 0; i < skillPoints;i++){
            let skillPointsCharged = document.getElementsByClassName("skillPoint")
            skillPointsCharged[i].innerHTML = `<img src="./img/SkillPoint_charged.png">`
            skillPointsCharged[i].style.filter = "grayscale(0%)" 
    }
    for(let i = 0; i < enemys[0].hp;i++){
        let enemyHpBar = document.getElementById("enemyHpBar");
        enemyHpBar.innerHTML += `<div class="hpPointEnemy"><img src="./img/Icon_Hp.png"></div>`
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

function navigateToEndScreen(){
    overlay.innerHTML = `
    <div id="endScreen">
        <h1>Tutorial Complete!</h1>
        <div id="backToLobbyButtonTutorial" onclick="location.reload()">Back To Lobby</div>
    </div>
    `
}

function navigateToPracticeRange() {
    overlay.innerHTML = `
    <div id="practiceRangeContent">
        <div id="currencieBox">
             <div id="tokenCurrency"><p>${quickFarm}</p><img src="./img/Item_Token_For_Practice Range.png"></div>
        </div>
        <div id="textBox">
         <h1><img src="./img/Icon_Practice_Range.png">Practice <br> Range</h1>
        </div>
        <div id="tokenBox">
            <h1>Level Up</h1>
            <div id="line"></div>
            <div id="practiceText">
                <p>-Current Team Level: ${TeamLevelNumber}</p>
                <p>-Team Level ${TeamLevelNumber} => ${TeamLevelNumber+1}</p>
                <div onclick="consumeCurrency()" id="currencyTaken"><p>Consume <img src="./img/Item_Token_For_Practice Range.png"></p>  
            </div>
        </div>
        </div>
        <div id="backToLobbyButton" onclick="navigateToLobby()">Back To Lobby</div>
    </div>
    `




}

function consumeCurrency(){
    if(quickFarm >= 1){
        quickFarm--
        TeamLevelNumber++
        localStorage.setItem("quickFarm", quickFarm);
        localStorage.setItem("teamLevel", TeamLevelNumber);
        navigateToPracticeRange()
    }


}

function getCharacterBox() {
    return `
    <div id="characterBattleInfo">
        <div id="position1Box">
            <div style="display:flex; flex-direction:row; gap:4px; align-items:center;">
                <img id="playerIcon" src="./img/Aemeath_Icon.png">
                <div id="playerUltimate" style="position:relative;">
                    <img onclick="fightVisual(3)" id="ultimateSkill" src="./img/Ultimate_Aemeath.png">
                    <p id="ultcharge">${ultchargeC1}%</p>
                </div>
            </div>
            <div id="playerHpBar" style="width:100%;"></div>
        </div>
        <div id="position2Box">
            <div style="display:flex; flex-direction:row; gap:4px; align-items:center;">
                <img id="nextCharIcon" src="./img/Castorice_Icon.png">
                <div id="nextUltimate" style="position:relative;">
                    <img id="nextUltimateSkill" src="./img/Ultimate_Castorice.png">
                    <p id="nextUltcharge">${ultchargeC2}%</p>
                </div>
            </div>
            <div id="char2HpBar" style="width:100%;"></div>
        </div>
    </div>
    `
}

function fillEnemyHpBar(){
    for(let i = 0; i < enemys[0].hp; i++){
        let enemyHpBar = document.getElementById("enemyHpBar");
        enemyHpBar.innerHTML += `<div class="hpPointEnemy"><img src="./img/Icon_Hp.png"></div>`
    }
}

let pos1Sprite = characters[0].posSprite
let pos2Sprite = characters[1].posSprite


let skillChar1 = characters[0].skillSprite
let skillChar2 = characters[1].skillSprite
let skillAttackChar1 = characters[0].skillAttack
let skillAttackChar2 = characters[1].skillAttack
let BasicAttackChar1 = characters[0].basicAttack
let BasicAttackChar2 = characters[1].basicAttack

let turn= characters[0].turnIcon
let nextTurnCharacter = characters[1].turnIcon


function characterSprite(switchNumber){
    let temp = ""
    let temp2 = ""
    if(switchNumber == 1){
       temp = pos1Sprite
       pos1Sprite = pos2Sprite
       pos2Sprite = temp
    }
    
    return `
                    <img id="playerSprite" src="${pos1Sprite}">
        
            `

      
}
function attackBoxBasic(switchNumber) {
    let temp = ""
    if(switchNumber == 1){
        temp = BasicAttackChar1
        BasicAttackChar1 = BasicAttackChar2
        BasicAttackChar2 = temp
    }
    
    return `
       <img src="${BasicAttackChar1}">      
    `
        

}

function attackBoxSkill(switchNumber) {
    let temp = ""
    if(switchNumber == 1){
       temp = skillAttackChar1
       skillAttackChar1 = skillAttackChar2
       skillAttackChar2 = temp
    }
    
    return `
       ${skillAttackChar1}      
    `
    
    
}

function attackSkill(switchNumber){
    let temp = ""
    if(switchNumber == 1){
       temp = skillChar1
       skillChar1 = skillChar2
       skillChar2 = temp
    }
    return `
            <img id="attackEffectSprite" src="${skillChar2}">
        
    `      
}

function fightVisual(attackNumber){
    if(attackNumber == -1){
        overlay.innerHTML = `
        <div id="gameScreen">  
            <div id="turnBox">
                  ${nextTurnChar(0)}
                <div id="attacksBox">
                    <h1>Attacks</h1>
                    <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(0)}</div>
                    <div id="attack2" onclick="fightVisual(2)"><img src="${attackBoxSkill(0)}"></div>
                </div>
                <div id="characterSprites">
                   ${characterSprite(0)}
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                </div>
                <div id="skillPointBox">
                    <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                </div>
            </div>
            ${getCharacterBox()}
        </div>`
        if(ultchargeC1 >= 100){
            let ultimateSkill = document.getElementById("ultimateSkill")
            ultimateSkill.style.opacity = 1
            ultimateSkill.classList.add("ulitmateGLow")
        }
    }

    if(attackNumber == 1){
        overlay.innerHTML = `
        <div id="gameScreen">  
            <div id="turnBox">
                  ${nextTurnChar(0)}
                <div id="attacksBox">
                    <h1>Attacks</h1>
                    <div id="attack1" onclick="damageCalculation(1)">${attackBoxBasic(0)}</div>
                    <div id="attack2" onclick="fightVisual(2)"><img src="${attackBoxSkill(0)}"></div>
                </div>
                <div id="characterSprites">
                    ${characterSprite(0)}
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                </div>
                <div id="skillPointBox">
                    <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                </div>
            </div>
            ${getCharacterBox()}
        </div>`
        if(ultchargeC1 >= 100){
            let ultimateSkill = document.getElementById("ultimateSkill")
            ultimateSkill.style.opacity = 1
            ultimateSkill.classList.add("ulitmateGLow")
        }
    } else if(attackNumber == 2){
        if(skillPoints > 0){
            overlay.innerHTML = `
            <div id="gameScreen">  
                <div id="turnBox">
                       ${nextTurnChar(0)}
                    <div id="attacksBox">
                        <h1>Attacks</h1>
                        <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(0)}</div>
                        <div id="attack2" onclick="damageCalculation(2)"><img src="${attackBoxSkill(0)}"></div>
                    </div>
                    <div id="characterSprites">
                       ${characterSprite(0)}
                        <div id="enemyHpBar"></div>
                        <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                    </div>
                    <div id="skillPointBox">
                        <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                    </div>
                </div>
                ${getCharacterBox()}
            </div>`
            if(ultchargeC1 >= 100){
                let ultimateSkill = document.getElementById("ultimateSkill")
                ultimateSkill.style.opacity = 1
                ultimateSkill.classList.add("ulitmateGLow")
            }
        }else{
            overlay.innerHTML = `
            <div id="gameScreen">  
                <div id="turnBox">
                       ${nextTurnChar(0)}
                    <div id="attacksBox">
                        <h1>Attacks</h1>
                        <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(0)}</div>
                        <div id="attack2"><img style="cursor: not-allowed opacity: 0.5;" src="${attackBoxSkill(0)}"></div>
                    </div>
                    <div id="characterSprites">
                      ${characterSprite(0)}
                        <div id="enemyHpBar"></div>
                        <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                    </div>
                    <div id="skillPointBox">
                        <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                    </div>
                </div>
                ${getCharacterBox()}
            </div>`
            if(ultchargeC1 >= 100){
                let ultimateSkill = document.getElementById("ultimateSkill")
                ultimateSkill.style.opacity = 1
                ultimateSkill.classList.add("ulitmateGLow")
            }
        }
    }else if(attackNumber == 3){
        overlay.innerHTML = `
        <div id="gameScreen">  
            <div id="turnBox">
                ${nextTurnChar(0)}
                <div id="attacksBox">
                    <h1>Attacks</h1>
                    <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(0)}</div>
                    <div id="attack2" onclick="damageCalculation(2)"><img src="${attackBoxSkill(0)}"></div>
                </div>
                <div id="characterSprites">
                     ${characterSprite(0)}
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                </div>
                <div id="skillPointBox">
                    <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                </div>
            </div>
            ${getCharacterBox()}
        </div>`
    }

    for(let i = 0; i < 5; i++){
        let skillPointBar = document.getElementById("skillPointBar");
        skillPointBar.innerHTML += `<div class="skillPoint"><img src="./img/SkillPoint_uncharged.png"></div>`
    }
    for(let i = 0; i < skillPoints; i++){
        let skillPointsCharged = document.getElementsByClassName("skillPoint")
        skillPointsCharged[i].innerHTML = `<img src="./img/SkillPoint_charged.png">`
        skillPointsCharged[i].style.filter = "grayscale(0%)"
    }

    let skillPointsCharged = document.getElementsByClassName("skillPoint")
    if(attackNumber == 2){
        if(skillPoints > 0){
            skillPointsCharged[skillPoints-1].innerHTML = `<img id="skillPointUncharged" src="./img/SkillPoint_charged.png">`
            document.getElementById("skillPointUncharged").classList.add("gettingUncharged")
            if(skillPoints < 5){
                skillPointsCharged[skillPoints].style.filter = "grayscale(0%)"
            }
        }
    }else if(attackNumber == 1){
        if(skillPoints < 5){
            skillPointsCharged[skillPoints].innerHTML = `<img id="skillPointCharged" src="./img/SkillPoint_charged.png">`
            document.getElementById("skillPointCharged").classList.add("gettingCharged")
            skillPointsCharged[skillPoints].style.filter = "grayscale(0%)"
        }
    }

    for(let i = 0; i < enemys[0].hp; i++){
        let enemyHpBar = document.getElementById("enemyHpBar");
        enemyHpBar.innerHTML += `<div class="hpPointEnemy"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[0].hp; i++){
        let playerHpBar = document.getElementById("playerHpBar");
        playerHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[1].hp; i++){
        let char2HpBar = document.getElementById("char2HpBar");
        char2HpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }

    let enemyHpBar = document.getElementsByClassName("hpPointEnemy");
    if(attackNumber == 2){
        for (let i = 0; i < characters[0].attack2; i++) {
            let index = enemyHpBar.length - 1 - i;
            if (enemyHpBar[index]) {
                enemyHpBar[index].innerHTML = `<img id="losingHp" src="./img/Icon_Hp_losing.png">`;
                document.getElementById("losingHp").classList.add("losingHp")
            }
        }
        document.getElementById("attack2").style.transform = "scale(1.3)"
    }else if(attackNumber == 1){
        for (let i = 0; i < characters[0].attack1; i++) {
            let index = enemyHpBar.length - 1 - i;
            if (enemyHpBar[index]) {
                enemyHpBar[index].innerHTML = `<img id="losingHp" src="./img/Icon_Hp_losing.png">`;
                document.getElementById("losingHp").classList.add("losingHp")
            }
        }
        document.getElementById("attack1").style.transform = "scale(1.3)"
    }else if(attackNumber == 3){
        for (let i = 0; i < characters[0].attack3; i++) {
            let index = enemyHpBar.length - 1 - i;
            if (enemyHpBar[index]) {
                enemyHpBar[index].innerHTML = `<img id="losingHp" src="./img/Icon_Hp_losing.png">`;
                document.getElementById("losingHp").classList.add("losingHp")
            }
        }
        let ultimateSkill = document.getElementById("ultimateSkill")
        ultimateSkill.style.opacity = 1
        ultimateSkill.classList.add("ulitmateGLow")
        ultimateSkill.style.transform = "scale(1.3)"
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





function damageCalculation(attackNumber){
let enemyAttack = Math.floor(Math.random()*3)
if (enemyAttack == 0){ enemyAttack = 1 }
let enemyHpGain = Math.floor(Math.random()*3)
let chanceToHeal = Math.random()

let chooseWhoToAttack = Math.floor(Math.random() * 2)+1
console.log(chooseWhoToAttack)
    if(attackNumber == 1){
        if(ultchargeC1 < 100){ ultchargeC1 += 15 }else{ ultchargeC1 = 100 }
        enemys[0].hp -= characters[0].attack1
        if(skillPoints < 5){ skillPoints++ }
        overlay.innerHTML = `
        <div id="gameScreen">  
            <div id="turnBox">
                   ${nextTurnChar(1)}
                <div id="attacksBox">
                    <h1>Attacks</h1>
                    <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(1)}</div>
                    <div id="attack2" onclick="fightVisual(2)"> <img src="${attackBoxSkill(1)}"> </div>
                </div>
                <div id="characterSprites">
                    ${characterSprite(0)}
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png"></img>
                </div>
                <div id="skillPointBox">
                    <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                </div>
            </div>
            ${getCharacterBox()}
        </div>`
        if(ultchargeC1 >= 100){
            let ultimateSkill = document.getElementById("ultimateSkill")
            ultimateSkill.style.opacity = 1
            ultimateSkill.classList.add("ulitmateGLow")
        }
        setTimeout(() => {
            if(chooseWhoToAttack == 1){
                characters[0].hp -= enemyAttack
                document.getElementById("playerIcon").classList.add("takingHp")
            }else{
                characters[1].hp -= enemyAttack
                document.getElementById("nextCharIcon").classList.add("takingHp")
            }
            document.getElementById("enemySprite").classList.add("attackEnemy")

        }, 2500);
        fillEnemyHpBar()
        document.getElementById("playerSprite").classList.add("attack")

        setTimeout(() => {
            document.getElementById("characterSprites").innerHTML =`          
                ${characterSprite(1)}
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png"></img>
            `
            fillEnemyHpBar()
        }, 2800);

    }else if(attackNumber == 2){
        if(ultchargeC1 < 100){ ultchargeC1 += 35 }else{ ultchargeC1 = 100 }
        enemys[0].hp -= characters[0].attack2
        if(skillPoints > 0){ skillPoints-- }
        overlay.innerHTML = `
        <div id="gameScreen">  
            <div id="turnBox">
                   ${nextTurnChar(1)}
                <div id="attacksBox">
                    <h1>Attacks</h1>
                    <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(1)}</div>
                    <div id="attack2" onclick="fightVisual(2)"> <img src="${attackBoxSkill(1)}"> </div>
                </div>
                <div id="characterSprites">
                      ${characterSprite(0)}
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png"></img>
                </div>
                <div id="skillPointBox">
                    <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                </div>
                <div id="attackEffect"></div>
            </div>
            ${getCharacterBox()}
        </div>`
        if(ultchargeC1 >= 100){
            let ultimateSkill = document.getElementById("ultimateSkill")
            ultimateSkill.style.opacity = 1
            ultimateSkill.classList.add("ulitmateGLow")
        }
        fillEnemyHpBar()
        let attackEffect = document.getElementById("attackEffect")
        attackEffect.innerHTML += `${attackSkill(1)}`
        document.getElementById("attackEffectSprite").classList.add("attackPos1")
        setTimeout(() => {
            if(chooseWhoToAttack == 0){
                characters[0].hp -= enemyAttack
                document.getElementById("playerIcon").classList.add("takingHp")
            }else{
                characters[1].hp -= enemyAttack
                document.getElementById("nextCharIcon").classList.add("takingHp")
            }
            document.getElementById("enemySprite").classList.add("attackEnemy")

        }, 2500);

        
        setTimeout(() => {
            document.getElementById("characterSprites").innerHTML =`          
                ${characterSprite(1)}
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png"></img>
            `
            fillEnemyHpBar()
        }, 2800);

    }else if(attackNumber == 3){
        enemys[0].hp -= characters[0].attack3
        ultchargeC1 = 0
        let ultInterval = setInterval(() => { checkIfUlt() }, 1000);
        overlay.innerHTML = `
        <div id="gameScreen">  
            <div id="turnBox">
                  ${nextTurnChar(1)}
                <div id="attacksBox">
                    <h1>Attacks</h1>
                    <div id="attack1" onclick="fightVisual(1)">${attackBoxBasic(1)}</div>
                    <div id="attack2" onclick="fightVisual(2)"> <img src="${attackBoxSkill(1)}"> </div>
                </div>
                <div id="characterSprites">
                        ${characterSprite(1)}
                    <div id="enemyHpBar"></div>
                    <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
                </div>
                <div id="skillPointBox">
                    <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
                </div>
                <div id="attackEffect"></div>
            </div>
            ${getCharacterBox()}
        </div>`
        let attackEffect = document.getElementById("attackEffect")
        attackEffect.innerHTML += `<img id="attackEffectSprite" src="${characters[0].ultimateSkill}.png">`
        document.getElementById("attackEffectSprite").classList.add("ultimateAttack")
        setTimeout(() => {
            if(chooseWhoToAttack == 0){
                characters[0].hp -= enemyAttack
                document.getElementById("playerIcon").classList.add("takingHp")
            }else{
                characters[1].hp -= enemyAttack
                document.getElementById("nextCharIcon").classList.add("takingHp")
            }
            document.getElementById("enemySprite").classList.add("attackEnemy")

        }, 2500);
        fillEnemyHpBar()

        setTimeout(() => {
            document.getElementById("characterSprites").innerHTML =`          
                ${characterSprite(1)}
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png"></img>
            `
            fillEnemyHpBar()
        }, 2800);

    }

    for(let i = 0; i < 5; i++){
        let skillPointBar = document.getElementById("skillPointBar");
        skillPointBar.innerHTML += `<div class="skillPoint"><img src="./img/SkillPoint_uncharged.png"></div>`
    }
    for(let i = 0; i < skillPoints; i++){
        let skillPointsCharged = document.getElementsByClassName("skillPoint")
        skillPointsCharged[i].innerHTML = `<img src="./img/SkillPoint_charged.png">`
        skillPointsCharged[i].style.filter = "grayscale(0%)"
    }
    for(let i = 0; i < characters[0].hp; i++){
        let playerHpBar = document.getElementById("playerHpBar");
        playerHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[1].hp; i++){
        let char2HpBar = document.getElementById("char2HpBar");
        char2HpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }

    if(chanceToHeal < 0.3){
        if(enemys[0].hp < 6){ enemys[0].hp += enemyHpGain }
    }

         enemyTurn.classList.add("nextTurn");
        playerTurn.classList.remove("nextTurn")
}

function navigateToBattle() {
    overlay.innerHTML = `
    <div id="gameScreen">  
        <div id="turnBox">
            ${nextTurnChar(0)}
            <div id="attacksBox">
                <h1>Attacks</h1>
                <div onclick="fightVisual(1)" id="attack1"><img src="./img/Basic_Aemeath.png"></div>
                <div onclick="fightVisual(2)" id="attack2"><img src="./img/Skill_Aemeath.png"></div>
            </div>
            <div id="characterSprites">
                <img id="playerSprite" src="./img/Aemeath_Sprite.png">
                <div id="enemyHpBar"></div>
                <img id="enemySprite" src="./img/Enemy_Stormbringer.png">
            </div>
            <div id="skillPointBox">
                <div id="skillPointBar"><p id="skillPointText">${skillPoints}</p></div>
            </div>
        </div>
        ${getCharacterBox()}
    </div>
    `
    for(let i = 0; i < 5; i++){
        let skillPointBar = document.getElementById("skillPointBar");
        skillPointBar.innerHTML += `<div class="skillPoint"><img src="./img/SkillPoint_uncharged.png"></div>`
    }
    for(let i = 0; i < skillPoints; i++){
        let skillPointsCharged = document.getElementsByClassName("skillPoint")
        skillPointsCharged[i].innerHTML = `<img src="./img/SkillPoint_charged.png">`
        skillPointsCharged[i].style.filter = "grayscale(0%)"
    }
    for(let i = 0; i < enemys[0].hp; i++){
        let enemyHpBar = document.getElementById("enemyHpBar");
        enemyHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[0].hp; i++){
        let playerHpBar = document.getElementById("playerHpBar");
        playerHpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
    }
    for(let i = 0; i < characters[1].hp; i++){
        let char2HpBar = document.getElementById("char2HpBar");
        char2HpBar.innerHTML += `<div class="hpPoint"><img src="./img/Icon_Hp.png"></div>`
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





function nextTurnChar(switchNumber) {
    let temp = ""
    if(switchNumber == 1){
        temp = turn
        turn = nextTurnCharacter
        nextTurnCharacter = temp

    }

    return `
     <div id="playerTurn"><img src="${turn}"><p id="playerTurnText">Turn</p></div>
    <div id="enemyTurn"><img src="${nextTurnCharacter}"><p id="enemyTurnText">Next</p></div>       
                
                
    `  




}

let interval = 100
// let ultInterval =
// setInterval(() => {
//     checkIfUlt()
// }, 1000);

setInterval(() => {
    checkIfDefeatedOrWin()
}, interval);



// function checkIfUlt(){
//     if(ultchargeC1 >= 100){
//         ultchargeC1= 100
//         fightVisual(-1)
//         clearInterval(ultInterval)
//     }
// }

function checkIfDefeatedOrWin(){
    if(characters[0].hp <= 0 && characters[1].hp <= 0){
        navigateResult(1);
        clearInterval(ultInterval)
    }
    if(enemys[0].hp <= 0){
        navigateResult(2);
        clearInterval(ultInterval)
    }
}

function navigateResult(number){
    clearInterval(interval)
    characters[0].hp  = 5
    characters[1].hp  = 4
    enemys[0].hp = 6
    if(number == 1){
    overlay.innerHTML = `
        <div id="resultScreenLose">  
            <div id="defeatTitle">
                <h1>Defeat</h1>
            </div>
            <div id="quickLevelBox" onclick="navigateToPracticeRange()">
                <p>Go to Practice Range</p>
                <img id="navArrowToPractice" src="./img/nav-arrow.png">
            </div>
            <div id="resartOrNotBox"> 
                <div id="backToLobbyButtonResult" onclick="navigateToLobby()">
                        <p>Back to Lobby</p>
                </div>
                <div id="restartBox" onclick="resetGame(2); navigateToBattle();">
                    <p>Restart Challenge</p>
                </div> 
               
            </div>
        </div>
    `
    }
    else if(number == 2){
        wishes = wishes + 30;
        quickFarm = quickFarm + 3;
        TeamLevelNumber = TeamLevelNumber + 1;

        localStorage.setItem("wishes", wishes);
        localStorage.setItem("quickFarm", quickFarm);
        localStorage.setItem("teamLevel", TeamLevelNumber);
        overlay.innerHTML = `
        <div id="resultScreenWin">  
            <div id="winTitle">
                <h1>Stage Completed</h1>
            </div>
            <div id="rewardBox">
                <h1>Rewards</h1>
                <div id="rewards"><p class="rewardAmount">30x</p><img id="reward1" src="./img/Item_Wishing_Style_1.png"><p class="rewardAmount">3x</p><img id="reward2" src="./img/Item_Token_For_Practice Range.png"><p class="rewardAmount">+1</p> <img id="reward3" src="./img/Item_EXP.png"></div>
                  
            </div> 
                <div id="backToLobbyButtonResultWin" onclick="navigateToLobby(); resetGame(2)">
                        <p>Back to Lobby</p>
                </div>   
            </div>
        </div>
     `
    }

}
function resetGame(option){
    if(option == 2){
        skillPoints = 3
        ultchargeC1 = 15

    }
}