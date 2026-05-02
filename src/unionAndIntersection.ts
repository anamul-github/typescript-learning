// union |
type userRole = "admin" | "user"

const getDashboard = (role: userRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User Dashboard";
    } else {
        return "Guest Dashboard";
    }
};

getDashboard('guest');

//Intersection
type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type employeeManager = Employee & Manager

const ChowdhuryShaheb: employeeManager = {
    id:'123',
    name: 'Chowdhury Shaheb',
    phoneNo: '50777777',
    designation: 'Manager',
    teamSize: 20
};

