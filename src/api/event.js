// Dummy API file for event handling
const eventApi = {
  // Add getEventCount method
  getEventCount: (searchQuery) => {
    // Return 0 if searchQuery is empty
    if (!searchQuery) return 0

    // Example logic: count matches of searchQuery in the event keys
    const events = [
      'pineapple',
      'galaxy',
      'quasar',
      'nebula',
      'aurora',
      'eclipse',
      'cascade',
      'zephyr',
      'tempest',
      'abyss',
      'pineapple',
      'quasar',
      'nebula',
      'aurora',
      'eclipse',
      'cascade',
      'zephyr',
      'tempest',
      'abyss',
      'aurora',
      'eclipse',
      'cascade',
      'zephyr',
      'tempest',
      'abyss',
      'pineapple',
      'quasar',
      'nebula',
      'eclipse',
      'cascade',
      'zephyr',
      'tempest',
    ]
    return events.filter((event) => event.includes(searchQuery)).length
  },
}

export default eventApi
