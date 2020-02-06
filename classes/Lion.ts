import Animal from "./Animal";

class Lion extends Animal {
    protected _particularSound = 'roar';
    
    public speak(speach: string): string {
        return super.speak(speach);
    }

    public saveKingdom() {
        // do hakuna matata
        // return and fight Scar
        // be king
    }
}
export default Lion;