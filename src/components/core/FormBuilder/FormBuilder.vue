<template>
  <form class="form-builder">
    <FormLevel
      v-for="level in schema"
      :level="level"
      :key="level.id"
      @updateModelValue="updateModelValue"
    />
  </form>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Schema } from "@/components/core/FormBuilder/Schema/schema";
import type { Model } from "@/components/core/FormBuilder/Model/types";

import FormLevel from "@/components/core/FormBuilder/FormLevel/FormLevel.vue";
import _ from "lodash";

const props = defineProps({
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  model: {
    type: Object as PropType<Model>,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (modelPath: string, value: any) => {
  const proxyModel = _.cloneDeep(props.model);
  _.set(proxyModel, modelPath, value);

  emit("update:modelValue", proxyModel);
};
</script>

<style lang="scss" scoped></style>
