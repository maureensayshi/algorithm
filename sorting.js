let arr = [10, 11, 100, 38, 69, 7];

//bubble sort
//best case
//average
//worse case
//Time Complexity : O(n^2);

function bubbleSort(arr) {
    //shorten length of array by one index after one inner for loop is done.
    //by this process, can make sure new array is in ascending order.  
    for (let j = arr.length; j > 0; j--) {
        //go through array from index 0
        //swap two elements if the first element is larger than second element.
        //after one loop, can make sure the maxium number will be the last index of array.
        for (let i = 0; i < j; i++) {
            let tmp;
            if (arr[i] > arr[i + 1]) {
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        };
    }
    return arr;
}

bubbleSort(arr);
// output: [7, 10, 11, 38, 69, 100]

console.log(bubbleSort(arr));

//merge sort
//Time Complexity : O(n log n);

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle, arr.length);
    console.log("middle: ", middle);
    console.log("leftArr: ", leftArr);
    console.log("rightArr: ", rightArr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(a, b) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            console.log("1-1", result);
            result.push(a[i]);
            i++;
        } else {
            console.log("1-2", result);
            result.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        console.log("2", result);
        result.push(a[i]);
        i++;
    }
    while (j < b.length) {
        console.log("3", result);
        result.push(b[j]);
        j++
    }

    return result;
}

console.log(mergeSort(arr));


