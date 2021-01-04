class Chain 
{
    constructor (bodyA,bodyB)
    {
        //create options
        var options = 
        {
            bodyA:bodyA, 
            bodyB:bodyB,
            //add the flexibility  and the length
            stiffness:1,
            length:100
        }
        
        this.chain= Matter.Constraint.create(options);
        //add to world
        World.add(world,this.chain)
    }
    display()
        {
            var pointA=this.chain.bodyA.position;
            var pointB=this.chain.bodyB.position;
            strokeWeight(4);
            //add the line
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    
}