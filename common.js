'use strict';

// Массивы
/*var froots = ['apple', 'orange', 'grape'];
froots.push('lemon');
froots.unshift('green apple');
var myFroot = froots.pop();
var hisFroot = froots.shift();
console.log(froots, myFroot, hisFroot);*/

// Конкат (Склеивание)
// var froots = ['apple', 'orange', 'grape', 'banana', 'grapefruit', 'lime', 'melon'];
// var animals = ['bear', 'wolf', 'lion'];
// var cats = ['lapik', 'barsik', 'pups'];
// var frootsAndAnimals = froots.concat(animals, cats);
// console.log(frootsAndAnimals);
// froots.sort();

// Slice (Разделение)

// var wether = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];
// var winter = wether.slice(0, 5);
// var summer = wether.slice(5);

// ==================================================

// functions expressions
// anonymous expressions
// IFFEs

/*function knockKnock () {
    return 'who\'s there?'; // functions expressions
}
alert(knockKnock());*/

/*var knockKnock = function () {
    return 'who\'s there'
};*/

/*function dogWalker(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}
dogWalker('Paul', 'Charlie');*/

/*(function (person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));*/

/*var dogWalker = (function (person, dog) {
 return person + ' is taking ' + dog + ' for a walk.';
 }('Paul', 'Charlie'));*/

// Глобальные и локальные переменные

/*var gallons = 12;
var mpg = 34;
function roadTrip() {
    return gallons * mpg;
}
alert(roadTrip());*/
//===================

//global scope

/*var height = 10;
function volume() {
    //parent scope
    var width = 10;
    var lenght = 10;
    var volumeOfObject = function () {
        // child or local scope
        return height * width * lenght;
    };
    return volumeOfObject();
}
alert(volume());*/
//==============================
//Switch
//==============================
/*var gradeRremark = 'B';

switch(gradeRemark) {
    case 'A':
        alert('Great job');
        break;
    case 'B':
        alert('Good job');
        break;
    case 'C':
        alert('Good try');
        break;
    default:
        alert('You are grounded');
}*/

//==========================
//Math
//==========================

/*var dice = 6;

switch(Math.floor(Math.random() * 7)) {
    case 1:
        alert('Terrible Roll');
        break;
    case 2:
        alert('Bad Roll');
        break;
    case 3:
        alert('Could do better');
        break;
    case 4:
        alert('Nice Toss');
        break;
    case 5:
        alert('Good roll');
        break;
    case 6:
        alert('Great Roll');
        break;
    default:
        alert('Did you forget to roll?');
        break;
}*/
//===========================
//Цыклы while..do...for
//===========================



//===========================
// this & bind
//===========================

/*let person1 = {
    name: 'Alex'
};

let person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name;
}
namer.bind(person1)();*/

/*let number = {
    x: 24,
    y: 22
};

let count = function () {
    console.log(this.x + this.y)
};

let boundFunc = count.bind(number);*/

//===========================
// this & call
//===========================

/*var myLanguages = function (lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and i know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};
var person1 = {
  name: 'Oleg'
};

var person2 = {
  name: 'Sarah'
};

var languages = ['English', 'Spanish', 'Germany'];

myLanguages.call(person1, 'JavaScript', 'Java', 'Ruby');*/

//===========================
// functional programming
//===========================
// var weather = [72, 84, 34, 105, 22, 88, 99, 3, 8, 94];

/*var niceWeather = function (temp) {
    return temp > 70;
};
var go0outside = weather.filter(niceWeather);*/

// same result =================================

/*var go0outside = weather.filter(function (temp) {
   return temp > 70;
});*/

/*var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
];

/!*var sunnyDays = [];

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
}*!/

var sunnyDays = forecast.filter(function(weather) {
    return weather.sun;
});*/








