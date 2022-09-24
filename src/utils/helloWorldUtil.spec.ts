import { expect, test, describe } from "vitest";
import getHelloWorld from "@/utils/helloWorldUtil";

describe("HelloWorldUtil.spec.ts", () => {
  test("Should return 'HelloWorld'", () => {
    expect(getHelloWorld()).toBe("Hello World");
  });
});
