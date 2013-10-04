;(function(){
	var fib = [];
	function doWork(){
		var run = true;
		do{
			var fibNum = (fib.length == 0) ? 1 : fib[fib.length - 1];
			getNextFib(fibNum);
			/*if (fib.length == 0){
				getNextFib(1);
			}
			else {
				getNextFib(fib[fib.length - 1]);
			}*/
			if (fib.length == 3){
				run = false;
			}
		}
		while(run)
		

	}

	function getNextFib(num){
		fib.push(num);
		//if (num == 1){
		//	return 1;
		//}

		//calc next fib, 
		//push to array
		//return last item in array 
		//return num;
	}

	doWork();	
})();