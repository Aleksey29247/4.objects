function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (marks) {

  if (this.marks === undefined) {
    this.marks = [];
    this.marks[0] = marks;
  } else {

    this.marks.push(marks);
    // добавить вторую и последующие оценки в массив
  }
}
Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  for (i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}
Student.prototype.getAverage = function (average) {
  let a = 0;
  for (i = 0; i < this.marks.length; i++) {
    a = a + this.marks[i];
  }
  return a / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

// ваш код для остальных методов

/*let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMarks(2);
student1.addMarks(2);
student1.addMarks(2);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.addMarks(2);
student2.addMarks(2);
student2.addMarks(2);

console.log(student2.getAverage());
student2.exclude("lol");
console.log(student2);
let student3 = new Student("иванов23", "p", 25);
student3.addMarks(3);
student3.addMarks(4);
student3.addMarks(5);

console.log(student3.getAverage());
student3.exclude("lol");
console.log(student3);

let student4 = new Student("иванов2", "p", 25);
student4.addMarks(2);
student4.addMarks(3);
student4.addMarks(4);
console.log(student4.getAverage());
//Student2.exclude("lol");
console.log(student4);*/