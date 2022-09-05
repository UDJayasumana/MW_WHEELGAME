//Get actual rotatable wheel element from the document
let innerWheel = document.querySelector(".wheel .innerWheel");
//Get Spin Button element from the document
let spinBtn = document.getElementById("spinButton");

//Define for control the Spin
let isSpin = false;

//Define onClick event for the Spin Button
spinBtn.onclick = function(){

    if(isSpin)
       return;

    // isSpin = true;
    SpinWheel();
    //Comment for testing
    //setTimeout(resetGame, 5000);

}

//Define for reset the inner wheel rotation
function resetGame()
{
    innerWheel.style.transform = "rotate(" + 0 + "deg)";
    isSpin = false;
}

//Define for handle the wheel rotation
function SpinWheel()
{
    // gsap.fromTo('.innerWheel',{rotation: 0, ease: 'power4.in'},
    //             {duration: 4, rotation: getRandomInt(1800, 2800), ease: 'power4.out'});

    //For Testing
    resetGame();

    gsap.fromTo('.innerWheel',{rotation: 0, ease: 'power4.in'},
                 {duration: 4, rotation: GetRandomTryAgainRotations(), ease: 'power4.out'});


    //Red Try-Again values
    //Min : 2814
    //Max : 2856

    //Yellow Try-Again values
    //Min : 2904
    //Max : 2946

    //Blue Try-Again values
    //Min : 2994
    //Max : 3036

    //Green Try-Again values
    //Min : 3084
    //Max : 3126
}


function GetRandomTryAgainRotations()
{

    const TryAgain_1 = new randomRot(2814, 2856);
    const TryAgain_2 = new randomRot(2904, 2946);
    const TryAgain_3 = new randomRot(2994, 3036);
    const TryAgain_4 = new randomRot(3084, 3126);

    let tryAgainSlots = new Array(TryAgain_1, TryAgain_2, TryAgain_3, TryAgain_4);
    let randomTryAgainSlot = getRandomInt(0, tryAgainSlots.length);

    return tryAgainSlots[randomTryAgainSlot].GetRandomRotation();

}

//Define for Get the random integer value between two integer values
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

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


