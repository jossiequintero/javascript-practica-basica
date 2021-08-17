// Solución #3: arrays y condicionales mucho más inteligentes
const coupons = [{
        name: "cupon_1",
        discount: 10,
    },
    {
        name: "cupon_2",
        discount: 20,
    },
    {
        name: "cupon_3",
        discount: 30,
    },
];
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
    const couponValue = inputCoupon.value;
    let discount;
    const validCoupon = coupons.find((coupon) => coupon.name === couponValue);
    if (!validCoupon) {
        alert(`The coupon ${couponValue} is invalid`);
        console.log(validCoupon);
    } else {
        discount = validCoupon.discount;
        const result = calculatePriceWithDiscount(price, discount);
        resultP.innerText = `The result is: $${result}`;
    }
};