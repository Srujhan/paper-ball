class Paper{
    constructor(x, y, width, height,options) {
        var options = {
            isStatic:false
            'restituion':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
      }
}