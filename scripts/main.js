// Load GSAP Library
// Get Animation Interpolation features for the Wheel Game
let gsapLib = document.createElement('script');
gsapLib.type = 'text/javascript';
gsapLib.src = './scripts/gsap.min.js';
document.getElementsByTagName('head')[0].appendChild(gsapLib);

// Load Game JS which contains all the game logics
let game = document.createElement('script');
game.type = 'text/javascript';
game.src = './scripts/game.js';
document.getElementsByTagName('head')[0].appendChild(game);

//Generate Style Sheet for the Game Level
function createLevelStyle()
{
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));

    var cssRules = `.wheel{
                            margin: auto;
                            width: 506px;
                            height: 506px;
                            display:flex;
                            align-content: center;
                            background-image: url('./ui/OuterWheel.png');}`;

        cssRules += `.wheel .innerWheel{
                                        margin: auto;
                                        width: 430px;
                                        height: 430px;
                                        align-content: center;
                                        background-image: url('./ui/InnerWheel_WithTextsT.png');
                                        transform:rotate(0deg);}`;

        cssRules += `.arrow{
                            position: relative;
                            display: block;
                            margin: auto;
                            width: 172px;
                            height: 200px;
                            align-content: center;
                            background-image: url('./ui/Arrow.png');
                            margin-top: -560px;}`;

        cssRules += `#spinButton{
                                margin: auto;
                                width: 238px;
                                height: 80px;
                                display: flex;
                                align-content: center;
                                margin-top: 30em;
                                border: none;
                                background-color: rgba(0, 0, 0, 0);
                                background-image: url('./ui/SpinButton.png');
                                cursor: pointer;}`;
    
     style.appendChild(document.createTextNode(cssRules));   
     document.head.appendChild(style);
}

//Generate Level for the Wheel Game
function createGameLevel()
{

    //Create 'wheelDiv' div to hold all contents of the wheel
    const BODY = document.body;
    const WHEEL_DIV = document.createElement("div");
    WHEEL_DIV.className = "wheel";
    BODY.append(WHEEL_DIV);

    //Create 'innerWheelDiv' div for the inner rotatable wheel
    //And add into the 'wheelDiv'
    const INNER_WHEEL_DIV = document.createElement("div");
    INNER_WHEEL_DIV.className = "innerWheel";
    WHEEL_DIV.appendChild(INNER_WHEEL_DIV);

    //Create 'arrow' div for the arrow element
    //And add into the 'wheelDiv'
    const ARROW_DIV = document.createElement("div");
    ARROW_DIV.className = "arrow";
    WHEEL_DIV.appendChild(ARROW_DIV);

    //Create 'spinButton' button for the spinButton element
    //And add into the 'wheelDiv'
    const SPIN_BUTTON = document.createElement("button");
    SPIN_BUTTON.className = "spinButton";
    SPIN_BUTTON.innerHTML = "Spin";
    WHEEL_DIV.append(SPIN_BUTTON);

    //Create 'gameTitle' text for the game title element
    //And add into the 'wheelDiv'
    const GAME_TITLE = document.createElement("text");
    GAME_TITLE.className = "gameTitle";
    GAME_TITLE.innerHTML = "Spin & Win";
    WHEEL_DIV.append(GAME_TITLE);

    //Create 'tryAgainMsg' text for the Try Again Message
    //And add into the 'wheelDiv'
    const TRY_AGAIN_MSG = document.createElement("text");
    TRY_AGAIN_MSG.className = "tryAgainMsg";
    TRY_AGAIN_MSG.innerHTML = "Don't worry!<br>You may win on next spin.";
    WHEEL_DIV.append(TRY_AGAIN_MSG);
  
    
}


// createLevelStyle();
createGameLevel();

