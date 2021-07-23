const sumTotal = (cart) => {
  const reducer = (acumulator, currentValue) => acumulator + currentValue.price
  const sum = cart.reduce(reducer, 0)
  return sum
}

// eslint-disable-next-line import/prefer-default-export
export { sumTotal }
