<template>
  <div class="form-level">
    <div
      class="form-level__header"
      v-if="Boolean(level.header)"
      :class="{ [level.header.class]: level.header.class }"
    >
      <h6 class="form-level__header-title">{{ level.header.title }}</h6>
    </div>

    <div class="form-level__body">
      <FormField
        v-for="field in level.children"
        :field="field"
        :model="model"
        :extraModel="extraModel"
        :key="field.id"
        @updateModelValue="emit('updateModelValue', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormField from "@/components/core/FormBuilder/Blocks/FormField/FormField.vue";
import type { PropType } from "vue";
import type { Level } from "@/components/core/FormBuilder/Blocks/FormLevel/types";
import type { ExtraModel, Model } from "@/components/core/FormBuilder/types";

defineProps({
  level: {
    type: Object as PropType<Level>,
    required: true,
  },
  model: {
    type: Object as PropType<Model>,
    required: true,
  },
  extraModel: {
    type: Object as PropType<ExtraModel>,
    required: true,
  },
});

const emit = defineEmits(["updateModelValue"]);
</script>
