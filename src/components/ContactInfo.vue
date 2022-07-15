<script setup>
import { useDataStore } from '../stores/DataStore'
import parsePhoneNumber from 'libphonenumber-js'
import FooterHeading from './FooterHeading.vue'

const { contact } = useDataStore()
const phoneNumber = parsePhoneNumber(contact.tel)
</script>

<template>
  <FooterHeading>
    <template #heading>Contact</template>
    <p>
      <strong>{{ contact.bedrijfsnaam }}</strong
      ><br />
      {{ contact.adres }}<br />
      {{ contact.postcode }} {{ contact.plaats }}
    </p>
    <nav>
      <ul>
        <li
          class="transition-opacity duration-200 hover:opacity-75 focus:opacity-75 active:opacity-100">
          <a :href="phoneNumber.getURI()">{{ phoneNumber.formatInternational() }}</a>
        </li>
        <li
          class="transition-opacity duration-200 hover:opacity-75 focus:opacity-75 active:opacity-100">
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </li>
      </ul>
    </nav>
  </FooterHeading>
</template>
