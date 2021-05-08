class Umbrella
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		
		this.bottomBody=Bodies.rectangle(this.x, this.y,500, 500, {isStatic:true})
		
		
		

		this.image = loadImage("Walking Frame/walking_1.png");
		World.add(world, this.bottomBody)
		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			
			

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			image(this.image,0,0,500,500);
			pop()

			
	}

}