class Cars {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
     start() {
        return `This ${this.name} can start`;
    }
    stop() {
        return `This ${this.name} can stop`;
    }
} 
class Bmw extends Cars {
    constructor(name, color, modelYear) {
        super(name, color);
        this.modelYear = modelYear;
    }
    model() {
        return `This is a ${this.modelYear} model year car`;
    }
}
let volvo = new Bmw("Volvo", "blue", 1992);

console.log(volvo.start());
console.log(volvo.model());
