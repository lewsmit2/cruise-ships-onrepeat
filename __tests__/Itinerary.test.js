const Itinerary = require('../src/itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});

describe('Itinerary instance can have ports', () => {
    it('can have ports', () => {
        const portName = jest.fn();
        const itinerary = new Itinerary([portName, portName]);

        expect(itinerary.ports).toEqual([portName, portName]);
    });
})