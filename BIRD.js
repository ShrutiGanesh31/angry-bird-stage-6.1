class Abird extends Baseclass{
    constructor(x, y, width, height) {
     super(x,y,width,height);
      this.image = loadImage("images/bird.png");
      this.smokeImage=loadImage("images/smoke.png");
      this.path=[];
      this.visible=255;
    }
    display(){
      var pos =this.body.position;
     // pos.x=mouseX;
      //pos.y=mouseY;

      super.display();
      if(this.body.velocity.x>10 && pos.x>200){
      var position=[pos.x,pos.y];
      this.path.push(position);
      }
      for(var i=0; i<this.path.length;i++){
        push();
        this.visible-=0.1;
        tint(255,this.visible);
        image(this.smokeImage,this.path[i][0],this.path[i][1]);
        pop();
      }
    }
  }