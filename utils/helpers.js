module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  ifEquals: (arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
    return arg1 === arg2;
  },

  if_contains: (val, arr) => {
  console.log('val: ', val, ' arr: ', arr);
    //   arr = [arr].flat();
  //   if (!arr){
  //     return false;
  //   }
  //   return arr.includes(val);
  }
};
