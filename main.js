'use strict';

window.onload = function() {
  var playBtn = document.getElementById('play_btn');
  var resetBtn = document.getElementById('reset_btn');
  var redBtn = document.getElementById('red_btn');
  var yellowBtn = document.getElementById('yellow_btn');
  var blueBtn = document.getElementById('blue_btn');
  var greenBtn = document.getElementById('green_btn');

  playBtn.addEventListener('click', handlePlayBtn);
  resetBtn.addEventListener('click', handleResetBtn);
  redBtn.addEventListener('click', handleRedBtn);
  yellowBtn.addEventListener('click', handleYellowBtn);
  blueBtn.addEventListener('click', handleBlueBtn);
  greenBtn.addEventListener('click', handleGreenBtn);
};
