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
	let userAge = nowYear - userYear;
	if (userDay > 31 || userMonth > 12 || userYear >= nowYear)  {
		alert('Убедитесь в правильности написания даты');
	} else if (userDay > 29 && userMonth == 2) {
		alert('Убедитесь в правильности написания даты');
	} else if ((userDay > 30) && (userMonth == 2 || userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11)) {
		alert('Убедитесь в правильности написания даты');
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
            let validDay = getValidFullDate.getDate();
            let validMonth = getValidFullDate.getMonth();
            validMonth += 1;
            userMonth += 1;
            let validYear = getValidFullDate.getFullYear();
            let validFullDate = `${validDay}.${validMonth}.${validYear}`;
			if (nowMonth == userMonth && nowDay == userDay) {
				alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\nДЕНЬ РОЖДЕНИЯ СЕГОДНЯ!\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			} else {
				alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			}
		} else if (userAge >= 20 && userAge < 45) {
			// С этого годе исполнилось 20
			let getCardValibLastYear = 20 + parseInt(userYear);
			// Это окончание исполнится 45
            let getCardValidYear = 45 + parseInt(userYear);
            userMonth -= 1;
            let getValidFullDate = new Date(getCardValidYear, userMonth, userDay);
            getValidFullDate.setDate(getValidFullDate.getDate() + 90);
            let validDay = getValidFullDate.getDate();
            let validMonth = getValidFullDate.getMonth();
            validMonth += 1;
            userMonth += 1;
            let validYear = getValidFullDate.getFullYear();
            let validFullDate = `${validDay}.${validMonth}.${validYear}`;
            if (nowMonth == userMonth && nowDay == userDay) {
				alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\nДЕНЬ РОЖДЕНИЯ СЕГОДНЯ!\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			} else {
				alert(`Паспорт действителен\nc ${userDay}.${userMonth}.${getCardValibLastYear}\nдо ${validDay}.${validMonth}.${validYear}( ${validYear}-${validMonth}-${validDay} )\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userYear}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			}
		} else if (userAge >= 45 && userAge < 300) {
			let getCardValibLastYear = 45 + parseInt(userYear);
			if (nowMonth == userMonth && nowDay == userDay) {
				alert(`Паспорт бессрочный.\nНо не раньше: ${userDay}.${userMonth}.${getCardValibLastYear}\nДЕНЬ РОЖДЕНИЯ СЕГОДНЯ!\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userMonth}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			} else {
				alert(`Паспорт бессрочный.\nНо не раньше: ${userDay}.${userMonth}.${getCardValibLastYear}\n\nВозраст: ${userAge}\nДата рождения: ${userDay}.${userMonth}.${userMonth}\nДата сегодня: ${nowDay}.${nowMonth}.${nowYear}`);
			}
		}
	}
}