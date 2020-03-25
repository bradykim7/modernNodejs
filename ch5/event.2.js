// Limited event maximum 15
// If you want to infinite events to add, setMaxListeners(0);
process.setMaxListeners(15);

for(let i =0; i<15; i++){

	process.on('exit', function () {});

}
