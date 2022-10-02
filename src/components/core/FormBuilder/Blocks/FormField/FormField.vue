<template>
  <div class="form-field" :class="fieldClasses">
    <Component
      :is="renderWidget"
      v-model="proxyModelValue"
      v-bind="widgetProps"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import type { PropType, ComputedRef } from "vue";
import type { AllFieldVariants } from "@/components/core/FormBuilder/Blocks/FormLevel/types";
import type { ExtraModel, Model } from "@/components/core/FormBuilder/types";

import _ from "lodash";

import { getComponentByWidgetType } from "@/components/core/FormBuilder/Blocks/FormField/helpers";

const props = defineProps({
  field: {
    type: Object as PropType<AllFieldVariants>,
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

const modelPath = computed(() => props.field.modelPath);

const proxyModelValue = computed({
  get: () => _.get(props.model, modelPath.value),
  set: (next: any) =>
    emit("updateModelValue", {
      modelPath: modelPath.value,
      value: next,
    }),
});

const fieldClasses: ComputedRef<string | string[] | undefined> = computed(
  () => props.field.class
);

const renderWidget = computed(() =>
  getComponentByWidgetType(props.field.widget.type)
);

/**
 * @TODO: Make support passing context/extraModel in widget component.
 */
const widgetProps: ComputedRef<Record<string, any>> = computed(() => ({
  ...props.field.widget,
}));
</script>
