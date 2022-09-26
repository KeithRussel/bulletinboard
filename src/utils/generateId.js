let nextId = 0;
export const generateId = () => {
  const result = nextId;
  nextId += 1;
  return result;
};
