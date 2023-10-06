// davaleba1

const arr = [{name: 'Temo', age: 25},{name: 'Lasha',age:21},{name: 'Ana',age:28}]

console.table(
    arr.find(arr => arr.age <22)
)


// davaleba 2


const user = [{name: 'Temo', age: 25},{name: 'Lasha',age:21},{name: 'Ana',age:28}]

const newuser = user;

console.log(user)


// davaleba 3 

let a, b;

while (true) {
  a = Math.floor(Math.random() * 6) + 1;
  b = Math.floor(Math.random() * 6) + 1;

  console.log(`a:${a}, b:${b}`)
  if(a === 3 || b === 3){
    console.log('Winner')
    break;
  }
}


