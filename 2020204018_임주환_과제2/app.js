import {
    Hill
} from './hill.js';

import {
    BoxController
} from './box-controller.js'
import { Cursor } from './cursor.js';


class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
  

        this.hills = [
            new Hill('#79ECFD', 4, 4),
            new Hill('#6FE6F9', 5, 4),
            new Hill('#4FE1F8', 6, 4)
        ];

        this.box1 = new BoxController('box1.png');
        this.box2 = new BoxController('box2.png');
        
        this.cs = new Cursor(this.ctx);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
        
        
    }



    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        for(let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.box1.resize(this.stageWidth, this.stageHeight);
        this.box2.resize(this.stageWidth, this.stageHeight);

        this.cs.resize(this.stageWidth, this.stageHeight) 
        
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        let dots;

        this.hills[0].draw(this.ctx); 
        dots = this.hills[1].draw(this.ctx); 
        this.box1.draw(this.ctx, t, dots, 400); 
      

        dots = this.hills[2].draw(this.ctx);  
        this.box2.draw(this.ctx, t, dots, 500); 
        
       this.cs.draw(this.ctx);
    }



}


window.onload = () => {
    new App();
};