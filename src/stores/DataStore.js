import { defineStore } from 'pinia'

export const useDataStore = defineStore('DataStore', {
  state: () => ({
    images: [
      { src: 'src/assets/img/carousel-1.jpg', span: 'col-span-4 row-span-2', alt: 'Twee maal Dark & Stormy cocktail' },
      {
        src: 'src/assets/img/carousel-2.jpg',
        span: 'col-span-3 row-span-2',
        alt: 'Twee White Russians die bereid worden'
      },
      {
        src: 'src/assets/img/carousel-3.jpg',
        span: 'col-span-5 row-span-2',
        alt: 'Jehan en Rob maken Espresso Martini'
      },
      {
        src: 'src/assets/img/carousel-4.jpg',
        span: 'col-span-4 row-span-2',
        alt: 'Inspire specialiteit C-star met kruidnoten'
      },
      {
        src: 'src/assets/img/carousel-5.jpg',
        span: 'col-span-4 row-span-2',
        alt: 'Een yogurt, lemon and lime swirl cake'
      },
      { src: 'src/assets/img/carousel-6.jpg', span: 'col-span-4 row-span-1', alt: 'Bovenverdieping Inspire Breda' },
      { src: 'src/assets/img/carousel-7.jpg', span: 'col-span-2 row-span-1', alt: 'Martini Espresso van bovenaf' },
      { src: 'src/assets/img/carousel-8.jpg', span: 'col-span-2 row-span-1', alt: 'Verse appeltaart' }
    ],
    menukaarten: [
      { href: '/menu/lunch-1.pdf', src: 'src/assets/img/lunch-1.jpg', name: 'Lunchkaart' },
      { href: '/menu/drank-1.pdf', src: 'src/assets/img/drank-1.jpg', name: 'Koffie & Warm' },
      { href: '/menu/drank-2.pdf', src: 'src/assets/img/drank-2.jpg', name: 'Sap & Frisdrank' },
      { href: '/menu/drank-3.pdf', src: 'src/assets/img/drank-3.jpg', name: 'Bierkaart' },
      { href: '/menu/drank-4.pdf', src: 'src/assets/img/drank-4.jpg', name: 'Wijn & Bubbels' },
      { href: '/menu/drank-5.pdf', src: 'src/assets/img/drank-5.jpg', name: 'Cocktails' }
    ],
    openingstijden: [
      { dag: 'Maandag', tijd: '09:00 - 17:00*' },
      { dag: 'Dinsdag', tijd: '09:00 - 17:00*' },
      { dag: 'Woensdag', tijd: '09:00 - 17:00*' },
      { dag: 'Donderdag', tijd: '09:00 - 17:00*' },
      { dag: 'Vrijdag', tijd: '09:00 - 20:00' },
      { dag: 'Zaterdag', tijd: '09:00 - 20:00' },
      { dag: 'Zondag', tijd: '10:30 - 20:00' }
    ],
    openingstijdenGewijzigd: { datum: 'Dinsdag 28 juni 2022' },
    openingstijdenNotitie: { notitie: '*Met mooi weer regelmatig langer open.' },
    socials: [
      {
        href: 'https://www.facebook.com/inspirecoffeecompany/',
        label: 'facebook'
      },
      {
        href: 'https://twitter.com/inspirecoffee',
        label: 'twitter'
      },
      {
        href: 'https://www.instagram.com/inspirebreda/',
        label: 'instagram'
      }
    ],
    contact: {
      bedrijfsnaam: 'Inspire Coffee Company',
      adres: 'Veemarktstraat 4',
      postcode: '4811ZE',
      plaats: 'Breda',
      tel: '+31 (0)76 515 3272',
      telHref: '0031765153272',
      email: 'breda@inspirecoffee.com'
    }
  }),
  getters: {
    doubleCount: state => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
