// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}



var arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]

var c = 0;
var out = {};
for (let i = 1; i < 10; i++) {
    for (let j = 0; j <= arr.length; j++) {
        if (arr[j] % i == 0) {
            if (i in out) {
                out[i] += 1
            } else {
                out[i] = 1
            }


        }






    }



}
console.log(out);