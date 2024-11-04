function arrayStats(array) {
    // The sum for all elements 
    var sum= 0;
    for(let i =0; i < array.length; i++)
    {
        sum +=array[i];
    }
    // The average
    average = sum/(array.length);
    // The minimum and the average
     average = sum/array.length;

     new_array = array.sort();
    console.log("Sum:",sum);
    console.log("Average:",average);
    console.log("Min:",new_array[0]);
    console.log("Max:",new_array[array.length-1]);
}

arrayStats([1,2,8,3,4,5]);