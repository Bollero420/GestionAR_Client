export const getArrayNumber = (limit: number): number[] => {
  const array = [];
  for (let i = 1; i <= limit; i++) {
    array.push(i);
  }
  return array;
};
