// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const marriageEligibility = (age: number) => {
    const result = age >=21 ? 'You are eligible': 'You are not Eligible';

    console.log(result);
};

marriageEligibility(20);



const userTheme = 'Green Theme';

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";
const resultWithNullish = isAuthenticated ?? '"You are guest"';

console.log({resultWithTernary}, {resultWithNullish});


//optional chaining

const user: {
    address: {
        city: string;
        state: string;
        postalCode?: string;
    };
} = {
    address: {
        city: "Edina",
        state: "MN",
    },
};

const postalCode = user?.address.postalCode;
console.log(postalCode);
