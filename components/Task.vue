<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="toggleTask">{{ task.done ? "Undo" : "Done" }}</button>
      <button class="delete" @click="removeTask">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    task: {
      type: Object,
    },
  },
  methods: {
    toggleTask() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },
};
</script>
