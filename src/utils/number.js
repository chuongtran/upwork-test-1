import { startsWith, isNaN } from 'lodash';

// eslint-disable-next-line no-unused-vars
export const toCurrency = (val, currency = '$') => (val / 100).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const toUSPhoneNumber = (input) => {
  if (!input) return '';
  if (startsWith(input, '+')) return input;
  let output = '+1 (';
  input.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, (
    _match,
    g1,
    g2,
    g3,
  ) => {
    if (g1.length) {
      output += g1;
      if (g1.length === 3) {
        output += ')';
        if (g2.length) {
          output += ` ${g2}`;
          if (g2.length === 3) {
            output += ' - ';
            if (g3.length) {
              output += g3;
            }
          }
        }
      }
    }
  });
  return output;
};

export const toSavingUSPhoneNumber = (input) => {
  if (startsWith(input, '+')) return input;
  return `+1${input}`;
};

export const toBankAccountNumber = (input) => {
  if (!input) return null;

  const newString = input.slice(input.length - 4, input.length);
  return `•••• ${newString}`;
};

export const calculateDiscountAmount = ({ amount, reward, offer }) => {
  let rewardDiscount = 0;
  let offerDiscount = 0;
  if (reward) {
    const { maxPurchasePercent, maxPurchaseAmount } = reward;
    rewardDiscount = Math.min(maxPurchaseAmount, maxPurchasePercent * amount * 0.01);
  }
  if (offer) {
    const { offPercent, offAmount } = offer;
    offerDiscount = offAmount + offPercent * amount * 0.01;
  }
  return rewardDiscount + offerDiscount;
};

export const calculateAmountTotal = ({
  amount, fee = 0, tax = 0, tip = 0, discountAmount = 0,
}) => amount + fee + (amount * tax * 0.01 + tip) - discountAmount;

// export const calculatePaymentAmount = (payment) => {
//   const { amount, fee, tax, tip }  = payment;
//   const rewardAmount = calculateDiscountAmount();
//   return {
//     fee, tax, tip, amount: calculateAmountTotal({ amount, fee, tax, tip })
//   };
// };

export const demaskAmount = (amount) => {
  if (!amount) return 0;
  const amountNumber = amount.replace('$', '').replace(',', '');
  if (isNaN(amountNumber)) return 0;
  return Number(amountNumber);
};
