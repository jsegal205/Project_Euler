;(function(){
	var fib = [];
	function doWork(){
		if (fib.length == 0){
			getNextFib(1);
		}
		else {
			getNextFib(fib[fib.length - 1]);
		}

	}

	function getNextFib(num){
		if (num == 1){
			return 1;
		}
		//calc next fib, 
		//push to array
		//return last item in array 
		return num;
	}

	doWork();	
})();