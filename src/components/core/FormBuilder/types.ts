import type { Level } from "@/components/core/FormBuilder/Blocks/FormLevel/types";

export type Model = Record<string, any>;
export type ExtraModel = Record<string, any>;
export interface UpdateModelValuePayload {
  modelPath: string;
  value: any;
}

export type Schema = Level[];
