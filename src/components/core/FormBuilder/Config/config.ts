import type { WidgetConfig } from "@/components/core/FormBuilder/Config/types";

import TextInput from "@/components/ui/Widgets/TextInput/TextInput.vue";
import CheckboxInput from "@/components/ui/Widgets/CheckboxInput/CheckboxInput.vue";

export const widgetsConfig: Map<string, WidgetConfig> = new Map([
  [
    "CheckboxInput",
    {
      template: CheckboxInput,
    },
  ],
  [
    "TextInput",
    {
      template: TextInput,
    },
  ],
]);
