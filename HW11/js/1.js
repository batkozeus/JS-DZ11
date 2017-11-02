window.onload = function() {

	// Task 1

	document.getElementById('btn1').onclick = supports_html5_storage;
	var locStor = document.getElementById('locStor');

	function supports_html5_storage() {
		try {
			locStor.innerHTML = 'localStorage - присутствует';
			return 'localStorage' in window && window['localStorage'] !== null;		
		} catch (e) {
			locStor.innerHTML = 'localStorage - отсутствует';
			return false;			
		}
	}


	// Task 2

	if (localStorage.getItem('css')!=null) {
		var theme = localStorage.getItem('css');
		document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = theme;
	}

	document.getElementById('old').onclick = function () {
		document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = 'style.css';
		localStorage.setItem('css','style.css');
	}

	document.getElementById('new').onclick = function () {
		document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = 'style2.css';
		localStorage.setItem('css','style2.css');
	}


	// Task 3

	var massiv = {
		name: 'Batko',
		status: 'Zeus',
		position: 'Lord of the Universe'
	}
	var mASSIV = JSON.stringify(massiv);


	localStorage.setItem('Igor', mASSIV);

	var igor = document.getElementById('igor');

	document.getElementById('btn2').onclick = function () {
		var batko = localStorage.getItem('Igor');
		console.log(batko);
		var retBatko = JSON.parse(batko);
		console.log(retBatko);
		var pustoe = '';
		for (var key in retBatko) {
			pustoe += key + ' - ' + retBatko[key] + ';' + '<br>';
		}
		igor.innerHTML = pustoe;
	}


	// Task 4

	function timer () {
		var startTimer= setTimeout(popBox, 2000);
		if (localStorage.getItem('okno') == 'neVsplivaet') {
			console.log('Не должно всплыть')
			clearTimeout(startTimer);
		}
	}

	function popBox(){
		x=confirm("Вы согласны?");
		if (x==true){
			localStorage.setItem('okno', 'neVsplivaet');
		}
		else {
			localStorage.setItem('okno', 'vsplivaet');
		}
	}
	
	timer ();


	// Task 5

	var allStorage = document.getElementById('allStorage');

	document.getElementById('btn3').onclick = function () {

		var pustoe2 = '';
		for (var key in localStorage) {
			pustoe2 += key + ' - ' + localStorage[key] + ';' + '<br>';
		}
		allStorage.innerHTML = pustoe2;
	}




	//----------------

}