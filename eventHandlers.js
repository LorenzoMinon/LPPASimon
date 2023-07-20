var sequence = [];
var color = ['red', 'blue', 'yellow', 'green'];
var score = 0;
var level = 1;
var speed = 1000; // Velocidad inicial de la secuencia en milisegundos
var isPlaying = false; // Variable para verificar si se está reproduciendo la secuencia

var scoreElement = document.getElementById('score');

var handlePlayBtn = function() {
    if (!isPlaying) {
      console.log('click en handleplaybtn...');
      sequence = [];
      score = 0;
      level = 1;
      scoreElement.textContent = 'Score: ' + score + ' Nivel: ' + level;
      playBtn.textContent = 'Playing...';
      playBtn.disabled = true;
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
      score++;
      scoreElement.textContent = 'Score: ' + score + ' Nivel: ' + level;
      if (sequence.length === 0) {
        level++;
        speed *= 0.9; // Ajusta la velocidad para el siguiente nivel (incremento de dificultad)
        setTimeout(function() {
          showSequence();
        }, 1000);
      }
    } else {
      console.log('Color incorrecto');
      isPlaying = false;
      playBtn.textContent = 'Play';
      playBtn.disabled = false;
      resetBtn.disabled = false;
    }
  };

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
        redBtn.classList.add('highlight');
        setTimeout(function() {
          redBtn.classList.remove('highlight');
        }, 500);
        break;
      case 'blue':
        blueBtn.classList.add('highlight');
        setTimeout(function() {
          blueBtn.classList.remove('highlight');
        }, 500);
        break;
      case 'green':
        greenBtn.classList.add('highlight');
        setTimeout(function() {
          greenBtn.classList.remove('highlight');
        }, 500);
        break;
      case 'yellow':
        yellowBtn.classList.add('highlight');
        setTimeout(function() {
          yellowBtn.classList.remove('highlight');
        }, 500);
        break;
    }
  };