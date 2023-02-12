const nums = [20, 34, 32, 46, 23, 20, 11, 40];

function bubbleSort(collection) {
  let size = collection.length;
  let i, j;
  let temp;
  console.log("unsorted:", collection);

  for (i = 0; i < size - 1; i++) {
    for (j = 0; j < size - i; j++) {
      if (collection[j] > collection[j + 1]) {
        temp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = temp;
      }
    }
  }

  console.log("sorted", collection);
}

bubbleSort(nums);

//! center 32
//? right  32
//* temp   34
//  timeComplexity o(n^2)
