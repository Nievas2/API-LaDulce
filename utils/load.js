/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');

const saltRounds = 10;

const {
  Category,
  User,
  Product,
} = require('../models');
async function start() {
  const admin = await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    code: 'JP001',
    email: 'admin@admin.com',
    phone: '1155555555',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: true,
  });
  const user1 = await User.create({
    firstName: 'Juan',
    lastName: 'Pérez',
    code: 'JP001',
    email: 'juan.perez@example.com',
    phone: '1155555555',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: false,
  });
  const user2 = await User.create({
    firstName: 'María',
    lastName: 'Gómez',
    code: 'MG002',
    email: 'maria.gomez@example.com',
    phone: '1155555556',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: false,
  });
  const user3 = await User.create({
    firstName: 'Luis',
    lastName: 'Rodríguez',
    code: 'LR003',
    email: 'luis.rodriguez@example.com',
    phone: '1155555557',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: true,
  });

  const courseCategory1 = await Category.create({
    name: 'Programación',
  });
  const courseCategory2 = await Category.create({
    name: 'Diseño Gráfico',
  });
  const courseCategory3 = await Category.create({
    name: 'Idiomas',
  });
  const courseCategory4 = await Category.create({
    name: 'Belleza y Moda',
  });
  const courseCategory5 = await Category.create({
    name: 'Artes Culinarias',
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
