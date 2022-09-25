import type { Schema } from "@/components/core/FormBuilder/types";
import type { Field } from "@/components/core/FormBuilder/Blocks/FormField/types";
import type { TextInput } from "@/components/core/FormBuilder/Widgets/TextInput/TextInput";

const name: Field<TextInput> = {
  type: "field",
  modelPath: "name",
  widget: {
    type: "TextInput",
    placeholder: "Write your name here...",
  },
};

export const demoSchema: Schema = [
  {
    type: "level",
    children: [name],
  },
];
