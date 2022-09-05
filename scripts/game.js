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

    isSpin = true;
    SpinWheel();
    setTimeout(resetGame, 5000);

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
    gsap.fromTo('.innerWheel',{rotation: 0, ease: 'power4.in'},
                {duration: 4, rotation: getRandomInt(1800, 2800), ease: 'power4.out'});
}

//Define for Get the random integer value between two integer values
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

;

