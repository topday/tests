/*
Here are represneted two instances on how JavaScript differentiate the objecting language. 

The first sample with Plant, Flower, Tree is based on prorotype only. It inherit the parent object and allow to override. 

@TODO
The second example provides the options to inherit object via constructor scope which is more simmilar to JAVA, PHP and provides more advantages, like extend of parent method it self.
*/

function Plant() {

  this.isSeasonal = true;

  this.getPlantTime = function() {
    return (this.isSeasonal) ? 'spring' : 'autumn';
  };
}

function Flower(name) {

  this.advantage = function() {
    return (this.isSeasonal) ? 'colorful' : 'tiny';
  };
}

function Tree(name) {
  
  this.advantage = function() {
    return (this.isSeasonal) ? 'weak' : 'strong';
  };
}

Tree.prototype = new Plant();
Tree.prototype.isSeasonal = false;
oak = new Tree('Oak');

console.log('-');
console.log('Oak');
console.log('is seasonal: ', oak.isSeasonal);
console.log('plant time:', oak.getPlantTime());
console.log('Advantage:', oak.advantage());

Flower.prototype = new Plant();
tulip = new Flower('tulip');

console.log('-');
console.log('Tulip');
console.log('is seasonal: ', tulip.isSeasonal);
console.log('plant time: ', tulip.getPlantTime());
console.log('Advantage: ', tulip.advantage());
