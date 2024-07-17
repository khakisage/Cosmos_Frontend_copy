<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  userId: string().required("Required"),
  password: string().min(8, "Must be at least 8 characters").required("Required"),
  userName: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  userId: undefined,
  password: undefined,
  userName: undefined,
  email: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  // console.log(event.data.email);
  // 회원가입 요청.
  const response = await $fetch("http://localhost:3001/user", {
    method: "POST",
    body: JSON.stringify(event.data),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

// async function validateEmail(email: string) {
//   try {
//     await schema.validateAt("email", { email });
//     return true;
//   } catch (error) {
//     return false;
//   }
// }
</script>

<template>
  <div class="flex justify-center flex-col items-center h-[100vh]">
    <div class="">회원가입</div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="UserId" name="userId">
        <UInput v-model="state.userId" />
        <!-- <div v-if="validateEmail(state.email)"></div> -->
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UFormGroup label="UserName" name="userName">
        <UInput v-model="state.userName" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>
