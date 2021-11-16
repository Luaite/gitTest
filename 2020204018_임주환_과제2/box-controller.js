import { 
   Box
} from "./box.js";

export class BoxController {
    constructor(imgName) {
        this.img = new Image();
        this.img.onload = () => {
            this.loaded();
        };
      

       this.img.src= imgName;
    

        this.items = [];

        this.cur = 0;
        this.isLoaded = false;
          
       
    }

 

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    loaded() {
        this.isLoaded = true;
        this.addBox();
    }

    addBox() {
        this.items.push(
            new Box(this.img, this.stageWidth),
        );
       
    }

    draw(ctx, t, dots, reply) {
        if (this.isLoaded) {
            this.cur += 1;
            if (this.cur > reply) {
                this.cur = 0;
                this.addBox();
            }

            for (let i = this.items.length - 1; i >= 0; i--) {
                const item = this.items[i];
                if (item.x < -item.width) {
                    this.items.splice(i, 1);
                } else {
                    item.draw(ctx, t, dots);
                }
            }
        }
    }

}