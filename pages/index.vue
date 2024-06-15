<template>
  <v-layout>
    <v-app-bar app>
      <v-btn density="default" icon="mdi-map"> </v-btn>
      <v-spacer></v-spacer>
      <div class="title font-weight-black">we re at</div>
      <v-spacer></v-spacer>
      <v-btn density="default" icon="mdi-calendar"> </v-btn>
    </v-app-bar>
    <v-main>
      <template v-for="(destination, index) in destinations" :key="index">
        <DestinationCard :value="destination" />
      </template>
    </v-main>
    <v-bottom-navigation :active="active">
      <div
        class="d-flex flex-grow-1 justify-space-around text-subtitle-2 align-center"
      >
        <div>Gesamtdauer</div>
        <div class="font-weight-bold">{{ totalduration }} Tage</div>
        <div>Gesamtkosten</div>
        <div class="font-weight-bold">CHF {{ totalcost }}</div>
      </div>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup lang="ts">
const destinations = ref(data);
const active = ref(true);
const totalduration = computed(() => {
  let Total = 0;
  destinations.value.forEach((destination) => {
    Total = Total + destination.duration;
  });
  return Total;
});

const totalcost = computed(() => {
  let Total = 0;
  destinations.value.forEach((destination) => {
    const forDestination =
      (destination.costs.foodPerDay + destination.costs.accommodationPerDay) *
        destination.duration +
      destination.costs.travelCost;
    Total = Total + forDestination;
  });
  return Total;
});
</script>
