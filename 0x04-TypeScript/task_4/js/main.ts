/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Subjects } from './subjects/Cpp';
import { Subjects as JavaSubjects } from './subjects/Java';
import { Subjects as ReactSubjects } from './subjects/React';

// Create one Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10
};

// Create and export subject instances
export const cpp = new Subjects.Cpp();
export const java = new JavaSubjects.Java();
export const react = new ReactSubjects.React();

// Cpp
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
