let fs = require('fs');

fs.readFile('textfile', 'utf8', function(error, data){

		if(error){
			return console.log(error);
		}

		console.log(data);
});

fs.writeFile('textfile.txt', 'HelloWorld ..!', 'utf8', function (error){
		if(error){ return console.log(error);}

		console.log("File Write Complete");
		});


