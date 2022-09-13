import { IFBanner } from '../components/Banner/interfaces';
import { IFMenu } from '../components/Header/interfaces';
import { IFProductFeature } from '../components/ProductFeature/interfaces';

export const menu: IFMenu[] = [
  { link: '#', text: 'FAQ' },
  { link: '#', text: 'Оплата и доставка' },
  { link: '#', text: 'Возврат' },
  { link: '#', text: 'Исследования' },
  { link: '#', text: 'Личный кабинет' },
];

export const countInCart: number = 1;

export const banner: IFBanner = {
  title: 'Активируй иммунитет!',
  text: 'Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма',
  subTitle: 'NOOTRIS помогает',
  subText: 'Вашему организму во время пандемии и сезонных простуд',
  image: require('../components/Banner/img/image-banner.svg').default,
};

export const discountProductFeatures: IFProductFeature[] = [
  {
    image: require('../components/ProductFeature/img/ginger.svg').default,
    text: 'Содержит',
    textAccentuated: 'имбирь',
  },
  {
    image: require('../components/ProductFeature/img/nootris.svg').default,
    text: '+ Бесплатная доставка',
    textAccentuated: 'Специальная цена',
  },
  {
    image: require('../components/ProductFeature/img/virus.svg').default,
    text: 'Нейтрализует',
    textAccentuated: 'вирусы',
  },
];
