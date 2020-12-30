class Pig extends Baseclass {
    constructor(x, y ) {
      super(x,y,50,50);
      this.image = loadImage("images/enemy.png");
      this.visible=255;
    }
    display(){
      if(this.body.speed<5){
              super.display();
      //console.log(this.body.speed);
      }
     else{
       World.remove(world,this.body);
       push();
       this.visible-=2;
       tint(255,this.visible);
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop();
     } 
    }

    scoring(){
      if(this.visible<0&&this.visible>-250){
        score++;
      }
    }
  };

  