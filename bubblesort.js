/* Author: Byron Jay Inocencio
     Date: 12/5/2015
     Language: Javascript */


/*  function name: bubbleSort
 input Parameters: arr - an array that is to be sorted
output Parameters: arr - same array but sorted in ascending order
      Description: Simple bubbleSort algorithm for integer arrays.
  Time Complexity:   Worst Case - O(n^2)
                   Average Case - O(n^2)
                      Best Case - O(N)
 Space Complexity: O(1)                                   */

function bubbleSort(arr){
 var swapper = 1;

/*boolean flag breaks out of loop just in case we finish sorting early*/
 while(swapper){

      /*reset the flag to 0*/
      swapper = 0;

      /*loop through the array UP to a.length-1 to prevent out of bounds access*/
     	for(var i = 0; i< a.length-1; i++){

            /*swaps higher values to the end of our array*/
            if(a[i] > a[i+1]){

                  /*swap values using a temporary variable*/
                  var temp = a[i+1];
                  a[i+1] = a[i];
                  a[i] = temp;

                  /*reset the swapper flag to invoke another scan*/
                  swapper = 1;
             }
     	}
  }

  /*return the sorted array*/
  return arr;
}
