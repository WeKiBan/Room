import hero1 from './images/desktop-image-hero-1.jpg';
import hero2 from './images/desktop-image-hero-2.jpg';
import hero3 from './images/desktop-image-hero-3.jpg';
import mobile1 from './images/mobile-image-hero-1.jpg';
import mobile2 from './images/mobile-image-hero-2.jpg';
import mobile3 from './images/mobile-image-hero-3.jpg';
import banner1 from './images/image-about-dark.jpg';
import banner2 from './images/image-about-light.jpg';

export const heroAssets = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    paragraph:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    images: [hero1, mobile1],
  },
  {
    id: 2,
    title: 'Shop now we are available all across the globe',
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us",
    images: [hero2, mobile2],
  },
  {
    id: 3,
    title: ' Manufactured with the best materials',
    paragraph:
      '  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    images: [hero3, mobile3],
  },
];

export const bannerAssets = {
  title: 'About our furniture',
  paragraph:
    'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
  images: [banner1, banner2],
};
