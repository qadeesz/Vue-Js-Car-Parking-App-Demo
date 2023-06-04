import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useChangePassword = defineStore('change-password', () => {
  const errors = reactive({})
  const loading = ref(false)
  const status = ref('')

  const form = reactive({
    current_password: '',
    password: '',
    password_confirmation: ''
  })

  function resetForm() {
    form.current_password = ''
    form.password = ''
    form.password_confirmation = ''

    errors.value = {}
    status.value = ''
  }

  async function updatePassword() {
    loading.value = true
    errors.value = {}
    status.value = ''
    return window.axios
      .put('password', form)
      .then((response) => {
        // console.log(response);
        form.name = response.data.name
        form.email = response.data.email
        status.value = 'Password has been Updated'
      })
      .catch((error) => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
      .finally(() => {
        form.current_password = ''
        form.password = ''
        form.password_confirmation = ''

        loading.value = false
      })
  }

  return { form, errors, loading, resetForm, status, updatePassword }
})
