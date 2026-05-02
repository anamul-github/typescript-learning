//object destructuring
const user = {
    gender: "male",
    favColor: "black",
};

const { favColor } = user;
console.log(favColor);

//array destructuring

const friends = ["Karim", "Rahim", "Mahim"];

const [A, myBestFriend, C] = friends;

console.log(myBestFriend);