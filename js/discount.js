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