// task_2/js/main.ts

// 1. Interfaces for Director and Teacher behaviors
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

// 2. Director implementation
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// 3. Teacher implementation
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 4. Factory function to create an employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// 5. Type predicate to check for Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// 6. Executes the correct work method based on the employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// 7. String literal type for subjects and teachClass function
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// -- Example usages (optional smoke tests) --
console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks
console.log(teachClass('Math'));                  // Teaching Math
console.log(teachClass('History'));               // Teaching History