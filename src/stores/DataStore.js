import { defineStore } from 'pinia'

export const useDataStore = defineStore('DataStore', {
  state: () => ({
    openingstijden: [
      { dag: 'Maandag', tijd: '08:30 - 17:00' },
      { dag: 'Dinsdag', tijd: '08:30 - 17:00' },
      { dag: 'Woensdag', tijd: '08:30 - 17:00' },
      { dag: 'Donderdag', tijd: '08:30 - 22:00' },
      { dag: 'Vrijdag', tijd: '08:30 - 22:00' },
      { dag: 'Zaterdag', tijd: '08:30 - 22:00' },
      { dag: 'Zondag', tijd: '10:00 - 18:00' }
    ],
    openingstijdenGewijzigd: { datum: 'Vrijdag 31 maart 2023' },
    openingstijdenNotitie: { notitie: '*Met mooi weer regelmatig langer open.' },
    socials: [
      {
        href: 'https://www.facebook.com/debasisbreda/',
        label: 'facebook'
      },
      {
        href: 'https://www.instagram.com/debasisbreda/',
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
