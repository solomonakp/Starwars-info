export const getId = (string) => {
  const newString = string.slice(-4)

  return newString.match(/\d+/)[0]
}
