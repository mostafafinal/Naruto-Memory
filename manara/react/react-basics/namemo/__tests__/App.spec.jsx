import { describe, expect, test } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";

describe("App component suite", () => {
  test("on initial render", () => {
    render(<App />);

    expect(screen.getByTestId("bg-video")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "music_off" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Naruto Memory" })
    ).toBeInTheDocument();
  });
});
