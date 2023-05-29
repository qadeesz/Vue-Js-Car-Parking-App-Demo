<template>
    <form @submit.prevent="() => {}" novalidate>
        <div class="flex flex-col mx-auto md:w-96 w-full">
            <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
            <div class="flex flex-col gap-2mb-4">
                <label for="name">Name</label>
                <input type="text" name="name" id="name"
                class="form-input"
                autocomplete="name"
                required />
            </div>

            <div class="flex flex-col gap-2mb-4">
                <label for="email">Email</label>
                <input type="email" name="email" id="email"
                class="form-input"
                autocomplete="email"
                required />
            </div>

            <div class="flex flex-col gap-2mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password"
                class="form-input"
                autocomplete="new-password"
                required />
            </div>

            <div class="flex flex-col gap-2mb-4">
                <label for="password_confirmation">Password</label>
                <input type="password" name="password_confirmation" id="password_confirmation"
                class="form-input"
                autocomplete="new-password"
                required />
            </div>

            <div class="border-t h-[1px] my-6"></div>

            <div class="flex flex-col pag-2">
                <button type="button" class="btn btn-primary">Register</button>
            </div>

        </div>
    </form>
</template>