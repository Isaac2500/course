
export class bowling{
    
    private score = 0;
    
    public calculateScore() {
        return this.score;
    }
    
    public roll(pins: number) {
        this.score += pins;
    }



}