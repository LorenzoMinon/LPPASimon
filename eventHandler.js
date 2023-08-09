var sequence = [];
var color = ['red', 'blue', 'yellow', 'green'];
var score = 0;
var level = 1;
var speed = 1000; // Velocidad inicial de la secuencia en milisegundos
var isPlaying = false; // Variable para verificar si se está reproduciendo la secuencia
var startTime; //Almacenamos el tiempo
var scoreElement = document.getElementById('score');

var handlePlayBtn = function() {
    if (!isPlaying) {
      var playerName = document.getElementById('player_name').value;
      if (playerName.length < 3) {
         alert('El nombre debe tener al menos 3 letras.');
         return;
      }
      console.log('click en handleplaybtn...');
      startTime = Date.now(); // Captura el tiempo actual al inicio de alguna actividad
      sequence = [];
      score = 0;
      level = 1;
      scoreElement.textContent = 'Score: ' + score + ' Nivel: ' + level;
      play_btn.textContent = 'Playing...';
      play_btn.disabled = true;
      isPlaying = true;
      setTimeout(function() {
        showSequence();
      }, 1000);
    }
  };

  var handleResetBtn = function() {
    console.log('click en handleresetbtn.. ');
    sequence = [];
    score = 0;
    level = 1;
    scoreElement.textContent = 'Score: ' + score ;
  };

  var handleRedBtn = function() {
    if (isPlaying) {
      console.log('click en handleredbtn.. ');
      checkColor('red');
    }
  };

  var handleBlueBtn = function() {
    if (isPlaying) {
      console.log('click en handlebluebtn.. ');
      checkColor('blue');
    }
  };

  var handleGreenBtn = function() {
    if (isPlaying) {
      console.log('click en handlegreenbtn.. ');
      checkColor('green');
    }
  };

  var handleYellowBtn = function() {
    if (isPlaying) {
      console.log('click en handleyellowbtn.. ');
      checkColor('yellow');
    }
  };

  var checkColor = function(color) {
    var expectedColor = sequence.shift();
    if (color === expectedColor) {
      console.log('Color correcto');
      // Realiza alguna actividad que queremos medir en términos de tiempo
      score++;
      scoreElement.textContent = 'Score: ' + score + ' Nivel: ' + level;
      if (sequence.length === 0) {
        level++;
        speed *= 0.9; // Ajusta la velocidad para el siguiente nivel (incremento de dificultad)
        setTimeout(function() {
          showSequence();
        }, 1000);
      }
    }
    else {
    endTime = Date.now(); // Captura el tiempo actual al final de la actividad
    elapsedTime = endTime - startTime; // Calcula la duración en milisegundos
    console.log(elapsedTime);
    finalscore = score - elapsedTime/10000;
    showLostModal(); // ACA
    isPlaying = false;
    play_btn.textContent = 'Play';
    play_btn.disabled = false;
    reset_btn.disabled = false;
    }
  }



  var showSequence = function() {
    var i = 0;
    var interval = setInterval(function() {
      if (i >= level) {
        clearInterval(interval);
        isPlaying = true;
        return;
      }
      var colorPosition = Math.floor(Math.random() * 4);
      var newColor = color[colorPosition];
      sequence.push(newColor);
      highlightColor(newColor);
      i++;
    }, speed);
  };
  var highlightColor = function(color) {
    switch (color) {
      case 'red':
        red_btn.classList.add('highlight');
        setTimeout(function() {
          red_btn.classList.remove('highlight');
        }, 500);
        break;
      case 'blue':
        blue_btn.classList.add('highlight');
        setTimeout(function() {
          blue_btn.classList.remove('highlight');
        }, 500);
        break;
      case 'green':
        green_btn.classList.add('highlight');
        setTimeout(function() {
          green_btn.classList.remove('highlight');
        }, 500);
        break;
      case 'yellow':
        yellow_btn.classList.add('highlight');
        setTimeout(function() {
          yellow_btn.classList.remove('highlight');
        }, 500);
        break;
    }
  };
  var showLostModal = function() {
    isPlaying = false;
    play_btn.textContent = 'Play';
    play_btn.disabled = false;
    reset_btn.disabled = false;

    var modal = document.getElementById('myModal');
    var final_scoreElement = document.getElementById('final_score');
    var restartBtn = document.getElementById('restart_btn');
    var closeModalBtn = document.querySelector('.close'); 
    final_scoreElement.textContent = finalscore //score
    modal.style.display = 'block';

    restartBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      handleResetBtn();
    });
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      handleResetBtn();
    });
  }