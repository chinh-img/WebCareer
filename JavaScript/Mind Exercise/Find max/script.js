function thuat_toan() {
    let numbers = [4, 6, 7, 1, 10, 12, 5];
    let maxValue = 0;

    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        let currentValue = numbers[i]
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    console.log(maxValue)
} // Output = 12

function JS1(params) {
    let numbers = [1, 4, 3, 10, 2, 6, 2];
    let max = Math.max(...numbers);
    console.log(max)
} // Output = 10

function JS2() {
    let numbers = [1, 4, 3, 10, 2, 6, 2];
    let max = numbers.reduce((accumulator, value) => {
        return Math.max(accumulator, value);
    }, numbers[0]);
    
    console.log(max)
}