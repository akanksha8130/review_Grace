class Ball{
    constructor(x,y,r){
this.body=Bodies.circle(x,y,r)
this.radius=r
World.add(world,this.body)


    }
    display(){

        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)

    }
}