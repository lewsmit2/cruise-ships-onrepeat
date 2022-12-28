/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});

describe('Can ship set sail', () => {
    it('can set sail', () => {
        const ship = new Ship('Dover');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});