
export class Cursor {
    constructor(ctx) {
       this.img = new Image();
       this.img.src = 'sunshine.png';
       
       document.addEventListener('pointermove', this.checkCursor.bind(this), false);
        
   }


   resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    checkCursor(e) {
        var x = e.clientX;
        var y = e.clientY;

        this.a = x - this.stageWidth/2 ;
        this.b = y;
        
        this.angle = Math.atan2(this.a, this.b);
    }



    draw(ctx) {
        ctx.save();
        ctx.translate(this.stageWidth/2, 0);
        
        ctx.rotate(-this.angle);
 
 
        ctx.drawImage(
            this.img, 

            -this.stageWidth / 4,
            -this.stageWidth * 0.15,

            this.stageWidth / 2,
            this.stageWidth * 0.75

        );
        ctx.restore();
    }



   

}
