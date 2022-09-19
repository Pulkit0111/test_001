
function checkPrime(num){
	let counter = 0;
	for (let i=1;i<=num;i++){
		if(num%i==0){
			counter++;
		}
	}
	if(counter == 2){
		return false;
	}
	return true;
}

let x = checkPrime(15);

if(x == true){
	console.log("Prime");
}else{
	console.log("Not Prime");
}