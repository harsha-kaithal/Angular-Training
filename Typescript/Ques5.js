var Cone = /** @class */ (function () {
    function Cone(l, r) {
        this.shapename = "Cone";
        this.pi = 3.14;
        this.area = this.pi * r * (l + r);
    }
    Cone.prototype.printname = function () {
        console.log(this.shapename);
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(r) {
        this.shapename = "Sphere";
        this.pi = 3.14;
        this.area = 4 * this.pi * r * r;
    }
    Sphere.prototype.printname = function () {
        console.log(this.shapename);
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.shapename = "Rectangle";
        this.area = length * breadth;
    }
    Rectangle.prototype.printname = function () {
        console.log(this.shapename);
    };
    return Rectangle;
}());
var areaOfCone = new Cone(5, 3);
areaOfCone.printname();
console.log("Area of Cone: " + areaOfCone.area);
var areaOfSphere = new Sphere(7);
areaOfSphere.printname();
console.log("Area of Sphere: " + areaOfSphere.area);
var areaOfRectangle = new Rectangle(4, 7);
areaOfRectangle.printname();
console.log("Area of Rectangle: " + areaOfRectangle.area);
