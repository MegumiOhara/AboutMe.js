const printName = (displayName) => {
    setTimeout(() =>{
        console.log("My name is Megumi Ohara");
        displayName();
    }, 2000);
};

const printAge = (displayAge) => {
    setTimeout(() => {
       console.log("I am 32 years old"); 
       displayAge();
    }, 2000);
};

const printLocation = (displayLocation) => {
    setTimeout(() => {
        console.log("I was born in Honduras and now I live in Sweden");
        displayLocation();
    }, 2000);
    
};

const printHobbies = () => {
    setTimeout(() =>{
       console.log("I like to read, try out food and travelling");
    },2000)
    
};

printName(() => {
    printAge(() => {
        printLocation(()=>{
            printHobbies();
        });
    });
});