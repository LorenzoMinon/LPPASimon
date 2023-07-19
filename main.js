'use strict';

window.onload = function() {
  var playBtn = document.getElementById('playBtn');
  var resetBtn = document.getElementById('resetBtn');
  var redBtn = document.getElementById('redBtn');
  var yellowBtn = document.getElementById('yellowBtn');
  var blueBtn = document.getElementById('blueBtn');
  var greenBtn = document.getElementById('greenBtn');

  playBtn.addEventListener('click', handlePlayBtn);
  resetBtn.addEventListener('click', handleResetBtn);
  redBtn.addEventListener('click', handleRedBtn);
  yellowBtn.addEventListener('click', handleYellowBtn);
  blueBtn.addEventListener('click', handleBlueBtn);
  greenBtn.addEventListener('click', handleGreenBtn);
};
