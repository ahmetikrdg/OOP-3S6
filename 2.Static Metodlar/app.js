//Statik Metodlar
/*
class Matematik{
    cube(x){//cube metodum olsun
        console.log(x*x*x)
    }
}

const math=new Matematik();//bu classtan bir obje oluşturmam gerekir. Ama staticle yazarsam obje oluşturmada kullanabilirim.
math.cube(5);
console.log(math);*/

class Matematik{
    sqrt(x){
        console.log(x*x);
    }
    static cube(x){//cube static yaptım
        console.log(x*x*x)
    }
}

Matematik.cube(5);

const math=new Matematik();
// math.cube(5);//bunu kullanamam static metodlarımız objenin prototipine yazılmaz obje üzerinden erişilmez.
math.sqrt(10); //ama bu kullanılır çünkü clasın içinde ve static değil yain protoda

//biz aslında bu zamana kadar birçok yerde static kullandık örn: Object.Create 
