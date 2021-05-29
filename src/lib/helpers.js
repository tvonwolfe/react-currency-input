export const getFormatter = (locale, currencyCode, allowFractionalValue) =>
  Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: allowFractionalValue ? 2 : 0,
    maximumFractionDigits: 2
  });

export const handleFocus = (str) => (event) => {
  event.preventDefault();
  if (event.target.value === '') {
    event.target.value = str;
  }
};

export const handleBlur = (str) => (event) => {
  event.preventDefault();
  if (event.target.value === str) {
    event.target.value = '';
  }
};

export const handleInput = (allowFractionalValue, formatter, onInputProp) => (
  event
) => {
  const newAmount = Number(event.target.value.replace(/[^0-9]/g, ''));
  event.target.value = formatter.format(
    allowFractionalValue ? newAmount / 100 : newAmount
  );

  onInputProp &&
    onInputProp(allowFractionalValue ? newAmount : newAmount * 100);
};
