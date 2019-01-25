export const nullToString = (value: string | null): string => {
  return value === null ? '' : value;
};
