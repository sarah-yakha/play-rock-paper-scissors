// Функция для компьютера
function getComputerChoice() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const randomIndex =Math.floor(Math.random() * 3);
    console.log('----------------------------');
    return choices[randomIndex];
};

    const rules = {
        'камень': { 'ножницы': 'победа', 'камень': 'ничья', 'бумага': 'поражение' },
        'бумага': { 'камень': 'победа', 'бумага': 'ничья', 'ножницы': 'поражение' },
        'ножницы': { 'бумага': 'победа', 'ножницы': 'ничья', 'камень': 'поражение' }
      };
      
      // Функция для определения результата сражения между двумя игроками.
      function getResult(player1,player2) {
        return rules[player1][player2];
      }
      
      // Пример использования функции getResult для двух игроков.
      const player1Choice = 'камень'; // выбор первого игрока (например, 'камень')
      const player2Choice = getComputerChoice(); // выбор второго игрока (например, 'ножницы')
      
      // Получаем результат сравнения выборов игроков.
      const result = getResult(player1Choice, player2Choice);
      
      // Выводим результат на экран в зависимости от полученного результата.
      console.log(result === 'победа' ? 'Игрок 1 победил!' : (result === 'поражение' ? 'Игрок 2 победил!' : 'Ничья!'));

    


    function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 5; i++) {
        const playerSelection = prompt("Введите: камень, ножницы или бумага");
        const computerSelection = getComputerChoice();
        const result = getResult(player1Choice, player2Choice);
        console.log(result);

        if (result.includes('победа')){
            playerScore++;
        } else if (result.includes('поражение')){
            computerScore++;
        }
        
        console.log(`Счет: Игрок 1 ${playerScore} - Игрок 2 ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Молодец!ты выиграл.");
    } else if (computerScore > playerScore) {
        console.log("К сожалению, проиграл.");
    } else {
        console.log("Ничья");
    }
}

game();
