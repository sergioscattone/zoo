import SkeakInterface from './../interfaces/speak.interface';

class Animal implements SkeakInterface {
    private _name: string;
    protected _particularSound = '';

    constructor(name: string) {
        this._name = name;
    }

    public speak(speach: string): string {
        return speach.split(' ').join(` ${this._particularSound} `);
    }

    public getName(): string {
        return this._name.toUpperCase();
    }
}
export default Animal;