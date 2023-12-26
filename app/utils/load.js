/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');

const saltRounds = 10;

const {
  Category,
  User,
  Product,
  Dollar,
} = require('../models');
async function start() {
  const dollar = await Dollar.create({price : 985});
  const admin = await User.create({
    firstName: 'Gabriel',
    lastName: 'Nievas',
    code: 'JP001',
    email: 'angelgabrielnievas@gmail.com',
    phone: '3544596443',
    password: await bcrypt.hash('adminn', saltRounds),
    active: true,
    admin: true,
  });
  const admin2 = await User.create({
    firstName: 'Florencia',
    lastName: 'Nievas',
    code: 'JP001',
    email: 'ladulcetradicion96@gmail.com',
    phone: '1162569879',
    password: await bcrypt.hash('adminn', saltRounds),
    active: true,
    admin: true,
  });

  const courseCategory1 = await Category.create({
    name: 'Pastelería',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Iw8DACEDKaASv2gd-oh0EipaiOqEa8tDUw&usqp=CAU'
  });
  const courseCategory3 = await Category.create({
    name: 'Lunch',
    image:'https://i.pinimg.com/736x/e3/d1/df/e3d1df12f4c72e03778e381e18530c14.jpg'

  });
  const courseCategory4 = await Category.create({
    name: 'Perniles y carnes',
    image:'https://cdn5.dibujos.net/dibujos/pintados/201045/cb6b04b11f5c5d6cc3913bb39ba7b334.png'

  });
  const courseCategory2 = await Category.create({
    name: 'Tortas',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdd0zmj3gZsKkbYSrKqFXGXnzHY89gifeQIg&usqp=CAU'

  });
  const courseCategory5 = await Category.create({
    name: 'Combos y agregados',
    image:'https://static.vecteezy.com/system/resources/previews/011/676/419/non_2x/illustration-of-burger-and-french-fries-with-a-cup-of-soft-drink-cartoon-illustration-fast-food-junk-food-vector.jpg'

  });
}
start();
