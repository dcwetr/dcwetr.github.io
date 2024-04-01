<template>
  <v-card class="rounded-xl ma-4">
    <v-img :height="300" :src="value.image" cover class="align-end text-white">
      <v-card-title
        class="d-flex justify-space-between align-center font-weight-bold"
        >{{ value.name }} <v-btn icon="mdi-pencil" size="small"> </v-btn
      ></v-card-title>
    </v-img>

    <div class="pt-4 pr-4 pl-4 d-flex justify-space-between font-weight-bold">
      <span>{{ value.duration }} Tage</span>
      <span>CHF {{ totalCost }}</span>
    </div>
    <v-card-text>
      <v-table>
        <tbody>
          <tr>
            <td>
              <v-icon>mdi-airplane</v-icon>
              <span class="ml-2">Anreise</span>
            </td>
            <td></td>
            <td>CHF {{ value.costs.travelCost }}</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-food</v-icon>
              <span class="ml-2">Verpflegung</span>
            </td>
            <td>pro Tag</td>
            <td>CHF {{ value.costs.foodPerDay }}</td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-bed</v-icon>
              <span class="ml-2">Übernachtung</span>
            </td>
            <td>pro Tag</td>
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
      props.value.duration +
    props.value.costs.travelCost,
);
</script>
