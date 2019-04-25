// JavaScript Document

let element = document.querySelector(".banner");
element.addEventListener("load", setTimeout(reloadBanner, 20000)); 

function reloadBanner(){
	location.reload();
}