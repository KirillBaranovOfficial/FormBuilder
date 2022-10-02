import type { Widget } from "@/components/core/FormBuilder/Widgets/widgets";

type Validation = any;

export interface Field<T> {
  type: "field";
  /**
   * Field ID (Should be unique)
   * If this field - empty will be generated auto
   * In For branch this ID will be prefixed like: your-id-{levelIndex}
   */
  id?: string;

  /**
   * Css class
   */
  class?: string;

  /**
   * ModelPath - path where FormBuilder will find a value.
   */
  modelPath: string;

  /**
   * Widget component
   */
  widget: Widget<T>;

  /**
   * Post-processing field
   * This function called once only when u use postProcessModel in builder
   * $refs.builder.postProcessModel() will return new processed model
   * @param v - value from model by modelPath.
   */
  postProcess?: (_v: any) => any;

  /**
   * @Warning: context had most priority on every prop.
   * Context that will be passed in every component
   * For example: you want to use text type for your TextInputComponent
   * Pass all not included params in context.
   */
  context?: Record<string, any>;

  /**
   * Validation object with rules, messages.
   *
   * Rules - special validation rules
   * @Example: required - will be checked field like required, in future will be added other rules (email, tel etc).
   *
   * Messages - object with [key]: 'Validation error message'.
   * @Example: {
   *     required: 'This field is required!'
   * }
   * About error message priority. For user will be displaying only first validation error.
   * In Cases when messages > 1 - will be showed only first msg, other messages will be ignored.
   */
  validation?: Validation;
}
