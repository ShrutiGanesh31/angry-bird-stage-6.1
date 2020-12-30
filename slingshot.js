class Slingshot{
    constructor(bodyA,pointB){
        var Option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.015,
            length:1

        }
        this.sling1= loadImage("images/sling1.png");
        this.sling2= loadImage("images/sling2.png");
        this.sling3= loadImage("images/sling3.png");
        this.pointB= pointB;
   this.sling= Constraint.create(Option);
    World.add(world,this.sling);
    
    }
    fly(){
        this.sling.bodyA=null;

    }
    attach(body){
      this.sling.bodyA=body;  
    }
    display() {
        image(this.sling1,200,125);
        image(this.sling2,170,125);
        if(this.sling.bodyA){
    

        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        
        push();
        if(pointA.x<220){
        strokeWeight(7);
        stroke(48,22,8);
    line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);  
    line(pointA.x-25,pointA.y,pointB.x+30,pointB.y);
    image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            strokeWeight(4);
            stroke(48,22,8);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);  
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);   
        }
        pop();
    }

    }
}