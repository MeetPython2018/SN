/*
* @Author: cao424519431
* @Date:   2018-07-22 14:57:35
* @Last Modified by:   cao424519431
* @Last Modified time: 2018-07-22 15:11:05
*/
window.onload=function(){
	let firstScreen=document.getElementsByClassName("firstScreen")[0];
	console.log(firstScreen);
	let indexlist=firstScreen.getElementsByClassName("indexlist");
	console.log(indexlist);
	let item=firstScreen.getElementsByClassName("item");
	console.log(item);
	for (let i=0;i<indexlist.length;i++){
		indexlist[i].onmouseenter=function(){
			item[i].style.display="block";
		}
		indexlist[i].onmouseleave=function(){
			item[i].style.display="none";
		}
	}
}