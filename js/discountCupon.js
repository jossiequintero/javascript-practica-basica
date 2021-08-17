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
/*// const coupons = ["cupon_1", "cupon_2", "cupon_3", "cupon_4"];*/
const onClickBtnPriceDiscount = () => {
    const price = inputPrice.value;
    const coupon = inputCoupon.value;
    let discount;
    switch (coupon) {
        case "cupon_1":
            discount = 10;
            break;
        case "cupon_2":
            discount = 20;
            break;
        case "cupon_3":
            discount = 30;
            break;
        default:
            discount = 0;
            break;
    }
    const result = calculatePriceWithDiscount(price, discount);
    resultP.innerText = `The result is: $${result}`;
};