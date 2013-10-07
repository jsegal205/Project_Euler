;(function(){
	var fib = [];
	function doWork(){
		var run = true;
		fib.push(0);
		fib.push(1);
		do{
			var fibNum = fib[fib.length - 1];
			fib.push(fibNum + fib[fib.length-2]);

			if (fib[fib.length - 1] > 4000000){
				run = false;
			}
			console.log(fib[fib.length -1]);
		}
		while(run);

		for(var i = 0; i<fib.length; i++){

			if ((fib[i] % 2 == 0) && (fib[i]<4000000)){
				console.log(fib[i]);
			}
		}

	}

	doWork();	
})();