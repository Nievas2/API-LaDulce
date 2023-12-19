const { validationResult } = require("express-validator");
const { DollarService } = require("../services");

const updatePrice = async (req, res) => {
  const { price } = req.body;
  try {
    const update = await DollarService.updatePrice(price);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getDollar = async ( req, res) => {
  try {
    const dollar = await DollarService.getDollar()
    res.status(200).json(dollar);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
module.exports = { updatePrice,getDollar };
