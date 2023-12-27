const {Dollar}= require("../models")

const updatePrice = async (price, id)=>{
    const dollar = await Dollar.findByPk(id);
    dollar.price = price
    await dollar.save();
    return await Dollar.findByPk(id)
}
const getDollar = async () => {
    const dollar = await Dollar.findByPk(1);
    return dollar
}
module.exports = {updatePrice, getDollar}
