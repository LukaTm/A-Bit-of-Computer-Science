console.log(power(2, 0)); // 1

function power(base, exponent){
	if(exponent == 0) return 1;
	return base * power(base, exponent - 1);
} 