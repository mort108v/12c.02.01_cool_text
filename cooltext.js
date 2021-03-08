"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Page Initialized");

    document.querySelector(".animate").addEventListener("click", animateText);

}

function animateText() {
    // Select coolText
    const coolText = document.querySelector(".my-text");

    // Split up each letter and make it an array
    let textToAnimate = Array.from(coolText.textContent);

    console.log(textToAnimate);

    // Remove text from screen
    coolText.textContent = "";

    textToAnimate.forEach((letter, index) => {
        const animateLetter = document.createElement("span");
        animateLetter.classList.add("letter", "fade-up", "toUppercase");
        animateLetter.style.setProperty("--letter", index);
        if (letter === " ") {
            animateLetter.innerHTML = "&nbsp;";
        } else {
            animateLetter.textContent = letter;
        }
        coolText.append(animateLetter);
        //    transformUppercase();

        //         function transformUppercase() {
        //             console.log("Make me Uppercasee");

        //             const textdiv = document.querySelector("h2.my-text");
        //             textdiv.classList.add(".toUppercase");
        //         }     
    });

}

// function transformUppercase() {
//     console.log("Make me Uppercasee");

//     animateLetter.forEach((letter) => {
//         letter.toUppercase();
//     })
// }