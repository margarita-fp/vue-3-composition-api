import { ref, computed } from 'vue'

export default function useEventSpace() {
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
