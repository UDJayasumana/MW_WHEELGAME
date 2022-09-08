let container = document.getElementById("mainContainer");
//Get actual rotatable wheel element from the document
let innerWheel = document.querySelector(".wheel .innerWheel");
//Get Spin Button element from the document
let spinBtn = document.querySelector(".wheel .spinButton");

let spinBtnText = document.querySelector(".wheel .spinButton .spintText");

let tryAgainMsg = document.querySelector(".wheel .tryAgainMsg");

//Define for control the Spin
let isSpin = false;

//Define onClick event for the Spin Button
spinBtn.onclick = function(){

    if(isSpin)
       return;

    isSpin = true;
    SpinWheel();
    DisableSpinButton();
    //Comment for testing
    //setTimeout(resetGame, 5000);

}

function DisableSpinButton()
{
    spinBtn.style.background = 'gray';
    spinBtnText.style.color = 'gainsboro';
}

function EnableSpinButton()
{
    spinBtn.style.background = '#EF005A';
    spinBtnText.style.color = '#FFFF';
}

//Define for reset the inner wheel rotation
//Reset Not work without animation
function resetWheel()
{
    innerWheel.style.transform = "rotate(" + 0 + "deg)";
}

//Define for handle the wheel rotation
function SpinWheel()
{

    resetWheel();

    if(spinBtn.innerHTML == "Spin Again")
    {
        spinBtn.style.top = '50%';
        tryAgainMsg.style.display = 'none';
    }

    
    const DB_VALUE = "TRY_AGAIN";

    let resultRotation = 0; 

    switch(DB_VALUE)
    {
        case "TRY_AGAIN":
            resultRotation = GetRandom_TryAgain_Rotations();
            break;

        case "1GB":
            resultRotation = GetRandom_1GB_Rotations();
            break;

        case "50MB":
            resultRotation = GetRandom_50MB_Rotations();
            break;
    }


    gsap.fromTo('.innerWheel',{rotation: 0, translate: '-50% -50%', ease: 'power4.in'},
                 {duration: 4, rotation: resultRotation, translate: '-50% -50%', ease: 'power4.out'});

    setTimeout(ShowResult, 4500, DB_VALUE);

}

function ShowResult(result)
{
    if(result == "TRY_AGAIN")
    {
        SwitchSpinButton();
        EnableSpinButton();
    }
    else
    {
        SendWinnerInfo();
    }
}

function SwitchSpinButton()
{
    spinBtn.innerHTML = "Spin Again";
    spinBtn.style.width = '330px';
    spinBtn.style.top = '58%';
    tryAgainMsg.style.display = 'block';

    isSpin = false
}


function GetRandom_TryAgain_Rotations()
{

    const TRYAGAIN_1 = new randomRot(2814, 2856);
    const TRYAGAIN_2 = new randomRot(2904, 2946);
    const TRYAGAIN_3 = new randomRot(2994, 3036);
    const TRYAGAIN_4 = new randomRot(3084, 3126);

    let slots = new Array(TRYAGAIN_1, TRYAGAIN_2, TRYAGAIN_3, TRYAGAIN_4);
    let randomSlot = getRandomInt(0, slots.length);

    return slots[randomSlot].GetRandomRotation();

}

function GetRandom_1GB_Rotations()
{

    const D100MB_1 = new randomRot(2769, 2811);
    const D100MB_2 = new randomRot(2949, 2991);

    let slots = new Array(D100MB_1, D100MB_2);
    let randomSlot = getRandomInt(0, slots.length);

    return slots[randomSlot].GetRandomRotation();

}

function GetRandom_50MB_Rotations()
{

    const D50MB_1 = new randomRot(2679, 2721);
    const D50MB_2 = new randomRot(2859, 2901);

    let slots = new Array(D50MB_1, D50MB_2);
    let randomSlot = getRandomInt(0, slots.length);

    return slots[randomSlot].GetRandomRotation();

}

//Define for Get the random integer value between two integer values
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class randomRot{
    constructor(minRot, maxRot)
    {
        this.minRot = minRot;
        this.maxRot = maxRot;
    }

    GetRandomRotation()
    {
        return getRandomInt(this.minRot, this.maxRot);
    }
}

//Do a Test API call
function SendWinnerInfo()
{
    let request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/");
    request.send();

    request.onload = () => {
        if(request.status === 200)
        {
            console.log(JSON.parse(request.response));

            const res = JSON.parse(request.response);

            console.log(res.results[0].name.first);
            
        }
        else
        {
            console.log(`error Status : ${request.status} /n ${request.statusText}`);
        }
    }
}

//Handle window Resize
function onWindowResize()
{
    var percentageOn2 = window.outerHeight / 960;
    scaleToHeight = clamp(percentageOn2, 0, 1);
    container.style.scale = scaleToHeight;
}

window.onresize = onWindowResize;

 


