class Port{
    constructor(name){
        this.name = name;
        this.ships = [];
    };
    addShip(ship){
        this.ships.push(ship);
    }
    removeShip(ship){
        const removeIndex = this.ships.indexOf(ship);
        this.ships.splice(removeIndex, 1);
    }
};

module.exports = Port;