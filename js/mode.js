const list = [1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 0, 0, 0, 0];

const listCount = {};

list.map((element) => {
    if (listCount[element]) {
        listCount[element] += 1;
    } else {
        listCount[element] = 1;
    }
});

const listCountArray = Object.entries(listCount);
listCountArray.sort((a, b) => a[1] - b[1]);
console.log(listCountArray.pop());
console.log(listCount);