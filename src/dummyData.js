import home1 from '../src/assets/images/home1.jpg'
import home2 from '../src/assets/images/home2.jpg'
import home3 from '../src/assets/images/home3.jpg'
import home4 from '../src/assets/images/home4.jpg'
import u1 from '../src/assets/images/upcome/u1.jpg'
import u2 from '../src/assets/images/upcome/u2.jpg'
import u3 from '../src/assets/images/upcome/u3.jpg'
import u4 from '../src/assets/images/upcome/u4.jpg'
import u5 from '../src/assets/images/upcome/u5.jpg'
import u6 from '../src/assets/images/upcome/u6.jpg'
import u7 from '../src/assets/images/upcome/u7.jpg'
import slide1 from '../src/assets/images/img/slide1.jpg'
import slide2 from '../src/assets/images/img/slide2.jpg'
import slide3 from '../src/assets/images/img/slide3.jpg'
import rec1 from '../src/assets/images/rec/rec1.jpg'
import rec2 from '../src/assets/images/rec/rec2.jpg'
import rec3 from '../src/assets/images/rec/rec3.jpg'
import rec4 from '../src/assets/images/rec/rec4.jpg'

export const homeData = [
  {
    id: 1,
    name: 'LOVE DEATH + ROBOTS',
    rating: 4.7,
    time: '2hr : 22mins',
    desc: 'Criaturas aterrorizantes, surpresas bizarras e humor ácido habitam e florescem de cada um dos vários universos únicos criados para essa coletânea de curtas de animação, em que cada episódio apresenta sua própria narrativa e estilo visual.',
    starring: 'Madeleine Knight, Mary Elizabeth',
    genres: 'Ação',
    tags: 'Ação, Animação, Horror',
    cover: home1,
    video: 'https://www.youtube.com/embed/uD-242dcxRE',
    date: '15-Mar-2019',
  },
  {
    id: 2,
    name: 'Guardians of the Galaxy',
    rating: 4.6,
    time: '2hr : 22mins',
    desc: 'O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres.',
    starring: 'Chris Pratt, Zoë Saldaña',
    genres: 'Aventura',
    tags: 'Aventura, Ação',
    cover: home2,
    video: 'https://www.youtube.com/embed/wUn05hdkhjM',
    date: '31-Jul-2014',
  },
  {
    id: 3,
    name: 'The Mandalorian',
    rating: 4.8,
    time: '2hr : 22mins',
    desc: 'Um atirador solitário explora os confins da galáxia, longe da autoridade da Nova República.',
    starring: 'Pedro Pascal, Gina Carano',
    genres: 'Aventura',
    tags: 'Aventura, Ação',
    cover: home3,
    video: 'https://www.youtube.com/embed/aOC8E8z_ifw',
    date: '12-Nov-2019',
  },
  {
    id: 4,
    name: 'The Suicide Squad',
    rating: 4.9,
    time: '2hr : 22mins',
    desc: 'O governo envia os supervilões mais perigosos do mundo para a remota ilha de Corto Maltese, repleta de inimigos. Armados com armas de alta tecnologia, eles viajam pela selva perigosa em uma missão de busca e destruição com o Coronel Rick Flag.',
    starring: 'Margot Robbie, Pete Davidson',
    genres: 'Ação',
    tags: 'Drama, Horror',
    cover: home4,
    video: 'https://www.youtube.com/embed/UkFJ90ef4_I',
    date: '05-Ago-2021',
  },
]
export const upcome = [
  {
    id: 1,
    cover: u1,
    name: 'Back to the Future',
    time: '2hr : 38mins',
  },
  {
    id: 2,
    cover: u2,
    name: '2001: A Space Odyssey',
    time: '2hr : 38mins',
  },
  {
    id: 3,
    cover: u3,
    name: 'Fight Club',
    time: '2hr : 38mins',
  },
  {
    id: 4,
    cover: u4,
    name: 'Mr. Robot',
    time: '2hr : 38mins',
  },
  {
    id: 5,
    cover: u5,
    name: 'Moon Knight',
    time: '2hr : 38mins',
  },
]
export const latest = [
  {
    id: 1,
    cover: u6,
    name: 'Brooklyn Nine-Nine',
    time: '2hr : 38mins',
  },
  {
    id: 2,
    cover: u7,
    name: 'Black Mirror',
    time: '2hr : 38mins',
  },
  {
    id: 3,
    cover: u1,
    name: 'Back to the Future',
    time: '2hr : 38mins',
  },
  {
    id: 4,
    cover: u5,
    name: 'Moon Knight',
    time: '2hr : 38mins',
  },
  {
    id: 5,
    cover: rec4,
    name: 'Interstellar',
    time: '2hr : 38mins',
  },
]

export const trending = [
  {
    id: 5,
    name: 'Arcane',
    rating: 4.7,
    time: '2hr : 22mins',
    desc: 'Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.',
    starring: 'Ella Purnell, Katie Leung',
    genres: 'Animação',
    tags: 'Animação, Ação',
    cover: slide1,
    video: 'https://www.youtube.com/embed/3Svs_hl897c',
    date: '06-Nov-2021',
  },
  {
    id: 6,
    name: 'Pacific Rim',
    rating: 4.6,
    time: '2hr : 22mins',
    desc: 'É 2035, dez anos depois da Batalha da Brecha, na qual o portal interdimensional criado pelos Precursores (através do qual eles enviaram Kaiju saqueador) foi fechado. O ex-piloto de Jaeger Jake Pentecost – filho de Battle of the Breach, herói Stacker Pentecost – ganha a vida roubando e vendendo peças de Jaeger no mercado negro na área de Los Angeles.',
    starring: 'Charlie Hunnam, Rinko Kikuchi',
    genres: 'Ação',
    tags: 'Ação, Aventura',
    cover: slide2,
    video: 'https://www.youtube.com/embed/5guMumPFBag',
    date: '09-Ago-2013',
  },
  {
    id: 7,
    name: 'Masters of the Universe',
    rating: 4.8,
    time: '2hr : 22mins',
    desc: 'Depois de uma batalha catastrófica dividir Eternia, Teela e uma aliança improvável precisam evitar o fim do Universo.',
    starring: 'Chris Wood, Lena Headey',
    genres: 'Animação',
    tags: 'Animação, Aventura',
    cover: slide3,
    video: 'https://www.youtube.com/embed/81wyj65SJIo',
    date: '23-Jul-2021',
  },
]
export const recommended = [
  {
    id: 4,
    cover: rec1,
    name: 'Devilman Crybaby',
    time: '2hr : 38mins',
  },
  {
    id: 5,
    cover: rec2,
    name: 'Akira',
    time: '2hr : 38mins',
  },
  {
    id: 1,
    cover: rec3,
    name: 'Dark',
    time: '2hr : 38mins',
  },
  {
    id: 2,
    cover: rec4,
    name: 'Interstellar',
    time: '2hr : 38mins',
  },
  {
    id: 3,
    cover: u3,
    name: 'Fight Club',
    time: '2hr : 38mins',
  },
]
