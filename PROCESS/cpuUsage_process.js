const startUsage = process.cpuUsage();
console.log(startUsage)
// { user: 38579, system: 6986 }


var b = 5000
function a(){
	if(b!= 0){
		b -= 1
		a()
	}
}
process.chdir('../');

const endUsage = process.cpuUsage();
console.log(endUsage)
console.log(process.cpuUsage(startUsage));
// { user: 514883, system: 11226 }