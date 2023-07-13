var PrintColor = function(item,index){
    setTimeout(function(){console.log(color);}, 1000*i);
}; //map, filter y otro mas

var highlightColor = function(){
    console.log(color);
};

var showSequence = function(){
    sequence.forEach(PrintColor)
};
var handlePlayBtn = function(){
    console.log("click en handleplaybtn...");
    var colorPosition = parseInt(Math.random() * 4); //Probar math floor
    var newColor =  ['red','yellow','blue','green'][colorPosition]
    console.log(newColor)
    sequence.push(newColor)
    showSequence();
};
var handlePlayBtn
var handlePlayBtn
var handlePlayBtn
var handlePlayBtn
var handlePlayBtn

var sequence = [];