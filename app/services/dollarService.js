const { DollarProvider } = require("../providers");
const updatePrice = (price, id) => DollarProvider.updatePrice(price, id);
const getDollar = () => DollarProvider.getDollar();
module.exports = { updatePrice, getDollar };
