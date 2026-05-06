//map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = 
arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

//mapped types

type AreaOfNum = {
    height: number;
    width: number;
};

type height = AreaOfNum["height"];

/* type AreaOfString ={
    height: string;
    width: string;
} */

type Area<T> = {
    [key in keyof T]: T[key];

    //key >> height >> string
    //key >> width >> number
};

/*
keyof T >> "height" | width

T >>> { height: string; width: number}

T['height']:string
T['width']:number
*/

const area1: Area<{ height: string; width: number }> = {
    height: '50',
    width: 40,
};