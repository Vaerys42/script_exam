// ==UserScript==
// @name         Exam
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  GOT IT
// @author       Nemesis
// @match        https://profile.intra.42.fr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(openEvent, 1000);
    setInterval(registerEvent, 1000);
})();

function openEvent(){
    let i = 0;
    let agenda = document.getElementsByClassName("event-item");
    while (i < agenda.length){
        if (agenda[i].getAttribute("data-event-kind") == "exam"){
            console.log("Exam Found");
            let exam = agenda[i];
            let button = exam.getElementsByClassName("event-button");
            let full = exam.getElementsByClassName("event-full");
            let registered = exam.getElementsByClassName("event-registered");
            if (full.length == 0 && registered.length != 0)
                button[0].click();
            else
                console.log("Exam full or already registered");
        }
        i++;
    }
}

function registerEvent(){
    let window = document.getElementsByClassName("modal-dialog");
    if (!window)
        return ;
    let sub = window[0].getElementsByClassName("btn-default");
    if (sub.length != 0){
        sub[0].click();
    }
}
