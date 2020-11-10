function linearSearch(search,term) {
    for(i=0;i<search.length;i++){
        if(search[i] == term){
            return i
        }
    }
    return -1; 
}
// console.log(linearSearch([1,2,3,4,100,5], 5))

function binarySearch(search,value) {

    let left = 0; 
    let right = search.length-1;
    let middle = Math.floor((left+right)/2)
    console.log(left,middle,right)
    while(search[middle] !== value && left<= right) {
        if(value < search[middle]){
            right = middle -1;
        } else {
            left = middle + 1; 
        }
        middle = Math.floor((left+right)/2)
        console.log(left,middle,right)   
    }
    if(search[middle] == value) {
        return middle;
    } else {
        return -1;
    } 
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,15,20,35,45,67,88,99,102,111,123,145,156,178], 1230));


function searchalgo(search,term) {
    var count = 0;
    for(i=0;i<=search.length;i++) {
            for(j=0;j<=term.length;j++) {
                if(term[j] !== search[i+j]) {
                    break;
                }
                if(j === term.length-1){
                  count++;  
                }
            }
    }
    return count;
}

// console.log(searchalgo("nikhil is nikhil great nikhilreddy", "nikhil"))

function bubbleSort(arr) {

    for(i=0;i< arr.length-1;i++) {
    
        for(j=0;j<arr.length;j++) {
    
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                console.log(arr)
            }
    
        }
    
    }
    
    return arr 
}



// console.log(bubbleSort([20,29,2,1,90,75,63,2000]))

function selectionSort(arr) {
    
    for(i=0;i<arr.length;i++) {
        let smallindex = i;
        for (j=i+1; j<arr.length;j++) {
            console.log(arr[i], arr[j])
            if(arr[j] < arr[smallindex] ){
                smallindex = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallindex];
        arr[smallindex] = temp
    }
    return arr
}

// console.log(selectionSort([2,44,38,5,47,15,36,26,27,3,46,4,19,50,48]))

function insertionSort(arr) {

    for(i=1;i<arr.length;i++) {
        var currentval = arr[i]
        for(var j=i-1;j>=0;j--) {
            (arr[j] > currentval)
        }
    }
}
// insertionSort([2,44,38,5,47,15,36,26,27,3,46,4,19,50,48])