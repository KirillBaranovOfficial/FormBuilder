import type { TextInput } from "@/components/core/FormBuilder/Widgets/TextInput/TextInput";
import type { CheckboxInput } from "@/components/core/FormBuilder/Widgets/CheckboxInput/CheckboxInput";

export type Widget<T> = T;

/**
 * Base supported params.
 */
export interface WidgetBaseParams {
  /**
   * Field label.
   * Default: empty string ('')
   */
  label?: string;

  /**
   * Field disable/enable state.
   */
  disabled?: boolean;

  /**
   * Field name (Should be unique)
   */
  name?: string;

  /**
   * Css class for field (by default displaying only form__field)
   * In DOM it's displaying like: 'form__field--your-class'
   */
  class?: string;

  /**
   * Field placeholder
   */
  placeholder?: string;
}

export type BuildAllWidgets = TextInput | CheckboxInput;
