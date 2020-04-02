class Particle {
    constructor(x,y,r) {
      var options = {
          'friction':50,
          'restitution': 10
      }
      this.body = Bodies.circles(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("green");
    ellipse(pos.x, pos.y, this.r);
    }
  }