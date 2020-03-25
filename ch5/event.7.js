process.once('uncaughtException', function(error){
		console.log('에외가 발생했다. -.- ;');
		});

let test = function(){
	setTimeout(test, 2000);
	error.error.error();
}

setTimeout(test, 2000);

