import Animal from "./Animal";

class Tiger extends Animal {
    protected _particularSound = 'grrr';
    
    public speak(speach: string): string {
        return super.speak(speach);
    }

    public sellCereals() {
        // get Cereals
        // take out your inner tiger
        // sell Cereals
    }
}
export default Tiger;