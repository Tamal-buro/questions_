export function extendArrayPrototype() {

    /*  map, filter, reduce
        Polyfill for map()
        Array.map((curr, i, arr) => { }) 
    */

    Array.prototype.myNewMap1 = function (callBack) {
        let temp = []
        for (let i = 0; i < this.length; i++) {
            temp.push(callBack(this[i], i, this))
        }
        return temp
    }

    //Example 
    // const nums = [1, 2, 3, 4, 5];
    // const multiplyBy = nums.myNewMap1((num, i, arr) => {
    //     // console.log(num , i , 'This is the arr', arr)
    //     return num * 3;
    // })
    // console.log(multiplyBy)

    /* 
       Polyfill for filter()
     */

    Array.prototype.myNewFilter1 = function (callBack) {
        let temp = [];
        for (let i = 0; i < this.length; i++) {
            if (callBack(this[i], i, this))
                temp.push(this[i])
        }
        return temp
    }

    // Example 
    const nums1 = [1, 2, 3, 4]
    const moreThanTwo = nums1.myNewFilter1((num) => {
        return num > 2
    })

    // console.log(moreThanTwo)

    /* 
       polyfill for reduce
       arr.reduce((acc, curr, i, arr)=> {}, initialValue)
     */

    Array.prototype.myNewReduce1 = function (callBack, initialValue) {
        let accumulator = initialValue;

        for (let i = 0; i < this.length; i++) {
            accumulator = accumulator ? callBack(accumulator, this[i], i, this) : this[i]
        }
        return accumulator
    }

    //Example
    const nums2 = [1, 2, 3, 4]
    const sum1 = nums2.myNewReduce1((acc, curr, i, arr) => {
        // console.log("acc ",acc, i, curr, arr)
        return acc + curr
    }, 0);

    // console.log(sum1)

}

// extendArrayPrototype()


