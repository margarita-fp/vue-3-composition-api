<template>
  <div class="party-planner">
    <p>Spaces left: {{ spacesLeft }} out of {{ capacity }}</p>
    <!-- don't need to write capacity.value because when a ref is found in a template,
     it is automatically exposes inner value -->
    <div>Capacity: {{ capacity }}</div>
    <button @click="increaseCapacity()">Increase Capacity</button>

    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import useEventSpace from '@/use/event-space'

export default {
  setup() {
    return useEventSpace()
  },
}
</script>
