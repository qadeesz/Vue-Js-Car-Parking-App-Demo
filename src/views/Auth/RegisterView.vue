<script setup>
import { onBeforeUnmount } from 'vue'
import { useRegister } from '@/stores/register'

const store = useRegister()

// console.log(store.handleSubmit())

onBeforeUnmount(store.resetForm)
</script>


<template>
  <form @submit.prevent="store.handleSubmit" novalidate>
    <div class="flex flex-col mx-auto md:w-96 w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
      <div class="flex flex-col gap-2mb-4">
        <label class="required" for="name">Name</label>
        <input
          :disabled="store.loading"
          v-model="store.form.name"
          type="text"
          name="name"
          id="name"
          class="form-input"
          autocomplete="name"
          required
        />
        <ValidationError :errors="store.errors" field="name" />
      </div>

      <div class="flex flex-col gap-2mb-4">
        <label class="required" for="email">Email</label>
        <input
          :disabled="store.loading"
          v-model="store.form.email"
          type="email"
          name="email"
          id="email"
          class="form-input"
          autocomplete="email"
          required
        />
        <ValidationError :errors="store.errors" field="email" />
      </div>

      <div class="flex flex-col gap-2mb-4">
        <label class="required" for="password">Password</label>
        <input
          :disabled="store.loading"
          v-model="store.form.password"
          type="password"
          name="password"
          id="password"
          class="form-input"
          autocomplete="new-password"
          required
        />
        <ValidationError :errors="store.errors" field="password" />
      </div>

      <div class="flex flex-col gap-2mb-4">
        <label class="required" for="password_confirmation">Password</label>
        <input
          :disabled="store.loading"
          v-model="store.form.password_confirmation"
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          class="form-input"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="border-t h-[1px] my-6"></div>

      <div class="flex flex-col pag-2">
        <button type="submit" class="btn btn-primary" :disabled="store.loading">
          <IconSpinner v-show="store.loading" /> Register
        </button>
      </div>
    </div>
  </form>
</template>