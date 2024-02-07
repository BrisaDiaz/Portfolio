const keyInsensitiveSearch = (source: string[] | string, value: string) => {
  if (typeof source == "string")
    return source.toLocaleLowerCase() == value.toLocaleLowerCase();
  return source.some(
    (current) => current.toLocaleLowerCase() == value.toLocaleLowerCase(),
  );
};
const keyInsensitiveCoincidence = (
  source: string[] | string,
  value: string,
) => {
  if (typeof source == "string")
    return source.toLocaleLowerCase().includes(value.toLocaleLowerCase());

  return source.some((current) =>
    current.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  );
};

export { keyInsensitiveSearch, keyInsensitiveCoincidence };
