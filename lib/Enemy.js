const enemy = require('../lib/Enemy.js');

const Potion = require('./Potion');

const Character = require('../lib/Character.js');

class Enemy extends Character {
  constructor (name,weapon) {
    super();
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * 10 + 85);
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
}

getStats () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
}

//returns the inventory array or false if empty
getInventory () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};


addPotion(potion) {
    this.inventory.push(potion);
  
}
usePotion (index) {
      const potion = this.getInventory().splice(index, 1)[0];

      switch (potion.name ) {
        case 'agility': 
            this.agility += potion.value;
                break;
        case 'health': 
            this.health += potion.value;
                break;
        case 'strength': 
            this.strength += potion.value;
                break;

      }
    }
}

//   Enemy.prototype = Object.create(Character.prototype);
  Enemy.prototype.getDescription = function() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

module.exports = Enemy;