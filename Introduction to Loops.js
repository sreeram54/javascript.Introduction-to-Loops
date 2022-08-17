for(var i = 0; i <= 5; i++){
    console.log(i)
  }
  
  // 0 1 2 3 4 5

  var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
var newArr = []
for(var i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

var i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5



var numbers = [1, 2, 3, 4, 5]

for (var num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (var num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
var sum = 0
for (var num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

var webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (var tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (var tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}
