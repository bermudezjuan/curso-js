(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    const addTwoNumbers: addTwoNumbers = (a, b) => {
        return a + b;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) => {
        return 10;
    }

})()