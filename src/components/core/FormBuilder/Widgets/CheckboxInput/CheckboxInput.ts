import type { WidgetBaseParams } from "@/components/core/FormBuilder/Widgets/widgets";

export interface CheckboxInput extends WidgetBaseParams {
  type: "OrgCheckbox";

  /**
   * LabelPosition
   * left - your label here - [x]
   * right - [x] - your label here
   */
  labelPosition?: "left" | "right";

  /**
   * True value
   * By default - true (bool)
   */
  trueValue?: string | number | boolean;

  /**
   * False value
   * By default - false (bool)
   */
  falseValue?: string | number | boolean;
}
