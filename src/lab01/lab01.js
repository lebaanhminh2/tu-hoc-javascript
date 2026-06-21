console.log("lab 01");
const fullname = "John Doe";
const birthYear = 1990;
const isStudent = true;
const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear, typeof currentYear);

const calculatedAge = currentYear - birthYear;

console.log(`
Tên: ${fullname}
Tuổi: ${calculatedAge}
Sinh viên: ${isStudent}
`);
