const calculatePriceWithDiscount = (price, discountP) => {
    const discountPrice = (discountP * price) / 100;
    const priceWithDiscount = price - discountPrice;
    console.log({
        price,
        discountP,
        discountPrice,
        priceWithDiscount,
    });
    return priceWithDiscount;
};

const calculatePriceDiscount = () => {
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const result = calculatePriceWithDiscount(price, discount);
    resultPrice.textContent = `The result is: ${result}`;
};