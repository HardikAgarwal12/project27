class Roof{
    constructor(x,y,w,h)
    {
        var options =
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.y=y;
        this.x=x;
        this.w=w;
        this.h=h;
        World.add(world,this.body)
    }
    display(){
        var roofpos=this.body.position
        push()
        translate(roofpos.x,roofpos.y)
        fill(128,128,128)
        rect(0,0,this.w,this.h)
        pop()
    }
}