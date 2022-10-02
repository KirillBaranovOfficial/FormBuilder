import type { Field } from "@/components/core/FormBuilder/Blocks/FormField/types";
import type { BuildAllWidgets } from "@/components/core/FormBuilder/Widgets/widgets";

type AllFieldVariants = Field<BuildAllWidgets>;

type AllChildrenVariants =
  | AllFieldVariants[]
  | Array<AllFieldVariants[] | Level[]>
  | Level[];

interface LevelHeader {
  title: string;
  class?: string | string[];
  template?: string;
}

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

  header?: LevelHeader;

  /**
   * Children nodes
   */
  children: AllChildrenVariants;
}
