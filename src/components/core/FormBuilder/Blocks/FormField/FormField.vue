<template>
  <div class="form-field">
    <Component
      :is="renderWidget"
      :modelValue="modelValue"
      v-bind="widgetProps"
      @updateModelValue="updateModelValue"
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
import type { BuildAllWidgets } from "@/components/core/FormBuilder/Widgets/widgets";

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
const modelValue = computed(() => _.get(props.model, modelPath.value));
const renderWidget = computed(() =>
  getComponentByWidgetType(props.field.widget.type)
);

/**
 * @TODO: Make support passing context/extraModel in widget component.
 */
const widgetProps: ComputedRef<BuildAllWidgets> = computed(() => ({
  ...props.field.widget,
}));

const updateModelValue = (value: any) => {
  emit("updateModelValue", {
    modelPath,
    value,
  });
};
</script>
