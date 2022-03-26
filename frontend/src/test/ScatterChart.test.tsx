/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { ScatterChart } from "../pages/HomePage/components/ScatterChart/ScatterChart";

test("ScatterChart component is rendering properly?", () => {
  render(<ScatterChart songs={[]} />);
});

test("ScatterChart has title Song Danceability Scatter Plot?", () => {
  render(<ScatterChart songs={[]} />);
  expect(screen.getByText("Song Danceability Scatter Plot")).not.toBeNull();
});
