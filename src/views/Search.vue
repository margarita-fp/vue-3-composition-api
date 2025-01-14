<template>
  <div class="search">
    Search for <input v-model="searchInput" />

    <div>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import eventApi from '@/api/event.js'

export default {
  setup() {
    const searchInput = ref('')
    const results = ref(0)

    watch(
      searchInput,
      () => {
        results.value = eventApi.getEventCount(searchInput.value)
      },
      { immediate: true },
    )

    return {
      searchInput,
      results,
    }
  },
}
</script>
