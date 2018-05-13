function average(arr) {
    var total = 0;
    // for(var i=0;i<arr.length;i++){
    //     total+=arr[i];
    // }
    
    arr.forEach(function(x) {
        total+=x;
    })
    return Math.round(total / arr.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("average score is " + average(scores));

var scores = [40,65,77,82,80,54,73,63,95,49];
console.log("average score is " + average(scores));