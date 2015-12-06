/* Author: Byron Jay Inocencio
     Date: 12/5/2015
     Language: Javascript */



function bubbleSort(arr){
 var swapper = 1;

 while(swapper){

      swapper = 0;

     	for(var i = 0; i< a.length-1; i++){

            if(a[i] > a[i+1]){

                  var temp = a[i+1];
                  a[i+1] = a[i];
                  a[i] = temp;
                  swapper = 1;
             }
     	}
  }

  return arr;
}
