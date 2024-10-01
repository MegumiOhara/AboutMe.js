const MyName =(displayAge) =>{
    console.log("My Name is Megumi Ohara");
    setTimeout (() =>{
        const age= "I am 32 years old";
        displayAge(age);
    }, 2000);
};

const displayAge =(age) =>{
    console.log(age);
};

MyName();

