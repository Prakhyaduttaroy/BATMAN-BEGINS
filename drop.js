class Drop
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;

        this.body = Bodies.circle(this.x, this.y, 5);
        World.add(world, this.body)
    }
Update(){

  
if(this.body.position.y > height){

Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
}
}
display(){
    translate(this.body.position.x, this.body.position.y);
    fill("blue")
    ellipseMode(RADIUS)

    ellipse(0,0,5,5)
    
}
}


