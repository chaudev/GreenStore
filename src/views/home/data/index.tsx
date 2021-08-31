const SLIDE_01 = require('~/assets/images/slide-01.png');
const SLIDE_02 = require('~/assets/images/slide-02.png');
const SLIDE_03 = require('~/assets/images/slide-03.png');

const CATE_01 = require('~/assets/images/category-burger.png');
const CATE_02 = require('~/assets/images/category-pizza.png');
const CATE_03 = require('~/assets/images/category-drink.png');
const CATE_04 = require('~/assets/images/category-chicken.png');
const CATE_05 = require('~/assets/images/category-other.png');

export const slides = [
  {
    title: 'Siêu sales 2021',
    content: 'Giảm giá 15% Hamburger các loại vào 10/10',
    image: SLIDE_01,
  },
  {
    title: 'Khuyến mãi thành viên',
    content: 'Giảm 10% mọi đơn cho khách hàng thành viên',
    image: SLIDE_02,
  },
  {
    title: 'Có mua, có giảm',
    content: 'Giảm 5% cho tất cả khách hàng mua vào 11h-13h',
    image: SLIDE_03,
  },
];

export const categories = [
  {
    id: '01',
    title: 'Burger',
    image: CATE_01,
  },
  {
    id: '02',
    title: 'Pizza',
    image: CATE_02,
  },
  {
    id: '03',
    title: 'Drink',
    image: CATE_03,
  },
  {
    id: '04',
    title: 'Chicken',
    image: CATE_04,
  },
  {
    id: '05',
    title: 'Other',
    image: CATE_05,
  },
];

const P_01 = require('~/assets/images/products/product_01.png');
const P_02 = require('~/assets/images/products/product_02.png');
const P_03 = require('~/assets/images/products/product_03.png');
const P_04 = require('~/assets/images/products/product_04.png');
const P_05 = require('~/assets/images/products/product_05.png');
const P_06 = require('~/assets/images/products/product_06.png');
const P_07 = require('~/assets/images/products/product_07.png');
const P_08 = require('~/assets/images/products/product_08.png');
const P_09 = require('~/assets/images/products/product_09.png');
const P_10 = require('~/assets/images/products/product_10.png');

export const products = [
  {
    id: '01',
    title: 'Burger gà phô mai đặc biệt',
    content:
      'Burger Đặc biệt: gà và phô-mai phối hợp tạo nên một loại burger với hương vị đặc sắc có một không hai. Hãy cùng gia đình và bạn bè ăn thử loại mới này',
    price: 69000,
    image: P_01,
  },
  {
    id: '02',
    title: 'Burger bò phô mai đặc biệt',
    content: 'Bò phô mai đặc biệt',
    price: 49000,
    image: P_02,
  },
  {
    id: '03',
    title: 'Burger Big Mac',
    content: 'Burger 2 lớp bò, phô-mai, rau tươi và sốt Big Mac',
    price: 69000,
    image: P_03,
  },
  {
    id: '04',
    title: 'Burger phi-lê gà cay đặc biệt',
    content: 'Burger Đặc biệt phi-lê gà miếng lớn giòn cay.',
    price: 79000,
    image: P_04,
  },
  {
    id: '05',
    title: 'Kem sốt Sôcôla',
    content: '',
    price: 29000,
    image: P_05,
  },
  {
    id: '06',
    title: 'Kem sốt Dâu',
    content: '',
    price: 29000,
    image: P_06,
  },
  {
    id: '07',
    title: '6 Miếng Cánh Gà',
    content: 'Những món ăn có thể chia sẻ cùng bạn bè',
    price: 125000,
    image: P_07,
  },
  {
    id: '08',
    title: '9 miếng Gà',
    content: 'Những món ăn có thể chia sẻ cùng bạn bè',
    price: 169000,
    image: P_08,
  },
  {
    id: '09',
    title: 'Sprite',
    content: '',
    price: 29000,
    image: P_09,
  },
  {
    id: '09',
    title: 'Fanta',
    content: '',
    price: 25000,
    image: P_10,
  },
];
