;(function(){
	function doWork(){
 		
 		var fib = loadFib();

		var sum = 0;
		var work = '';
		var evenWork = '';
		for(var i = 0; i < fib.length; i++) {
			if (fib[i] < 4000000) {
				work += fib[i] + ', ';
				if (fib[i] % 2 == 0){
					sum += fib[i];
					evenWork += fib[i] + ', ';
				}
			}
		}
		document.getElementById('Work').innerHTML = '<p>Fibinacci numbers below 4 million:</p><p>' 
												+ work.substring(work.length-2,2) + '</p><p>Even Fibinacci numbers below 4 million:</p>' 
												+ evenWork.substring(evenWork.length-2,2);
		document.getElementById('Answer').innerHTML = sum;
	}

	function loadFib(){
		var run = true;
		var fib = [];
		fib.push(0);
		fib.push(1);
		do{
			var fibNum = fib[fib.length - 1];
			fib.push(fibNum + fib[fib.length-2]);

			if (fib[fib.length - 1] > 4000000){
				run = false;
			}
		}
		while(run);

		return fib;
	}

	doWork();	
})();