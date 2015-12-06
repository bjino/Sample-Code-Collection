/* Author: Byron Jay Inocencio
     Date: 12/5/2015
     Language: Javascript */


/*  function name: selectionSort
 input Parameters: arr - an array that is to be sorted
output Parameters: arr - same array but sorted in ascending order
      Description: Simple selectionSort algorithm for integer arrays.
  Time Complexity:   Worst Case - O(n^2)
                   Average Case - O(n^2)
                      Best Case - O(N^2)
 Space Complexity: O(1)                                   */

function selectionSort(arr){

    /*we need to keep track of our lowest value index at all times*/
    var lowest;

    /*used for swapping*/
    var temp;

   /*loop through the array. Each iteration finds the next lowest value*/
    for(var i=0; i<a.length-1; i++){

       /*assume our first index is our lowest*/
       var lowest = i;

       /*loop through the rest of the array*/
       for(var j= i+1; j<a.length; j++){

           /*if we find something smaller, save its index!*/
           if(a[lowest]> a[j])
              lowest = j;
        }

       /*if a change in our lowest occured, swap places of the two values*/
       if(lowest != i){
           temp = a[lowest];
           a[lowest] = a[i];
           a[i] = temp;
       }
    }

  /*return the sorted array*/
  return arr;
}
