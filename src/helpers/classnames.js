export const classnames = (classnamesString, classnamesObject) => {
  return Object.values(classnamesObject)[0]
    ? `${classnamesString} ${Object.keys(classnamesObject)}`
    : classnamesString;
};
