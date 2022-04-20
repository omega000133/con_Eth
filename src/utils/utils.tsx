export const classNames = (...classes: string[]) => {
  // to merge conditional classes in styling
  return classes.filter(Boolean).join(' ');
};

export const toLocaleCamelCase = (str: string) => {
  const initial = str.slice(0, 1).toLocaleUpperCase();
  const rest = str.slice(1).toLocaleLowerCase();

  return initial + rest;
};

export const getEllipsesText = (address: string) => {
  return address.slice(0, 5) + '...' + address.slice(-4);
};
