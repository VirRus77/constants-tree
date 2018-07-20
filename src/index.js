/**
 * Fill object
 * @param {object} obj Object fill
 * @param {string} parentName Parent name
 * @return void
 */
function updateNames(obj, parentName = '') {
  if (obj === null || typeof obj !== 'object') {
    return;
  }
  for (const prop in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      continue;
    }
    let setName;
    if (parentName === '') {
      setName = prop;
    } else if (prop === '_') {
      setName = parentName;
    } else {
      setName = `${parentName}.${prop}`;
    }
    const objProp = obj[prop];
    if (typeof objProp === 'object') {
      updateNames(objProp, setName);
    } else if (objProp === '') {
      obj[prop] = setName;
    }
  }
}

export const constantsTree = (obj, parentName) => {
  updateNames(obj, parentName);
};
