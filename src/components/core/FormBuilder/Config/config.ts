import type { WidgetConfig } from "@/components/core/FormBuilder/Config/types";

export const widgetsConfig: Map<string, WidgetConfig> = new Map([
  [
    "CheckboxInput",
    {
      template: () =>
        import("@/components/ui/Widgets/CheckboxInput/CheckboxInput.vue"),
    },
  ],
  [
    "TextInput",
    {
      template: () => import("@/components/ui/Widgets/TextInput/TextInput.vue"),
    },
  ],
]);
