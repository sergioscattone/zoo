import Animal from "./Animal";

class Fish extends Animal {
    protected _particularSound = 'gluglu';
    
    public speak(speach: string): string {
        return super.speak(speach);
    }

    public takeControlGotham() {
        // find the penguin
        // kill the penguin
        // take control of gotham
    }
}
export default Fish;