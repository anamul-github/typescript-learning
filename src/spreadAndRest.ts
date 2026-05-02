//Spread Operator
const friends = ["Rahim", "Karim"];

const schoolFriends = ["Anamul","Alex"];

friends.push(...schoolFriends);

console.log(friends);

const user = { name: "Anamul", phone: 5071234567};
const otherInfo = { hobby: "Cricket", favColor: "Black"};

const userInfo = { ...user, ...otherInfo}

console.log(userInfo);

//Rest is basically opposite of Spread Operator
//Rest operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => 
    console.log(`Send invitation to ${friend}`)
);
};

sendInvite("pintu", "chintu", "bulbul", "chulbul", "Anamul");