//Write a Program to show Sum of three Integer adds to ZERO

//Declare an array
let numbers=[1,2,3,4,5,6,7,-1,-2,-3,-4,-9];

for(let i=0;i<numbers.length;i++){

    for(let j=i+1;j<numbers.length-1;j++){

        for(let k=j+1;k<numbers.length-2;k++){

            if(numbers[i]+numbers[k]+numbers[j]==0){
                
                console.log(numbers[i]+","+numbers[j]+","+numbers[k]);
            }
        }
    }
}
