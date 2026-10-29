class Car{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;             // for moving left/right

        this.controls=new Controls();

    }


    updatePosition(){
        if (this.controls.forward){
            this.speed+=this.acceleration;
        }
        if (this.controls.reverse){
            this.speed-=this.acceleration;
        }

        if (this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if (this.speed<-this.maxSpeed/2){       //slower on reverse
            this.speed=-this.maxSpeed/2;        //minus speed represents going backwards
        }

        if (this.speed>0){
            this.speed-=this.friction;
        }
        if (this.speed<0){
            this.speed+=this.friction;
        }

        if(Math.abs(this.speed)<this.friction){     //if speed is not exectly 0 it is going to bounce around 0 and will move constantly
            this.speed=0;
        }


        // if(this.controls.left && (this.controls.forward || this.controls.reverse )){
        //     this.x-=2;
        // }
        // if(this.controls.right && (this.controls.forward || this.controls.reverse )){ 
        //     this.x+=2;
        // }

        if (this.controls.left){
            this.angle+=0.03;
        }
        if(this.controls.right){
            this.angle-=0.03;
        }

        this.x-=Math.sin(this.angle)*this.speed;        //moving in direction
        this.y-=Math.cos(this.angle)*this.speed;


    }


    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);
        
        ctx.beginPath();
        ctx.rect(
            -this.w/2,          //already translated
            -this.h/2,
            this.w,
            this.h
        );
        ctx.fill();
        ctx.restore();          //less chaos
    }
}