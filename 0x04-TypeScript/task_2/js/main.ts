// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Factory function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on role
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type
type Subjects = 'Math' | 'History';

// Function using Subjects type
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example output
console.log(createEmployee(200));      // Teacher instance
console.log(createEmployee(1000));     // Director instance
console.log(createEmployee('$500'));   // Director instance

console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

console.log(teachClass('Math'));       // Teaching Math
console.log(teachClass('History'));    // Teaching History
