/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { BarChart } from "../pages/HomePage/components/BarChart/BarChart";

test("BarChart component is rendering properly?", () => {
  render(<BarChart songs={[]} />);
});

test("BarChart has title Bar Chart for Acoustics & Tempo of songs?", () => {
  render(<BarChart songs={[]} />);
  expect(
    screen.getByText("Bar Chart for Acoustics & Tempo of songs")
  ).not.toBeNull();
});
