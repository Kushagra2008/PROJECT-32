class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body1)
    {
        this.sling.bodyA = body1;
        //this.body1.position.x = 200;
        //this.body1.position.y = 20;
    }
    display(){
        //image(this.sling1, 200, 20);
        //image(this.sling2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48, 22, 8);
            if (pointA.x < 240)
            {
                strokeWeight(8);
                line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, pointB.x, pointB.y);
                //line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
            }
            else
            {
                strokeWeight(4);
                line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, pointB.x, pointB.y);            }
            pop()
        }
    }
    
}