import type { Field } from "@/components/core/FormBuilder/Blocks/FormField/types";

export interface Level {
  /**
   * Level ID
   */
  id?: string;

  /**
   * Css class for level block
   */
  class?: string | string[];

  /**
   * Children nodes
   */
  children?: Array<Field[] | Level[]>;
}
