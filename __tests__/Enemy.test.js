const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.name).toBe('goblin');
  expect(enemy.weapon).toBe('sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

test('gets enemys health value', () => {
    const enemy = new Enemy('Candyman', 'Snickers');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks if the enemy is alive or not', () => {
    const enemy = new Enemy('Donald Trump', 'Tax Return');
    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('Vegeta', 'Final Flash');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
  });

  test('get enemys attack value', () => {

    const enemy = new Enemy('Bill S Preston Esquire', 'Electric Guitar');

    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });

  test('get description of enemy', () => {

    const enemy = new Enemy('Tom Brady', 'deflated football');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Tom Brady'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('deflated football'));
  });