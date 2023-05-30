<script setup>
import { onBeforeUnmount } from 'vue'
import { useLogin } from '@/stores/login'

const store = useLogin()

onBeforeUnmount(store.resetForm)
</script>


<template>
  <form @submit.prevent="store.handleSubmit" novalidate>
    <div class="flex flex-col mx-auto md:w-96 w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>

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
        <label class="flex gap-2 items-center hover:cursor-pointer" for="remember">
          <input
            v-model="store.form.remember"
            class="w-4 h-4"
            :disabled="store.loading"
            type="checkbox"
          />
          <span class="select-none">Remember me</span>
        </label>
      </div>

      <div class="border-t h-[1px] my-6"></div>

      <div class="flex flex-col pag-2">
        <button type="submit" class="btn btn-primary" :disabled="store.loading">
          <IconSpinner v-show="store.loading" /> Login
        </button>
      </div>
    </div>
  </form>
</template>