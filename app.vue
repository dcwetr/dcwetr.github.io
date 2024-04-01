<template>
  <v-layout>
    <v-main>
      <template v-for="(destination, index) in destinations" :key="index">
        <DestinationCard :value="destination" />
      </template>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import data from './data.json'

const destinations = ref(data)
</script>
