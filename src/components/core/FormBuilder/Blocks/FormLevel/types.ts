import type { Field } from "@/components/core/FormBuilder/Blocks/FormField/types";
import type { BuildAllWidgets } from "@/components/core/FormBuilder/Widgets/widgets";

type AllFieldVariants = Field<BuildAllWidgets>;

type AllChildrenVariants =
  | AllFieldVariants[]
  | Array<AllFieldVariants[] | Level[]>
  | Level[];

export interface Level {
  /**
   * Service field
   */
  type: "level";

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
  children: AllChildrenVariants;
}
