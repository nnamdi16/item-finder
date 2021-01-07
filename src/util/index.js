/**
 * 
 * @param {object}  inputObject 
 * @return {object} formattedObject
 */
export const toLowerCase = (inputObject) => {
  const formattedObject = {};
  Object.entries(inputObject).forEach((element) => {
    const key = element[0];
    const value = element[1];
    formattedObject[key] = value.toString().toLowerCase();
  });

  return formattedObject;
}