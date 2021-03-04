class Bob{
    constructor(x,y,r)
    {
        var options =
        {
            isStatic:true,restitution:1,density:0.8,friction:0
        }
        this.body=Bodies.circle(x,y,r,options)
        this.y=y;
        this.x=x;
        this.r=r;
        World.add(world,this.body)
    }
    display(){
        var bobpos=this.body.position
        push()
        translate(bobpos.x,bobpos.y)
        fill(255,0,255)
        circle(0,0,this.r)
        pop()
    }
}