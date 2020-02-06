import Animal from "./Animal";

class Bird extends Animal {
    protected _particularSound = 'pipipi';
    
    public speak(speach: string): string {
        return super.speak(speach);
    }

    public escapeFromPrettyCat() {
        // notice pretty cat
        // provoke pretty cat
        // escape from pretty cat
    }
}
export default Bird;