<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  userId: string().required("Required"),
  password: string().min(8, "Must be at least 8 characters").required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  userId: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
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
  <div class="flex justify-center items-center h-[100vh]">
    <UCard class="w-[25%]">
      <template #header>
        <Placeholder class="h-8">
          <h1 class="text-2xl font-bold">Login</h1>
        </Placeholder>
      </template>

      <Placeholder class="h-32">
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="UserId" name="userId">
            <UInput v-model="state.userId" />
            <!-- <div v-if="validateEmail(state.email)"></div> -->
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
        </UForm>
      </Placeholder>

      <template #footer>
        <Placeholder class="h-8">
          <UButton type="submit"> Submit </UButton>
        </Placeholder>
      </template>
    </UCard>
  </div>
</template>
