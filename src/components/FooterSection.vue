<script setup>
import { useDataStore } from '../stores/DataStore'

const dataStore = useDataStore()
const openingstijden = dataStore.openingstijden
const gewijzigd = dataStore.openingstijdenGewijzigd
const notitie = dataStore.openingstijdenNotitie
const socials = dataStore.socials
const contact = dataStore.contact
</script>

<template>
  <footer
    id="contact"
    class="-scroll-mt-8 bg-inspire-white"
  >
    <div class="m-auto flex max-w-5xl flex-col justify-between px-8 pt-16 pb-8 sm:block">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-4">
          <h2 class="font-black uppercase tracking-normal text-inspire-orange">Contact</h2>
          <p class="font-light text-inspire-brown-dark">
            <strong>{{ contact.bedrijfsnaam }}</strong><br />
            {{ contact.adres }}<br />
            {{ contact.postcode }} {{ contact.plaats }}
          </p>
          <nav class="font-light text-inspire-brown-dark">
            <ul>
              <li class="transition-opacity duration-200 hover:opacity-75 focus:opacity-75 active:opacity-100">
                <a :href="`tel:${contact.telHref}`">{{ contact.tel }}</a>
              </li>
              <li class="transition-opacity duration-200 hover:opacity-75 focus:opacity-75 active:opacity-100">
                <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          id="openingstijden"
          class="scroll-m-8 space-y-4"
        >
          <h2 class="font-black uppercase tracking-normal text-inspire-orange">Openingstijden</h2>
          <table class="font-light text-inspire-brown-dark">
            <tr
              v-for="(openingstijd, index) in openingstijden"
              :key="index"
            >
              <td
                class="pr-8 align-top"
                v-text="openingstijd.dag"
              ></td>
              <td
                class="align-top"
                v-text="openingstijd.tijd"
              ></td>
            </tr>
          </table>
          <p class="text-sm font-light italic text-inspire-brown-dark sm:hidden">
            <span v-text="notitie.notitie"></span>
          </p>
        </div>
        <div class="space-y-4">
          <h2 class="font-black uppercase tracking-normal text-inspire-orange">Social</h2>
          <nav class="text-inspire-orange">
            <ul class="flex">
              <li
                v-for="(social, index) in socials"
                :key="index"
                class="ml-4 transition-opacity duration-200 hover:opacity-75 focus:opacity-75 active:opacity-100 first:ml-0"
              >
                <a
                  :href="social.href"
                  target="_blank"
                  :aria-label="social.label"
                >
                  <svg
                    :class="social.svgClass"
                    class="bi h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path :d="social.svgPath" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="flex justify-evenly">
        <p class="mt-8 hidden text-sm font-light italic text-inspire-brown-dark sm:block">
          <span
            v-text="notitie.notitie"
          ></span>
        </p>
        <p class="mt-8 text-center text-sm font-light italic text-inspire-brown-dark">
          Bijgewerkt:
          <span
            v-text="gewijzigd.datum"
          ></span>
        </p>
      </div>
      <div
        class="mt-8 w-full border-t border-inspire-brown-dark border-opacity-25 text-center text-sm font-light text-inspire-brown-dark"
      >
        <p
          x-data
          class="pt-8"
        >
          Copyright &copy; <span v-text="new Date().getFullYear()"></span> Inspire Coffee Company. Alle rechten
          voorbehouden.
        </p>
      </div>
    </div>
  </footer>
</template>
