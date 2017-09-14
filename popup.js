// function click(e){
// 	chrome.tabs.executeScript(null,{
// 		code:"document.body.style.backgroundColor='"+e.target.id+"'"
// 	}),window.close()
// }

// document.addEventListener("DOMContentLoaded",function(){
// 	for(var e=document.querySelectorAll("div"),t=0;t<e.length;t++)
// 		e[t].addEventListener("click",click)
// })


chrome.tabs.executeScript(null,{
		file:'content-script.js'
})
setTimeout(function(){
	window.close()
},1000)