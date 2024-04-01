<template>
  <v-card class="rounded-xl ma-4">
    <v-img :height="300" :src="value.image" cover class="align-end text-white">
      <v-card-title class="font-weight-bold">{{ value.name }} </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4 d-flex justify-space-between">
      <span>{{ value.duration }} Tage</span>
      <span>CHF {{ totalCost }}</span>
    </v-card-subtitle>
    <v-card-text>
      <v-table>
        <tbody>
          <tr>
            <td>
              <v-icon>mdi-food</v-icon>
              <span class="ml-2">Food</span>
            </td>
            <td>per day</td>
            <td>CHF {{ value.costs.foodPerDay }}</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-bed</v-icon>
              <span class="ml-2">Accommodation</span>
            </td>
            <td>per day</td>
            <td>CHF {{ value.costs.accommodationPerDay }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  value: {
    type: Object as PropType<Destination>,
    required: true,
  },
});

const totalCost = computed(
  () =>
    (props.value.costs.foodPerDay + props.value.costs.accommodationPerDay) *
    props.value.duration,
);
</script>
