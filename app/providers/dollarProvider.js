const {Dollar}= require("../models")

const updatePrice = async (price)=>{
    await Dollar.update(price, { where: { id: 1 } });
    return Dollar.findByPk(1);
}
const getDollar = async () => {
    const dollar = await Dollar.findByPk(1);
    return dollar
}
module.exports = {updatePrice, getDollar}
