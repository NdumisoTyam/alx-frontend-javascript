// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

export function printTeacher({ firstName, lastName }: Teacher): string {
  return `${firstName}. ${lastName}`;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Walker',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Martin',
  fullTimeEmployee: false,
  location: 'San Francisco',
  contract: true,
};

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

const Student: StudentClassConstructor = StudentClass;
const student = new Student('Mary', 'Poppins');

console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));
console.log(student.workOnHomework());
console.log(student.displayName());
