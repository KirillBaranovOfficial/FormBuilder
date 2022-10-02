import { describe, test, expect } from "vitest";

import { generateUniqueId } from "@/utils/generators/generateUniqueId";

describe("generateUniqueId.spec.ts", () => {
  test("Should generate unique ID", () => {
    expect(generateUniqueId(6)).toHaveLength(6);
  });

  test("Should be unique on every call", () => {
    const firstValue = generateUniqueId(6);
    const secondValue = generateUniqueId(6);
    expect(firstValue !== secondValue).toBe(true);
  });
});
