module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'main':'#222831',
      'btncol' : '#31363F',
      'textcol' : '#EEEEEE',
      'linecol' : '#76ABAE',
    },
  },
  plugins: [],
}
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});