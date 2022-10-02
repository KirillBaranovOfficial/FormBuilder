<template>
  <form class="form-builder" role="form">
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

import type {
  ExtraModel,
  Model,
  Schema,
} from "@/components/core/FormBuilder/types";

import FormLevel from "@/components/core/FormBuilder/Blocks/FormLevel/FormLevel.vue";
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
  extraModel: {
    type: Object as PropType<ExtraModel>,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (modelPath: string, value: any) => {
  const proxyModel = _.cloneDeep(props.model);
  _.set(proxyModel, modelPath, value);

  emit("update:modelValue", proxyModel);
};
</script>
