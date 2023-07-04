const QUESTIONS = [
  {
    question: 'Команда в "League of Legends" состоит из 5 игроков. Подтвердите это.',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Джанглер в "League of Legends" отвечает за контроль над картой. Подтвердите это.',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'В линии верхнего коридора играет роль "Топ". Подтвердите это.',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Дракон в "League of Legends" дает улучшения команде, которая его убивает. Подтвердите это.',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Мид - это роль, которая обычно играет в линии среднего коридора. Подтвердите это.',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Какой чемпион в "League of Legends" известен своим глобальным ультимейтом, позволяющим телепортироваться на другую часть карты?',
    answer: 'Твистед Фейт',
    type: 'prompt',
  },
  {
    question: 'В линии нижнего коридора играет роль "ADC" в паре с поддержкой. Верно или нет?',
    answer: false,
    type: 'confirm',
  },
  {
    question: 'Какой чемпион в "League of Legends" известен своим мощным контролем толпы и способностью создавать стены?',
    answer: 'Анивия',
    type: 'prompt',
  },
  {
    question: 'Событие "Worlds" проводится ежегодно и собирает лучших профессиональных игроков со всего мира. Подтвердите это.',
    answer: true,
    type: 'confirm',
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