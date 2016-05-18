'use strict';
function thousands_separators(num) {
		var stringNum=parseFloat(num).toString();
		var index=stringNum.indexOf(".");

		if(index===-1){  //整数
			stringNum=stringNum.replace(/(\d+?)(?=(?:\d{3})+$)/g, "$1,");
			return stringNum;
		}
	    else{    //小数 
	    	var lstNum=stringNum.slice(index);
			stringNum=stringNum.slice(0,index).replace(/(\d+?)(?=(?:\d{3})+$)/g, "$1,");
		    stringNum+=lstNum;
		    return stringNum;
		}
}
module.exports = thousands_separators;
