<template>
  <div class="widget widget__text-input">
    <input type="text" v-model="proxyModelValue" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import _ from "lodash";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const proxyModelValue = computed({
  get: () => props.modelValue,
  set: (next: string | number | null) => {
    if (!_.isEqual(next, proxyModelValue)) {
      emit("update:modelValue", next);
    }
  },
});
</script>
