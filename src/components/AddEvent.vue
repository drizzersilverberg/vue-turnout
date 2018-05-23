<template lang="html">
  <div>
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="text" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from '../firebaseApp'

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: ''
      },
      showForm: false
    }
  },

  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event)
    }
  }
}
</script>

<style lang="css">
</style>
