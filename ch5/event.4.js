process.on('exit', function(code){
		console.log('Bye Bye ~ !');
		});

process.exit();


process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행중');
