// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }
//     addcourse(course) {
//         this.courses.push(course)
//     }
// }

// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }
//     recieveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }
//     addcourse(course) {
//         if (this.courses.indexOf(course) == -1)
//             super.addcourse(course)
//     }
// }

// class Teacher extends Person {
//     constructor(name, startYear, Salary) {
//         super(name, startYear)
//         this.Salary = Salary
//         this.courses = {}
//     }
//     giveGrade(student, courseName, grade) {
//         student.recieveGrade(courseName, grade)
//     }
//     addCourse(course) {
//         if (this.courses[course]) {
//             return this.courses[course]++
//         }
//         this.courses[course] = 1
//     }
// }
// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }

// class Principal extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.teachers = []
//         this.students = []
//     }
//     hireTeacher(name, startYear, Salary) {
//         this.teachers.push(new Teacher(name, startYear, Salary))
//         console.log(`${this.name} just hired ${name.name}`)
//     }

//     recruitStudent(name, startYear) {
//         this.students.push(new Student(name, startYear))
//     }
//     expelStudent(name) {
//         this.students.splice(this.students.indexOf(name)-1, 1)
//     }
//     transferStudent(studentName, principal) {
//         let student = studentName
//         this.students.splice(this.students.indexOf(student)-1, 1)
//         principal.students.push(student)
//     }
// }

// const p1 = new Principal("Martin", 1991)
// const p2 = new Principal("Martha", 1990)

// const t1 = new Teacher("Cassandra", 2002, 40000)
// const t2 = new Teacher("Kevin", 2006, 30000)

// const s1 = new Student("Ronda", 2017)
// const s2 = new Student("Byron", 2016)


// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }
// localStorage.userStorage = JSON.stringify(userStorage)
// let data = JSON.parse(localStorage.userStorage || " ")


let inputText = function () {

}