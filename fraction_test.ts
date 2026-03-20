import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("2/3 * 6/7 = 4/7 is roughly 0.57", () => {
    //Arrange
    const left = new Fraction(2, 3);
    const right = new Fraction(6, 7);

    // Act
    left.multiply(right);

    //Assert
    assertAlmostEquals(left.toFloat(0.01), 0.57);
    });

Deno.test("3/4 - 1/4 = 8/16 is 0.5", () => {
    // Arrange
    const left = new Fraction(3, 4);
    const right = new Fraction(1, 4);

    // Act
    left.subtract(right);

    // Assert
    assertEquals(left.toFloat(0.1), 0.5);
});

Deno.test("toString hat korrektes Format", () => {
    // Arrange
    const fraction = new Fraction(5, 8);

    // Act & Assert
    assertEquals(fraction.toString(), "5/8");
});

Deno.test("parse correctly parses valid fraction string", () => {
    // Act
    const fraction = Fraction.parse(" 7 / 9 ");

    // Assert
    assertEquals(fraction.toString(), "7/9");
});
