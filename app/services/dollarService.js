const { DollarProvider } = require("../providers");
const updatePrice = (price) => DollarProvider.updatePrice(price);
const getDollar = () => DollarProvider.getDollar();
module.exports = { updatePrice, getDollar };
