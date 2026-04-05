let overlay = document.getElementById("overlay");


function navigateToLobby(){
   
    overlay.innerHTML = `<div id="lobbyScreen">
    <div id="WorldSelecter">
      <div id="PracticeRange"><p>Practice Range</p></div>
        <div id="worldIcon">
            <img src="./img/World_The_Xianzhou_Luofu.png" alt="worldIcon">
        </div>
        <div id="ConfirmButton"><p>Confirm Planet</p></div>
    </div>
    
    
    
    
    </div>`
    overlay.style.backgroundImage = "url('./img/lobbyScreen.png')"




}