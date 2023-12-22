document.addEventListener('DOMContentLoaded', function () {
    const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
    let keyIndex = 0;
  
    const messageElement = document.getElementById('message');
    const keyElement = document.getElementById('key');
    const newGameButton = document.getElementById('new-game');
  
    function updateGame() {
      keyIndex = 0;
      const randomIndex = Math.floor(Math.random() * keys.length);
      keyElement.textContent = keys[randomIndex];
    }
  
    function keyDown(event) {
      const pressedKey = event.key.toUpperCase();
      
      if (pressedKey === keys[keyIndex]) {
        keyIndex += 1;
  
        if (keyIndex === keys.length) {
          PNotify.success({ text: 'ви все коректно натиснули' });
          updateGame();
        } else {
          keyElement.textContent = keys[keyIndex];
        }
      } else {
        PNotify.error({ text: 'ой не та клвша спробуйте ще раз' });
      }
    }
  
    function keyPress(event) {
      event.preventDefault();
    }
  
    function handleNewGameClick() {
      updateGame();
      PNotify.info({ text: 'почалась нова гра' });
    }
  
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keypress', keyPress);
    newGameButton.addEventListener('click', handleNewGameClick);
  
    updateGame();
  });
  