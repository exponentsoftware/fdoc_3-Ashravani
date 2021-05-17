var students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject=(arr)=>
{
    arr = new Map([
     [[0][0]],
     [[0][1]],
     [[0][2]]
    ]);
    const obj = Object.fromEntries(arr);
     console.log(obj);
};
     convertArrayToObject(students);
