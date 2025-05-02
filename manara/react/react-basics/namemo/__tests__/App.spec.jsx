import { describe, expect, test, vi } from "vitest";
import App from "../src/App";
import data from "../src/data";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../src/components/Card";

test("App initial render", () => {
  render(<App />);

  expect(screen.getByTestId("bg-video")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "music_off" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Naruto Memory" })
  ).toBeInTheDocument();
});

describe("Welome layout user interaction", () => {
  test("music button interation", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "music_off" }));

    expect(
      screen.getByRole("button", { name: "music_note" })
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "music_off" })).toBeNull();
  });

  test("play button interation", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "Play" }));

    expect(screen.queryByRole("button", { name: "Play" })).toBeNull();
    expect(screen.queryByRole("heading", { name: "Naruto Memory" })).toBeNull();
    expect(screen.queryAllByTestId("card").length).toEqual(data.length);
    expect(screen.queryByRole("settings")).toBeInTheDocument();
    expect(screen.queryByRole("scores")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "music_off" })
    ).toBeInTheDocument();
  });
});

describe("Playing layout user interaction", () => {
  test("settings user interation", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "Play" }));
    await user.click(screen.getByRole("settings"));

    expect(screen.getByRole("modal")).toBeInTheDocument();
  });

  test("card play", async () => {
    render(<Card name={""} img={""} flip={true} onSelect={vi.fn()} />);

    expect(screen.getByTestId("innerCard")).toHaveClass("flip");
  });
});
