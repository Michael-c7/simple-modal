/*important to use lots of helper functions to separate your logic*/


/*open modal close modal like in jabJabJavascript example */


/*
- fade in container, opacity,z-index
- fade in and drop down from top of the screen, z-index as well
*/


let sendMsgBtn = document.querySelector(".send-msg-btn");
let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".modal__close-btn");


function modalFunctionality() {
    // open modal
    function openModal(event) {
        modalContainer.classList.add("modal-container-shown");
        modal.classList.add("modal--shown");
    }

    sendMsgBtn.addEventListener("click", openModal);
    
    // close modal
    function closeModal(event) {
        modalContainer.classList.remove("modal-container-shown");
        modal.classList.remove("modal--shown");
    }
    
    modalCloseBtn.addEventListener("click", closeModal);
    /*Close the  modal when
    clicking outside the modal*/
    window.addEventListener("click", event => {
        if(event.target === modalContainer) {
            closeModal();
        }
    })
}


modalFunctionality();