class Person{//superclass veya baseclass denebilir.
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("Name: "+this.name+" Age: "+this.age);
    }
}

class Employee extends Person{//C# javadada var extends Person diyorum Employeeye personu kalıtmış oluyoruz. Buradaki türüyen clasımız DerivedcLASS, Subclass, childClass olarak geçebilir
     constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);//super anahtar keliemsi person ctorunu kullanmak istediğimizi söyleyecek. super persona karşılık gelir
        this.salary=salary;
    }
    showInfos(){
        console.log("Name: "+this.name+" Age: "+this.age+" Salary: "+this.salary);
    }
    raiseSalary(amount){
        this.salary +=amount;
    }
}

const emp=new Employee("Mustafa",25,4000);
emp.raiseSalary(500);
console.log(emp);
emp.showInfos();//miras aldığım iptal oldu kendiminkini yazdım onun üstüne yani override
