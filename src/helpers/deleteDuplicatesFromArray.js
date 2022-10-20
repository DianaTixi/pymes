export const deleteDuplicates = (arr, verify) => {
  const arrayMap = arr.map((element) => {
    return [element[`${verify}`], element];
  });

  return [...new Map(arrayMap).values()];
};
