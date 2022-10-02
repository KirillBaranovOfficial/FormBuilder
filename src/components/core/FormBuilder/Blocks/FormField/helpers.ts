import type { Component } from "vue";
import { widgetsConfig } from "@/components/core/FormBuilder/Config/config";

export const getComponentByWidgetType = (widgetType: string): Component => {
  if (!widgetsConfig.has(widgetType)) {
    throw new Error(`Can't find component with type: ${widgetType}`);
  }

  return widgetsConfig.get(widgetType)!.template;
};
