import { defineStore } from 'pinia'

export const useDataStore = defineStore('DataStore', {
  state: () => ({
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
      email: 'breda@inspirecoffee.com'
    }
  }),
  getters: {},
  actions: {}
})
