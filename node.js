isHappyTicket = (number) => {
  let win = number.toString();
  const a = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]); // Сумма первой половины.
  const b = parseInt(number[3]) + parseInt(number[4]) + parseInt(number[5]); //Сумма второй половины.
console.log('--------------------------------------\n       Лоттерея "Чудесный мир"\n--------------------------------------')
  if (win.length === 6 && win.length / 2 === Math.floor(win.length / 2) && a == b) {  // Проверка номера
    console.log(`    Номер вашего билета: "${number}"\n    Результат: Ваш билет победил`);
    console.log('--------------------------------------\nУдача сегодня явно на вашей стороне :)\n--------------------------------------')
    return true;

  } else {
    console.log(`    Номер вашего билета: "${number}"\n    Результат: Ваш билет проиграл`);
    console.log('--------------------------------------\n Возможно вам повезет в другой раз :(\n--------------------------------------')
    return false;

  }
};
//Демонстрация.
isHappyTicket('34180')
