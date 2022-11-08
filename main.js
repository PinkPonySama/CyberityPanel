function getDatePass() {
	let fullUserDate = document.getElementById('input_date').value;
	let fullNowDate = new Date();
	let nowDay = fullNowDate.getDate();
	let nowMonth = fullNowDate.getMonth();
	nowMonth += 1;
	let nowYear = fullNowDate.getFullYear();
	let userDay = fullUserDate.split('.')[0];
	let userMonth = fullUserDate.split('.')[1];
	let userYear = fullUserDate.split('.')[2];
	let userAge = nowYear - userYear
	if (userDay > 31 || userMonth > 12 || userYear >= nowYear)  {
		alert('Убедитесь в правильности написания даты')
	} else if (userDay > 29 && userMonth == 2) {
		alert('Убедитесь в правильности написания даты')
	} else if ((userDay > 30) && (userMonth == 2 || userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11)) {
		alert('Убедитесь в правильности написания даты')
	} else {
		if (nowMonth < userMonth) {
			userAge -= 1 
		} else if (nowMonth <= userMonth && nowDay < userDay) {
			userAge -= 1
		}
		if (userAge >= 14 && userAge < 20) {
			// ТУТ НУЖНО ПРОДОЛЖИТЬ КОД
			alert('Код исполнился, ты молодец')

		}
	}
	alert('Ваша хуета, сер - ' + fullUserDate + '\nДата сегодня - ' + nowDay + '.' + nowMonth + '.' + nowYear + '\nДень - ' + userDay + ' Месяц - ' + userMonth + ' Год - ' + userYear);
}