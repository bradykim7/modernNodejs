let onUncaughtException = function (error){
	console.log("예외가 발생했군 이번은 봐주지 -.-");

};

process.on('uncaughtException', onUncaughtException);

let test = function (){
	setTimeout(test,2000);
	error.error.error();
};

setTimeout(test,2000);
