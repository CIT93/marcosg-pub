export default class Decision {
  static calculateDiscount(userData) {
    if (userData.age >= 60) return userData.originalPrice * 0.15;
    if (userData.isMember) return userData.originalPrice * 0.10;
    return 0;
  }

  static generateMessage(userData, discount) {
    const finalPrice = userData.originalPrice - discount;
    return discount > 0
      ? `User qualifies for a discount of $${discount.toFixed(2)}.<br>Final price after discount: $${finalPrice.toFixed(2)}`
      : `User does not qualify for a discount.<br>Final price after discount: $${finalPrice.toFixed(2)}`;
  }
}
