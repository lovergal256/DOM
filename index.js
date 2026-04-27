const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const introParagraph = document.querySelector(".intro-paragraph");
console.log(introParagraph);

const allParagraphs = document.querySelectorAll(".intro-paragraph");
console.log(allParagraphs);

// Selecting the second paragraph option
const secondParagraph =allParagraphs[1];
console.log(secondParagraph);

 const secondParagraphByNthChild = document.querySelector("p:nth-child(2)");
 console.log(secondParagraphByNthChild);

//  Using getElementBy Id
const mainHeadingById = document.getElementById("main-heading");
console.log(mainHeadingById);

const intoParagraphByClass = document.getElementsByClassName("intro-paragraph");
console.log(intoParagraphByClass);

// Manipulating the DOM
mainHeading.textContent = "Hello, JavaScript in the DOM!";
mainHeading.style.color="Green";
mainHeading.style.fontSize="54px";

                        //   HANDLING EVENTS
// Events Examples
// 1.Click Event, 2.Mouseover Event, 3.Keydown Event, 4.Form Submit Event

const changeButton = document.querySelector("#change-button");
changeButton.addEventListener("click", function(){
    secondParagraph.textContent = "The content has been changed!";
    secondParagraph.style.color = "Blue";
    secondParagraph.style.fontSize = "24px";
});



