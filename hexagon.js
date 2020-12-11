class polygonal_shape
{
    constructor(x, y, r)
    {
        this.x = x
        this.y = y
        this.radius = r
        var options = {
            friction: 2,
            density: 1.2
        }
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        this.image = loadImage("polygon.png")
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    }
}
