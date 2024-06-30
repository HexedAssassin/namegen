import { maleNames, femaleNames } from './realNames.js';
import { adjectives, nouns } from './usernames.js';

let category = document.querySelector(".category");
let output = document.querySelector(".name");
let btn = document.querySelector(".nameBtn");
let select = document.querySelector(".nameSelect")
let currSelection = [...maleNames,...femaleNames];

let inAnim = false;
const animTimes = 15;

btn.addEventListener("click",function(){
  if (!inAnim){
    animateNames();
  }
});

select.addEventListener("change",function(){
  if (select.value != "username"){
    nameSelections();
  }
  else{
    category.textContent = "Category: Usernames"
  }
});

function getRandom(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateNames(){
  inAnim = true;
  let index = 0;
  const interval = setInterval(() => {
    index++;
    if (index >= animTimes) {
      clearInterval(interval);
      inAnim = false;
      return;
    }
    displayName();
  }, 50);
}

function displayName(){
  if (select.value === "username"){
    createUsername();
  }
  else{
    let rand = getRandom(0,currSelection.length);
    output.textContent = currSelection[rand];
  }
  
  
}

function nameSelections(){
  if (select.value === "both"){
    category.textContent = "Category: All Names"
    currSelection = [...maleNames,...femaleNames];
  }
  else if (select.value === "male"){
    category.textContent = "Category: Male Names"
    currSelection = maleNames;
  }
  else{
    category.textContent = "Category: Female Names"
    currSelection = femaleNames;
  }
 
}

function createUsername(){
  let adj = getRandom(0,adjectives.length);
  let noun = getRandom(0,nouns.length);
  output.textContent = adjectives[adj] + " " + nouns[noun];
}