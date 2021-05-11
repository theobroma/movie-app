export const Formatter = {
  formatDate(date: string) {
    // ["2021", "03", "24"] ->  //3 February, 2021
    const arr = date.split('-');
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${parseInt(arr[2], 10)} ${monthNames[parseInt(arr[1], 10) - 1]}, ${
      arr[0]
    }`;
  },
  numberWithCommas(x: number | string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};
