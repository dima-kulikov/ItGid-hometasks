class Goods2 extends Goods {
    constructor(a, b, c, d){
        super(a, b, c, d,);
        this.sale = true;
    }
    draw() {
    return `${this.sale}`
    }
}