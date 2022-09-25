import type { WidgetBaseParams } from "@/components/core/FormBuilder/Widgets/widgets";

export interface TextInput extends WidgetBaseParams {
  type: "TextInput";
  /**
   * Special mask for value
   * May using for tel number and etc.
   * @Example: +7(999)-999-99-99 where 9 - max allowed value.
   */
  mask?: string;
}
