class SlingShot{

    constructor(objA,pointB) {
        
        var options = 
        {
            bodyA:objA.body,
            pointB:pointB,
            stiffness:0.05,
            length:3

        }

        this.posA = objA.body.position;
        this.posB = pointB;

        this.connection = Constraint.create(options);
        World.add(world,this.connection)

    }

    fly(){

        this.connection.bodyA = null;

    }

    display(){
        
        if(this.connection.bodyA){
            line(this.posA.x,this.posA.y,this.posB.x,this.posB.y)
        }
    }
}