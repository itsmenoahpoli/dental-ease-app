<script lang="ts" setup>
import { FwbInput, FwbCheckbox, FwbButton } from "flowbite-vue";
import { ref, onMounted } from "vue";
import { useForm, type FieldOptions } from "vue-hooks-form";
import { useStorage, useDebounce } from "~/composables";
import { AuthService } from "~/services";
import type { Credentials } from "~/types/auth";

const { useField, handleSubmit } = useForm({
  defaultValues: {
    email: "admin@domain.com",
    password: "adminpassword",
  },
});
const { setStorageValue, getStorageValue } = useStorage();
const rememberMe = ref<boolean>(false);

const formFields = {
  email: useField("email", {
    rule: {
      required: true,
    },
  } as FieldOptions),
  password: useField("password", {
    rule: {
      required: true,
    },
  } as FieldOptions),
};

const onFormSubmit = handleSubmit(async (formData: unknown) => {
  if (rememberMe) {
    setStorageValue("remember-credentials", formData as Credentials);
    return await AuthService.login(formData as Credentials);
  }
});

const checkRememberMe = () => {
  const savedCredentials = getStorageValue<Credentials>("remember-credentials");

  if (savedCredentials) {
    formFields.email.value = savedCredentials.email;
    formFields.password.value = savedCredentials.password;
  }
};

onMounted(() => {
  checkRememberMe();
});
</script>

<template>
  <form @submit="onFormSubmit" class="flex flex-col gap-y-4 max-md:px-5">
    <h1 class="text-center text-xl font-bold">ADMIN DASHBOARD LOGIN</h1>

    <FwbInput type="email" v-model="formFields.email.value" :ref="formFields.email.ref" placeholder="Enter your e-mail" required autofocus error />
    <FwbInput type="password" v-model="formFields.password.value" :ref="formFields.password.ref" placeholder="Enter your password" required />
    <FwbCheckbox v-model="rememberMe" label="Remember me" />
    <FwbButton type="submit">SIGN IN</FwbButton>
    <FwbButton color="light">RESET YOUR PASSWORD</FwbButton>
  </form>
</template>

<style lang="scss" scoped></style>
