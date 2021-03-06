const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}
console.log(student);
const newStudent = Object.create(student);
console.log(newStudent);

const newStudent1 = Object.assign({},student);
newStudent.skills.frondEnd[newStudent.skills.frontEnd,{skill:'Bootstrap',level:8},
];
console.log(newStudent1);