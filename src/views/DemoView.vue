<template>
  <main class="page page-demo">
    <h1>Demo FormBuilder</h1>

    <FormBuilder v-model="model" :schema="schema" />
  </main>
</template>

<script lang="ts" setup>
import type { Model, Schema } from "@/components/core/FormBuilder/types";
import type { Ref } from "vue";
import { ref } from "vue";
import FormBuilder from "@/components/core/FormBuilder/FormBuilder.vue";
import { demoSchema } from "@/schemas/demoSchema";

const model: Ref<Model> = ref({
  name: "test",
});

const schema: Ref<Schema> = ref([...demoSchema]);
</script>
