/*
 * @Author: Semmy Wong
 * @Date: 2024-12-27 22:46:19
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-30 14:05:42
 * @Description: Description
 */
import { describe, expect, it, jest } from "@jest/globals";

jest.spyOn(global.console, "log");

describe("@next-cms/logger", () => {
  it("prints a message", () => {
    expect(console.log).toHaveBeenCalled();
  });
});
