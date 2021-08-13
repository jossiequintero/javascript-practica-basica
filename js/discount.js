const originalPrice = 100;
const discountPercentage = 15;
const discountPrice =
    originalPrice - (discountPercentage * originalPrice) / 100;
const priceWithDiscount = originalPrice - discountPrice;

console.log({
    originalPrice,
    discountPercentage,
    discountPrice,
    priceWithDiscount,
});