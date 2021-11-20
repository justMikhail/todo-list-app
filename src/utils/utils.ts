export const getRandomInteger = (min = 0, max = 1): number => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * @param value anyType
 * @param probability number from 0 to 1 (example 0.25 = 25%)
 */
export const returnValueWithProbability = <ValueType>(value: ValueType, probability: number):ValueType | null => {
  const haveValue = getRandomInteger(0, 1/probability - 1) === 0;
  return haveValue ? value : null;
};
