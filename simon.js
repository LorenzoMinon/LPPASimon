'use strict'

var playBtn;
var resetBtn;
var redBtn;
var yellowBtn;
var blueBtn;
var greenBtn;
var sequence = [];
var color = ['red','blue','yellow','green'] // en el manejador e envetos de play, la voy a iniciar.


var init = function () {
    playBtn = document.getElementById('playBtn');
    resetBtn = document.getElementById('resetBtn');
    redBtn = document.getElementById('playBtn');
    yellowBtn = document.getElementById('playBtn');
    blueBtn = document.getElementById('playBtn');
    greenBtn = document.getElementById('playBtn');


    playBtn.addEventListener('click',handlePlayBtn);
    playBtn.addEventListener('click',handlePlayBtn);
    playBtn.addEventListener('click',handlePlayBtn);
    playBtn.addEventListener('click',handlePlayBtn);
    playBtn.addEventListener('click',handlePlayBtn);
    playBtn.addEventListener('click',handlePlayBtn);
    //investigar mouse down y up 

}; //sentencia de asignacion
