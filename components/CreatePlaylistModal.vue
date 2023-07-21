<template>
  <div v-if="isModalOpen" class="modal-overlay">
    <div class="modal">
      <h2 class="text-white text-lg font-semibold mb-3">Create New Playlist</h2>
      <form @submit.prevent="createPlaylist">
        <div class="form-control">
          <label for="title" class="text-white block mb-1">Title:</label>
          <input
            v-model="playlistTitle"
            type="text"
            id="title"
            class="w-full rounded-sm border border-[#686868] p-2"
            required
          />
        </div>
        <div class="flex justify-end mt-4">
          <button type="submit" class="btn">Create</button>
          <button
            @click="closeModal"
            type="button"
            class="btn btn-secondary ml-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const playlistTitle = ref("");

function closeModal() {
  // Code to close the modal, you can use a ref or emit an event to the parent component.
  $emit("closeModal"); // Emit a custom event to close the modal in the parent component.
}

function createPlaylist() {
  // Code to handle creating a new playlist using the playlistTitle value.
  // You can emit an event to the parent component with the playlistTitle or use a state management library to save the playlist data.
  closeModal(); // Close the modal after creating the playlist.
}
</script>

<style>
.modal-overlay {
  /* Apply styles for the modal overlay, e.g., position, z-index, background color, etc. */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  /* Apply styles for the modal container, e.g., width, height, padding, background color, etc. */
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.form-control {
  /* Apply styles for form control elements, e.g., margin, padding, etc. */
}
</style>
