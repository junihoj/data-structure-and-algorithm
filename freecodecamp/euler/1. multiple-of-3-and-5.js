function multiplesOf3and5(number) {
    // multiples of 3
    const higherVal3 = parseInt((number - 1) / 3, 10);
    const sum3 = (higherVal3 * (higherVal3 + 1) / 2) * 3;

    // multiples of 5
    const higherVal5 = parseInt((number - 1) / 5, 10);
    const sum5 = (higherVal5 * (higherVal5 + 1) / 2) * 5;

    // common multiples of 3 & 5, we need to subtract these as they are added twice
    const higherVal15 = parseInt((number - 1) / 15, 10);
    const sum15 = (higherVal15 * (higherVal15 + 1) / 2) * 15;

    return sum3 + sum5 - sum15;
}