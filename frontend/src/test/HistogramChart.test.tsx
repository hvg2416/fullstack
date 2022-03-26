/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { HistogramChart } from "../pages/HomePage/components/HistogramChart/HistogramChart";

test("HistogramChart component is rendering properly?", () => {
  render(<HistogramChart songs={[]} />);
});

test("HistogramChart has title Histogram of Song Duration (seconds)?", () => {
  render(<HistogramChart songs={[]} />);
  expect(
    screen.getByText("Histogram of Song Duration (seconds)")
  ).not.toBeNull();
});
