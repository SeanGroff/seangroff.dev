import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";

// @ts-ignore-next-line
import AboutPage from "../routes/about/+page.svx";

describe("first test", () => {
  it("should render", () => {
    render(AboutPage);

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });
});
