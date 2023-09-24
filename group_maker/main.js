let random12 = [];
let random34 = [];
while(random12.length < 14){ // 14번 반복
	let rand = Math.floor(Math.random()*14+1); //랜덤 숫자 생성
	if( 0 <= random12.indexOf(rand)){	
		rand = Math.floor(Math.random()*14+1);
	}else{
		random12.push(rand);
	}
	
	
}find11 = random12.indexOf(11);

random12.splice(find11, 1);

console.log(random12);

while(random34.length < 14){ // 14번 반복
	let rand = Math.floor(Math.random()*14+15); //랜덤 숫자 생성
	if( 0 <= random34.indexOf(rand)){	
		rand = Math.floor(Math.random()*14+15); 
	}else{
		random34.push(rand);
	}
	
	
}console.log(random34);


let std14Location
let find14 = random12.indexOf(14);

function student14() {
	/**
	 * gt2	gt1
	 * 
	 * 1	0
	 * 3	2
	 * 5	4
	 * 7	6
	 * 9	8
	 * 11	10
	 * 		12
	 */
	girltable1 = [0,2,4,6,8,10,12];
	girltable2 = [1,3,5,7,9,11,13];
	let style = document.createElement("style");
	if(0 <= girltable1.indexOf(find14)){
		std14Location = girltable1[girltable1.indexOf(find14)];
	}else if(0 <= girltable2.indexOf(find14)){
		std14Location = girltable2[girltable2.indexOf(find14)];
	}
	return std14Location;
	
}
console.log(student14())

