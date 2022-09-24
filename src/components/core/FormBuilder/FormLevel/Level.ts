import type { Field } from "@/components/core/FormBuilder/FormField/Field";

export interface Level {
  id?: string;

  class?: string | string[];

  blocks: Array<Level[] & Field[]>;
}
