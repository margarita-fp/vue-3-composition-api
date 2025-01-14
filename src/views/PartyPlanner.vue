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
import { ref, computed } from 'vue'

export default {
  setup() {
    return useEventSpace()
  },
}

function useEventSpace() {
  // create a reactive reference
  // wraps primitive in an object, allowing to track changes
  const capacity = ref(3)
  const attending = ref(['Tim', 'Bob', 'Joe'])

  const spacesLeft = computed(() => {
    // need to use .value to access the value of the ref
    return capacity.value - attending.value.length
  })

  function increaseCapacity() {
    // we cannot incremenet an object, so we have to access the value property
    capacity.value++
  }

  return { capacity, attending, spacesLeft, increaseCapacity }
}
</script>
