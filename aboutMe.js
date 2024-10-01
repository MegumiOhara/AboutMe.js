const printName = () => {
    console.log("My name is Megumi Ohara");
};

const printAge = () => {
    console.log("I am 32 years old");
};

const printLocation = () => {
    console.log("I was born in Honduras and now I live in Sweden");
};

const printHobbies = () => {
    console.log("I like to read, try out food and travelling");
};

printName(() => {
    printAge(() => {
        printLocation(()=>{
            printHobbies();
        });
    });
});