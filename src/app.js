/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["our", "my", "your"];
  let noun = ["fries", "cat", "chocolate"];
  let adj = ["precious", "great"];
  let extensions = [".org", ".com", ".cl", ".net"];

  function generateDomains(arr1, arr2, arr3, arr4) {
    let domains = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          domains.push(
            `${arr1[i] +
              arr2[j] +
              arr3[k] +
              arr4[Math.floor(Math.random() * 6)]}`
          );
        }
      }
    }
    return domains;
  }
  var domainElement = document.getElementById("domain");
  var generatedDomains = generateDomains(pronoun, adj, noun, extensions);

  domainElement.innerHTML = generatedDomains.join("<br>");
};
