import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export const useProfile = defineStore("profile", () => {
    const errors = reactive({});
    const loading = ref(false);
    const status = ref("");

    const form = reactive({
        name: "",
        email: "",
    });

    function resetForm() {
        form.email = "";
        form.name = "";
        errors.value = {};

    }

    async function fetchProfile() {
        return window.axios.get('profile').then((response) => {
            form.name = response.data.name;
            form.email = response.data.email;
        });
    }

    async function updateProfile() {

        loading.value = true;
        errors.value = {};
        status.value = "";
        return window.axios
            .put("profile", form)
            .then((response) => {
                // console.log(response);
                form.name = response.data.name;
                form.email = response.data.email;
                status.value = "Profile has been Updated";

            })
            .catch((error) => {
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors;
                }
            })
            .finally(() => {
                loading.value = false;
            });
    }

    return { form, errors, loading, resetForm, status, fetchProfile, updateProfile };

});