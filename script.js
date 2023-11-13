function validEmail(str) {
  //your JS code here.
	let arr = str.split('.');
	let result = false;
	let arr2 = arr[0].split('');
	arr2.forEach((elem) => {
		if(elem == '@'){
			result = true;
		}
	})
	if(result && arr2[0] != '@'){
		return true;
	}
	return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
