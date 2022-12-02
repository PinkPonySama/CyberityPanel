function getDatePass() {
	let fullUserDate = document.getElementById('input_date').value;
	let fullNowDate = new Date();
	let nowDay = fullNowDate.getDate();
	let nowMonth = fullNowDate.getMonth();
	nowMonth += 1;
	let nowYear = fullNowDate.getFullYear();
	if (fullUserDate.includes('.') == true) {
		var userDay = fullUserDate.split('.')[0];
		var userMonth = fullUserDate.split('.')[1];
		var userYear = fullUserDate.split('.')[2];
	} else if (fullUserDate.includes('-') == true) {
		var userDay = fullUserDate.split('-')[2];
		var userMonth = fullUserDate.split('-')[1];
		var userYear = fullUserDate.split('-')[0];
	}
	let userAge = nowYear - userYear;
	if (userDay > 31 || userMonth > 12 || userYear >= nowYear)  {
		return false
		//alert('Убедитесь в правильности написания даты');
	} else if (userDay > 29 && userMonth == 2) {
		return false
		//alert('Убедитесь в правильности написания даты');
	} else if ((userDay > 30) && (userMonth == 2 || userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11)) {
		return false
		//alert('Убедитесь в правильности написания даты');
	} else {
		if (nowMonth < userMonth) {
			userAge -= 1;
		} else if (nowMonth <= userMonth && nowDay < userDay) {
			userAge -= 1;
		}
		if (userAge >= 14 && userAge < 20) {
			// С этого годе исполнилось 14
			let getCardValibLastYear = 14 + parseInt(userYear);
			// Это окончание исполнится 20
            let getCardValidYear = 20 + parseInt(userYear);
            userMonth -= 1;
            let getValidFullDate = new Date(getCardValidYear, userMonth, userDay);
            getValidFullDate.setDate(getValidFullDate.getDate() + 90);
            var validDay = getValidFullDate.getDate();
            var validMonth = getValidFullDate.getMonth();
            validMonth += 1;
            userMonth += 1;
            let validYear = getValidFullDate.getFullYear();
            let validFullDate = `${validDay}.${validMonth}.${validYear}`;
            if (String(validDay).length < 2) {
            	validDay = '0' + validDay
            }
            if (String(validMonth).length < 2) {
            	validMonth = '0' + validMonth
            }
			if (nowMonth == userMonth && nowDay == userDay) {
				document.getElementById("getCardValibLastYear").innerHTML="Годен с: " + userDay + '.' + userMonth + '.' + getCardValibLastYear;
            	document.getElementById("getCardValidYear").innerHTML="Годен до: " + validDay + '.' + validMonth +'.' + validYear + '( ' + validYear + '-' + validMonth + '-' + validDay +' )';
            	document.getElementById("user_age").innerHTML="Возраст: " + userAge;
				document.getElementById("date_now").innerHTML="Дата сегодня: " + nowDay + '.' + nowMonth  + '.' + nowYear;
				//alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\nДЕНЬ РОЖДЕНИЯ СЕГОДНЯ!\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			} else {
				document.getElementById("getCardValibLastYear").innerHTML="Годен с: " + userDay + '.' + userMonth + '.' + getCardValibLastYear;
            	document.getElementById("getCardValidYear").innerHTML="Годен до: " + validDay + '.' + validMonth +'.' + validYear + '( ' + validYear + '-' + validMonth + '-' + validDay +' )';
            	document.getElementById("user_age").innerHTML="Возраст: " + userAge;
				document.getElementById("date_now").innerHTML="Дата сегодня: " + nowDay + '.' + nowMonth  + '.' + nowYear;
				//alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			}
		} else if (userAge >= 20 && userAge < 45) {
			// С этого годе исполнилось 20
			let getCardValibLastYear = 20 + parseInt(userYear);
			// Это окончание исполнится 45
            let getCardValidYear = 45 + parseInt(userYear);
            userMonth -= 1;
            let getValidFullDate = new Date(getCardValidYear, userMonth, userDay);
            getValidFullDate.setDate(getValidFullDate.getDate() + 90);
            var validDay = getValidFullDate.getDate();
            var validMonth = getValidFullDate.getMonth();
            validMonth += 1;
            userMonth += 1;
            let validYear = getValidFullDate.getFullYear();
            let validFullDate = `${validDay}.${validMonth}.${validYear}`;
            if (String(validDay).length < 2) {
            	validDay = '0' + validDay
            }
            if (String(validMonth).length < 2) {
            	validMonth = '0' + validMonth
            }
            if (nowMonth == userMonth && nowDay == userDay) {
            	document.getElementById("getCardValibLastYear").innerHTML="Годен с: " + userDay + '.' + userMonth + '.' + getCardValibLastYear;
            	document.getElementById("getCardValidYear").innerHTML="Годен до: " + validDay + '.' + validMonth +'.' + validYear + '( ' + validYear + '-' + validMonth + '-' + validDay +' )';
            	document.getElementById("user_age").innerHTML="Возраст: " + userAge;
				document.getElementById("date_now").innerHTML="Дата сегодня: " + nowDay + '.' + nowMonth  + '.' + nowYear;
				//alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\nДЕНЬ РОЖДЕНИЯ СЕГОДНЯ!\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			} else {
				document.getElementById("getCardValibLastYear").innerHTML="Годен с: " + userDay + '.' + userMonth + '.' + getCardValibLastYear;
            	document.getElementById("getCardValidYear").innerHTML="Годен до: " + validDay + '.' + validMonth +'.' + validYear + '( ' + validYear + '-' + validMonth + '-' + validDay +' )';
            	document.getElementById("user_age").innerHTML="Возраст: " + userAge;
				document.getElementById("date_now").innerHTML="Дата сегодня: " + nowDay + '.' + nowMonth  + '.' + nowYear;
				// alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			}
		} else if (userAge >= 45 && userAge < 300) {
			let getCardValibLastYear = 45 + parseInt(userYear);
			if (nowMonth == userMonth && nowDay == userDay) {
				document.getElementById("getCardValibLastYear").innerHTML="Годен с: " + userDay + '.' + userMonth + '.' + getCardValibLastYear;
            	
            	document.getElementById("user_age").innerHTML="Возраст: " + userAge;
				document.getElementById("date_now").innerHTML="Дата сегодня: " + nowDay + '.' + nowMonth  + '.' + nowYear;
				//alert(`Паспорт бессрочный.\nНо не раньше: ${userDay}.${userMonth}.${getCardValibLastYear}\nДЕНЬ РОЖДЕНИЯ СЕГОДНЯ!\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userMonth}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			} else {
				document.getElementById("getCardValibLastYear").innerHTML="Годен с: " + userDay + '.' + userMonth + '.' + getCardValibLastYear;
            	document.getElementById("getCardValidYear").innerHTML="Годен до: Бессрочный ( 2099-01-01 )";
            	document.getElementById("user_age").innerHTML="Возраст: " + userAge;
				document.getElementById("date_now").innerHTML="Дата сегодня: " + nowDay + '.' + nowMonth  + '.' + nowYear;
				//alert(`Паспорт бессрочный.\nНо не раньше: ${userDay}.${userMonth}.${getCardValibLastYear}\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userMonth}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			}
		}
	}
}