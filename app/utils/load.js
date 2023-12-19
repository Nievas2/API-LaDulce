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
    phone: '1155555555',
    password: await bcrypt.hash('adminn', saltRounds),
    active: true,
    admin: true,
  });

  const courseCategory1 = await Category.create({
    name: 'Pastelería',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Iw8DACEDKaASv2gd-oh0EipaiOqEa8tDUw&usqp=CAU'
  });
  const courseCategory2 = await Category.create({
    name: 'Tortas',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdd0zmj3gZsKkbYSrKqFXGXnzHY89gifeQIg&usqp=CAU'

  });
  const courseCategory3 = await Category.create({
    name: 'Lunch',
    image:'https://i.pinimg.com/736x/e3/d1/df/e3d1df12f4c72e03778e381e18530c14.jpg'

  });
  const courseCategory4 = await Category.create({
    name: 'Perniles y carnes',
    image:'https://cdn5.dibujos.net/dibujos/pintados/201045/cb6b04b11f5c5d6cc3913bb39ba7b334.png'

  });
  const courseCategory5 = await Category.create({
    name: 'Combos',
    image:'https://static.vecteezy.com/system/resources/previews/011/676/419/non_2x/illustration-of-burger-and-french-fries-with-a-cup-of-soft-drink-cartoon-illustration-fast-food-junk-food-vector.jpg'

  });
  const course1 = await Product.create({
    name: 'Introducción a JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
    description: 'Aprende los fundamentos de la programación en JavaScript.',
    price:99,
    CategoryId: courseCategory1.id,
  });
  const course2 = await Product.create({
    name: 'Diseño de Logotipos',
    image: 'https://blend.co.ke/wp-content/uploads/2022/11/Illustrator.jpg',
    description: 'Crea logotipos impactantes con Adobe Illustrator.',
    price: 79,
    CategoryId: courseCategory2.id,
  });
  const course3 = await Product.create({
    name: 'Inglés Avanzado',
    image: 'https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg',
    description: 'Mejora tus habilidades en inglés con un enfoque avanzado.',
    price: 129,
    CategoryId: courseCategory3.id,
  });
  const course4 = await Product.create({
    name: 'Programación en Python',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*m0H6-tUbW6grMlezlb52yw.png',
    description: 'Aprende a programar en Python, un lenguaje versátil y poderoso.',
    price:109,
    CategoryId: courseCategory1.id,
  });
  const course5 = await Product.create({
    name: 'Fotografía para Principiantes',
    image: 'https://www.fotodng.com/wp-content/uploads/2016/08/curso-fotografia-imaginacion.jpg',
    description: 'Inicia tu viaje en la fotografía con este curso apto para principiantes.',
    price: 79,
    CategoryId: courseCategory2.id,
  });
  const course6 = await Product.create({
    name: 'Curso de Cocina Italiana',
    image: 'https://www.gediscovery.edu.pe/uploads/cursos-libres-2/cocina-italiana.jpg',
    description: 'Aprende a preparar deliciosos platos italianos con auténticas recetas.',
    price: 129,
    CategoryId: courseCategory5.id, // Use the new category's ID.
  });
  const course7 = await Product.create({
    name: 'Curso de Uñas Semipermanentes',
    image: 'https://d22fxaf9t8d39k.cloudfront.net/c77e25f33e6878b298e81131508d7003ac003163ec666d0bd937c3076e13f93a364.jpeg',
    description: 'Aprende a realizar tratamientos de uñas semipermanentes y diseño de uñas.',
    price: 89,
    CategoryId: courseCategory4.id,
  });

}
start();
