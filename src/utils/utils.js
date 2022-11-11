import monitor from '../assets/categories/monitor.jpg';
import laptop from '../assets/categories/laptop.jpg';
import pc_components from '../assets/categories/pc_componets.jpg';
import mouseGamer from '../assets/categories/mouseGamer.jpg';
import full_pc from '../assets/categories/full_pc.jpeg';
import peripherals from '../assets/categories/peripherals.jpg';

export const ROUTES = [
    { text: 'Portatiles', to: '/portatiles', page: 'Portátiles', id: 'laptops' },
    { text: 'PC Gamers', to: 'pcgamers', page: 'pc gamers', id: 'pcgmaers' },
    { text: 'PC Oficina', to: '/pcoficina', page: 'pc para oficina', id: 'pcoffice' },
    { text: 'Sillas', to: '/sillas', page: 'Sillas', id: 'chairs' },
    { text: 'Monitores', to: '/monitores', page: 'Monitores', id: 'monitors' },
];

export const CATEGORIES = [
    { text: 'Monitores', to: '/monitores', page: 'Monitores', id: 'monitors', image: monitor },
    { text: 'Portatiles', to: '/monitores', page: 'Laptops', id: 'laptops', image: laptop },
    { text: 'Mouse Gamer', to: '/mouseGamers', page: 'mouse-gamer', id: 'mouse-gamer', image: mouseGamer },
    { text: 'Componentes PC', to: '/componentes', page: 'components', id: 'pc-components', image: pc_components },
    { text: 'Combo Completo', to: '/combo-completo', page: 'fullPC', id: 'full-pc', image: full_pc },
    { text: 'Periféricos', to: '/perifericos', page: 'peripherals', id: 'peripherals', image: peripherals },
];