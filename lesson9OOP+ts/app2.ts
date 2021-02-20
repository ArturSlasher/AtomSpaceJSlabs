class Person{
    sayHello() {}
}

class Project{}

class Cat{
    sayMeow(){}
}

class CatReserve{
    destroy(){}
}

interface IClub<T, Y> {

    jointo(t: T): void;

    leave(t: T): void;

    createProject(t: T[]): Y;

    defeatProject(y: Y): void;
}

class Club<T, Y> implements IClub<T, Y>{

    jointo(t: T): void {}

    leave(t: T): void {}

    createProject(t: T[]): Y { return 0 as any}

    defeatProject(y: Y): void {}
}

const club = new Club<Person, Project>();
club.jointo(new Person());
//club.jointo(new Cat()); //that should be like that

const catClub = new Club<Cat, CatReserve>();
catClub.jointo(new Cat);