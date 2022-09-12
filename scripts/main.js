// Load GSAP Library
// Get Animation Interpolation features for the Wheel Game
let gsapLib = document.createElement('script');
gsapLib.type = 'text/javascript';
gsapLib.src = './scripts/gsap.min.js';
document.getElementsByTagName('head')[0].appendChild(gsapLib);

// Add Events
let events = document.createElement('script');
events.type = 'text/javascript';
events.src = './scripts/event.js';
document.getElementsByTagName('head')[0].appendChild(events);

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

    var cssRules = `.container{
                                position: relative;
                                width: 100vw;
                                height: 100vh;
                                margin-top: 0%;
                                margin-left: -50%;
                                }`;

        cssRules += `.wheel{
                            margin: auto;
                            position: absolute;
                            top: 50%;
                            left: 50%; 
                            transform: translate(0%, -50%);
                            width: 506px;
                            height: 506px;
                            background-image: url('./ui/OuterWheel.png');
                            margin-top: -10vh;
                            }`;

        cssRules += `.wheel .innerWheel{
                                        position: absolute; 
                                        top: 50%;
                                        left: 50%; 
                                        transform: translate(-50%, -50%);
                                        width: 430px;
                                        height: 430px;
                                        background-image: url('./ui/InnerWheel_WithTextsV2.png');   
                                        }`;

        cssRules += `.wheel .arrow{
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    width: 172px;
                                    height: 200px;
                                    background-image: url('./ui/Arrow.png');
                                    margin-top: -42%;
                                    }`;

        cssRules += `.wheel .spinButton{
                                        position: absolute;
                                        display: block;
                                        width: 238px;
                                        height: 80px;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
        
                                        background: #EF005A;
                                        border-radius: 40px;
                                        margin-top: 70%;
                                        cursor: pointer;
        
                                        font-family:sans-serif; 
                                        font-style: normal;
                                        font-weight: 700;
                                        font-size: 36px;
                                        line-height: 16px;
        
                                        text-align: center;
                                        letter-spacing: 2px;
                                        text-transform: uppercase;
        
                                        color: #FFFF;
        
                                        }`;

        cssRules += `.wheel .tryAgainMsg{
                                         display: none;
                                         position: absolute;
                                         width: 300px;
                                         height: 50px;
                                         top: 50%;
                                         left: 50%;
                                         transform: translate(-50%, -50%);
                                         margin-top: 60%;
        
                                         font-family:sans-serif; 
                                         font-style: normal;
                                         font-weight: 400;
                                         font-size: 14px;
                                         line-height: 20px;
        
                                         text-align: center;
                                         letter-spacing: 2px;
                                         text-transform: uppercase;
        
                                        }`;

     
    
     style.appendChild(document.createTextNode(cssRules));   
     document.head.appendChild(style);
}

//Generate Level for the Wheel Game
function createGameLevel()
{

    //Create 'wheelDiv' div to hold all contents of the wheel
    const BODY = document.body;

    const PARENT_DIV = document.createElement("div");
    PARENT_DIV.className = "container";
    PARENT_DIV.id = "mainContainer";
    BODY.append(PARENT_DIV);


    const WHEEL_DIV = document.createElement("div");
    WHEEL_DIV.className = "wheel";
    WHEEL_DIV.id = "mainWheel"
    PARENT_DIV.append(WHEEL_DIV);

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

    const SPIN_BUTTON_TXT = document.createElement("p");
    SPIN_BUTTON_TXT.className = "spintText";
    SPIN_BUTTON_TXT.innerText = "Spin";
    
    
    SPIN_BUTTON.appendChild(SPIN_BUTTON_TXT);

    //SPIN_BUTTON.innerHTML = "Spin";
    WHEEL_DIV.append(SPIN_BUTTON);

  

    //Create 'tryAgainMsg' text for the Try Again Message
    //And add into the 'wheelDiv'
    const TRY_AGAIN_MSG = document.createElement("text");
    TRY_AGAIN_MSG.className = "tryAgainMsg";
    TRY_AGAIN_MSG.innerHTML = "Don't worry!<br>You may win on next spin.";
    WHEEL_DIV.append(TRY_AGAIN_MSG);
  
    
}


createLevelStyle();
createGameLevel();

