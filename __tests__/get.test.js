import get from "../src/get.js";

describe("get()", () => {
  test("pitäisi palauttaa oikea arvo polusta", () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, "a[0].b.c")).toBe(3);
  });

  test("pitäisi palauttaa defaultValue, jos arvo puuttuu", () => {
    const obj = { a: { b: 2 } };
    expect(get(obj, "a.b.c", "default")).toBe("default");
  });

  test("pitäisi toimia array-polulla", () => {
    const obj = { a: [{ b: 5 }] };
    expect(get(obj, ["a", "0", "b"])).toBe(5);
  });
});
