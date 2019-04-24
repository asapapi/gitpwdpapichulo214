// var shoppingList = ['ramen noodles', ' poptarts', 'chips', 'salsa', 'coffee'];
// list.push('fruit loops');
// list.splice(2, 2, 'rice, beans');

// var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
// list[4] = 'fair trade coffee';
// list.push('fruit loops');
// list.splice(2,2,'rice', 'beans');

// var cart = [];
// cart.push(list.pop());
// cart.push(list.shift());

// while(list.length > 0)              //while the list is greater than 0
//     cart.push(list.pop());          //add from list to card i want you to remove items from list to cart

// cart.sort().reverse();
// console.log("My cart contains: ", cart.join(','));

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
    }
};
function coolGuys(mac){
    if (mac.computer.OS=== 'OSX') {
        return true;
    }
}
console.log(course);
console.log(course.teachers[1]);
console.log(course.students[0]);
console.log(course.students[1].computer.type);
console.log(course.preReqs);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions[0]+" or "+ course.preReqs.equipment.OSOptions[1]);
console.log (course.students.filter(coolGuys));

for(var numofOSX =0; numofOSX<course.students.length;numofOSX++){
    if(course.students[numofOSX].computer.OS === "OSX"){
        console.log(course.students[numofOSX].name);
    }
}
