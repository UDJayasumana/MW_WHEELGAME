let mainContainer = document.querySelector(".container");



mainContainer.addEventListener('SetContainerDisplay', function(e){

    mainContainer.style.display = e.detail.status;

});


function SetGameLevelDisplayState(s){
    const event = new CustomEvent('SetContainerDisplay', {

        detail:{
            status: s
        }

    });

    mainContainer.dispatchEvent(event);
}