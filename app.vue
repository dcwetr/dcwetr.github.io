<template>
  <v-layout>
    <v-main>
      <template v-for="(destination, index) in destinations" :key="index">
        <DestinationCard :value="destination" />
      </template>
    </v-main>
    <v-bottom-navigation>
      <div
        class="d-flex flex-grow-1 justify-space-around font-weight-bold text-subtitle-2 align-center"
      >
        <div>Total Dauer 0</div>
        <div>Total Kosten 0</div>
      </div>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup lang="ts">
const destinations = ref(data);
</script>
