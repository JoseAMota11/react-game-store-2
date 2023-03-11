export const classnames = (classnamesString, classnamesObject) => {
  let value = Object.values(classnamesObject);

  if (Array.isArray(value)) value = value[0];

  return value
    ? `${classnamesString} ${Object.keys(classnamesObject)}`
    : classnamesString;
};
