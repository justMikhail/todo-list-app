export const getRandomInteger = (min = 0, max = 1): number => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getDescriptionWithProbability = (descriptionText: string):string => {
  const haveDescription = getRandomInteger(0, 3) === 0;
  return haveDescription ? descriptionText : '';
};
