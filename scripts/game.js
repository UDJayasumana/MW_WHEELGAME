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

    GetPredefineSlot();

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


    const DB_VALUE = "TRY_AGAIN";

    let resultRotation = 0; 

    switch(DB_VALUE)
    {
        case "TRY_AGAIN":
            resultRotation = GetRandom_TryAgain_Rotations();
            break;

        case "100MB":
            resultRotation = GetRandom_100MB_Rotations();
            break;

        case "50MB":
            resultRotation = GetRandom_50MB_Rotations();
            break;
    }


    gsap.fromTo('.innerWheel',{rotation: 0, ease: 'power4.in'},
                 {duration: 4, rotation: resultRotation, ease: 'power4.out'});

    setTimeout(ShowResult, 4500, DB_VALUE);

}

function ShowResult(result)
{
    if(result == "TRY_AGAIN")
    {
        alert("Please Try-Again you didn't win any data package");
    }
    else
    {
        alert(`Congratulations you won ${result} data bundle`);
    }
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

function GetRandom_100MB_Rotations()
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


function GetPredefineSlot()
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


