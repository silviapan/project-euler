/*Solution to Problem 1 - Multiples of 3 and 5//
Find the sum of all the multiples of 3 or 5 below 1000*/
var euler1 = function() {
	var sum = 0;
	for (var i = 0; i < 1000; i++) {
		if ((i%3===0) || (i%5===0)) {
		sum += i;
	  }
	};
	document.getElementById('sol1').innerHTML = sum;
};

/*Solution to Problem 2 - Even Fibonacci Number
Find the sum of the even-valued Fibonacci terms whose values do not exceed four million*/
var euler2 = function() {
	var x = 0; var y = 1;
	var fib = 0;
	var evenSum = 0;

	while (fib<4000000) {
		if (fib%2===0) {
			evenSum += fib;
		}

		fib = x + y;
		x = y;
		y = fib;
	};
	document.getElementById('sol2').innerHTML = evenSum;
};

/*Solution to Problem 3 - Largest Prime Factor
Find the largest prime factor of the number 600851475143*/
var euler3 = function () {
	var n = 600851475143;

	for (i = 2; i < n; i++) {
		if (n%i === 0) {
			n /= i;
		}
	};
	document.getElementById('sol3').innerHTML = n;
};