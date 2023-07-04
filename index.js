const QUESTIONS = [
    {
      question: 'Какое количество игроков составляет команду в "League of Legends"?',
      answer: '5',
      type: 'prompt',
    },
    {
      question: 'Какая позиция в "League of Legends" отвечает за контроль над картой?',
      answer: 'Джанглер',
      type: 'prompt',
    },
    {
      question: 'Какая роль в "League of Legends" обычно играет в линии верхнего коридора?',
      answer: 'Топ',
      type: 'prompt',
    },
    {
      question: 'Какое существо появляется в "League of Legends" через определенные промежутки времени и дает улучшения команде, которая его убивает?',
      answer: 'Дракон',
      type: 'prompt',
    },
    {
      question: 'Какая роль в "League of Legends" обычно играет в линии среднего коридора?',
      answer: 'Мид',
      type: 'prompt',
    },
    {
      question: 'Какой чемпион в "League of Legends" известен своим глобальным ультимейтом, позволяющим телепортироваться на другую часть карты?',
      answer: 'Твистед Фейт',
      type: 'prompt',
    },
    {
      question: 'Какая роль в "League of Legends" обычно играет в линии нижнего коридора в паре с поддержкой?',
      answer: 'ADC',
      type: 'prompt',
    },
    {
      question: 'Какой чемпион в "League of Legends" известен своим мощным контролем толпы и способностью создавать стены?',
      answer: 'Анивия',
      type: 'prompt',
    },
    {
      question: 'Какое событие в "League of Legends" проводится ежегодно и собирает лучших профессиональных игроков со всего мира?',
      answer: 'Worlds',
      type: 'prompt',
    },
    {
      question: 'Какой чемпион в "League of Legends" известен своей способностью прыгать на врагов и проводить комбо из ударов?',
      answer: 'Ривен',
      type: 'prompt',
    },
  ];
  
  let score = 0;
  
  for (let i = 0; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i];
    let userAnswer;
  
    if (question.type === 'prompt') {
      userAnswer = prompt(question.question);
    } else if (question.type === 'confirm') {
      userAnswer = confirm(question.question);
    }
  
    if (userAnswer === question.answer) {
      score += 10;
    }
  }
  
  alert(`Ваш результат: ${score} очков`);