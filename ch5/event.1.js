process.on('exit', function(code){
		console.log('Bye Bye ... ^_^');
		});

process.on('uncaughtException', function (error){
		console.log("Exception comming out");
		});

let count = 0;
let test = function() {
	count = count +1;
	if(count >3){
		return ;
	}
// forced make Error
	setTimeout(test, 2000);
	error.error.error();
};

setTimeout(test, 2000);

