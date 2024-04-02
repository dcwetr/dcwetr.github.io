<template>
  <v-card class="rounded-xl ma-4">
    <v-img :height="300" :src="value.image" cover class="align-end text-white">
      <v-card-title
        class="d-flex justify-space-between align-center font-weight-bold"
        >{{ value.name }}
        <v-btn
          :icon="isEditing ? 'mdi-check-bold' : 'mdi-pencil'"
          size="small"
          @click="isEditing = !isEditing"
        >
        </v-btn
      ></v-card-title>
    </v-img>

    <v-card-text v-if="isEditing">
      <v-slider
        v-model="slider"
        :max="90"
        :step="1"
        :min="1"
        class="align-center"
        hide-details
      >
        <template #append>
          <v-text-field
            v-model="slider"
            density="compact"
            style="width: 70px"
            type="number"
            single-line
          ></v-text-field>
          Tage
        </template>
      </v-slider>
      <v-table>
        <tbody>
          <tr>
            <td>
              <v-icon>mdi-airplane</v-icon>
              <span class="ml-2">Anreise</span>
            </td>
            <td></td>
            <v-text-field
              label="CHF"
              placeholder="Reto stinkt"
              variant="plain"
            ></v-text-field>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-food</v-icon>
              <span class="ml-2">Verpflegung</span>
            </td>
            <td>pro Tag</td>
            <v-text-field
              label="CHF"
              placeholder="Halsabschnider"
              variant="plain"
            ></v-text-field>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-bed</v-icon>
              <span class="ml-2">Übernachtung</span>
            </td>
            <td>pro Tag</td>
            <v-text-field
              label="CHF"
              placeholder="Es Schnäppli"
              variant="plain"
            ></v-text-field>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
    <div v-else>
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
    </div>
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
const isEditing = ref(false);
const slider = ref(50);
</script>
