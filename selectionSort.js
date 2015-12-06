
function selectionSort(arr){
 var lowest;
 var temp;

 for(var i=0; i<a.length-1; i++){

    var lowest = i;

    for(var j= i+1; j<a.length; j++){

       if(a[lowest]> a[j])
           lowest = j;
    }

    if(lowest != i){
       temp = a[lowest];
       a[lowest] = a[i];
       a[i] = temp;
    }
 }
}
