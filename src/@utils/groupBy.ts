// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects

// eslint-disable-next-line import/no-unused-modules
export const groupBy = (xs: any, key: any) => {
  return xs.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
