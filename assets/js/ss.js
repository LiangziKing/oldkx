function change(){
	//通过父元素li，找到兄弟元素ul
	var oSecondDiv = this.parentNode.getElementsByTagName("ul")[0];
	//CSS交替更换来实现显、隐
	if(oSecondDiv.className == "myHide")
		oSecondDiv.className = "myShow";
	else
		oSecondDiv.className = "myHide";
}
window.onload = function(){
	var oDIV = document.getElementById("nr");
	var aH4 = oDIV.childNodes;	//子元素
	var oA;
	for(var i=0;i<aH4.length;i++){
		//假如子元素为li，且这个li有子菜单ul
		if(aH4[i].tagName == "H4" && aH4[i].getElementsByTagName("ul").length){
			oA = aH4[i].firstChild;	//找到超链接
			oA.onclick = change;	//动态添加点击函数
		}
	}
}