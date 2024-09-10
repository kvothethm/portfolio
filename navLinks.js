console.log("Script is loading");

"use strict";

(function(){

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(event, tabName){
    for (let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

for (let tabLink of tabLinks) {
    tabLink.addEventListener('click', function (event) {
        const tabName = this.textContent.trim().toLowerCase();
        openTab(event, tabName);
    });
}

})();