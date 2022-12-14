interface shape{
    shapename:string;
    printname();
}

class Cone implements shape{  
    shapename= "Cone";
    printname(){
        console.log(this.shapename);
    }
    r:number;   //radius
    l:number;   //slant height
    area:number;
    pi:number=3.14;
    constructor(l:number,r:number){
    this.area=this.pi*r*(l+r);
    }
}

class Sphere implements shape{
    shapename= "Sphere";
    printname(){
        console.log(this.shapename);
    }
    r:number;   //radius
    area:number;
    pi:number=3.14;
    constructor(r:number){
    this.area=4*this.pi*r*r;
    }
}

class Rectangle implements shape{
    shapename= "Rectangle";
    printname(){
        console.log(this.shapename);
    }
    length:number;
    breadth:number;
    area: number;
    constructor(length:number,breadth:number){
        this.area=length*breadth;
    }
}

let areaOfCone=new Cone(5,3);
areaOfCone.printname();
console.log("Area of Cone: "+areaOfCone.area);

let areaOfSphere= new Sphere(7);
areaOfSphere.printname();
console.log("Area of Sphere: "+areaOfSphere.area);

let areaOfRectangle = new Rectangle(4,7);
areaOfRectangle.printname();
console.log("Area of Rectangle: "+areaOfRectangle.area);
