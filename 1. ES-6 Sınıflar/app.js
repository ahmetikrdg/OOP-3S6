/*
function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}

Employee.prototype.showInfos=function(){
    console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
}

const emp= new Employee("Mustafa",25,4000);
console.log(emp);
bunları daha öncede yapmıştık zaten şimdide ecmascript6 ile nasıl yazarız bakalım
*/

class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showInfos(){
        console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
    }
}

const emp=new Employee("Musatfa",25,4000);
 console.log(emp);
emp.showInfos();