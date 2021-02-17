export function classNames(classesObj: Object) {
  const classes = Object.entries(classesObj).map(([key, value]) =>
    Boolean(value) ? key : undefined
  );
  return classes.filter((cls) => Boolean(cls)).join(" ");
}
