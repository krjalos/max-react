let stringArray : string[];

stringArray = ["string", "strang"];

type Person = {
    name: string;
    married: boolean;
}

let person : Person;

person = {
    name: "Alex",
    married: true
}

let people : Person[];

people = [
    {
        name: "test",
        married: false
    },
    {
        name: "test",
        married: false
    }];


const add = (a : number, b : number) => {

}

const addAtStart = <T>(array: T[], value: T) => {
    const newArray = [value, ...array];
    return newArray;
}

const numbers = [1,2,3,4];

const newNumbers = addAtStart(numbers, 0)