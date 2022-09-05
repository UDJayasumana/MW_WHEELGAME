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
    const body = document.body;
    const wheelDiv = document.createElement("div");
    wheelDiv.className = "wheel";
    body.append(wheelDiv);

    //Create 'innerWheelDiv' div for the inner rotatable wheel
    //And add into the 'wheelDiv'
    const innerWheelDiv = document.createElement("div");
    innerWheelDiv.className = "innerWheel";
    wheelDiv.appendChild(innerWheelDiv);

    //Create 'arrow' div for the arrow element
    //And add into the body
    const arrowDiv = document.createElement("div");
    arrowDiv.className = "arrow";
    body.appendChild(arrowDiv);

    //Create 'spinButton' button for the spinButton element
    //And add into the body
    const spinBtn = document.createElement("button");
    spinBtn.id = "spinButton";
    body.append(spinBtn);
    
}


createLevelStyle();
createGameLevel();

