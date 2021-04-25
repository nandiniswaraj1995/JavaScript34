//Write a Program to show Sum of three Integer adds to ZERO
let max=0;
let min=9999;
var  arrRandomNum = new Array();

for (let  i=0; i<10; i++ )
{
         arrRandomNum[i]= Math.floor(Math.random() * 1000) % 900 + 100;
}

for(let  i =0 ;i <10; i++)
{
if ( max <= arrRandomNum[i] )
{
     	 max=arrRandomNum[i]
}
if (min >= arrRandomNum[i])
{
      	min=arrRandomNum[i];
}
}

max2=10;
min2=99999;
for (let i=0; i<10; i++ )
{
if ((max2 <= arrRandomNum[i]) && ( arrRandomNum[i] != max ))
{
       	   max2=arrRandomNum[i];
}
if (( min2 >= arrRandomNum[i]) && ( arrRandomNum[i] != min ))
{
           min2 = arrRandomNum[i];
}
}
console.log(arrRandomNum);
console.log( "Second max = "+max2 +" and Second min = "+min2);
