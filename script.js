const countwords = () => {
	let noc = document.getElementById('counter').value.length;
	console.log(noc);

	document.getElementById('showdata').innerHTML = 'Total Characters = ' + noc;
};
