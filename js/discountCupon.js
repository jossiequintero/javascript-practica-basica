//Solución #2: legibilidad, error first y muerte al switch
const coupons = ["cupon_1", "cupon_2", "cupon_3", "cupon_4"];
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
const onClickBtnPriceDiscount = () => {
    const price = inputPrice.value;
    const coupon = inputCoupon.value;
    let discount;
    if (!coupons.includes(coupon)) {
        alert(`The coupon ${coupon} is invalid!!`);
    } else if (coupon === "cupon_1") {
        discount = 10;
    } else if (coupon === "cupon_2") {
        discount = 20;
    } else if (coupon === "cupon_3") {
        discount = 30;
    }
    const result = calculatePriceWithDiscount(price, discount);
    resultP.innerText = `The result is: $${result}`;
};