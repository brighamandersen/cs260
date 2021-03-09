<template>
  <div>
    <h1>Current Tickets</h1>
    <div v-for="ticket in tickets" v-bind:key="ticket.id">
      <hr>
      <div class="ticket">
        <div class="problem">
          <p>{{ ticket.problem }}</p>
          <p><i>-- {{ ticket.name }}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}
</script>
