/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { SongTable } from "../pages/HomePage/components/SongTable/SongTable";

test("SongTable component is rendering properly?", () => {
  render(<SongTable songs={[]} rateSong={() => {}} />);
});

test("SongTable component has download table links?", () => {
  render(<SongTable songs={[]} rateSong={() => {}} />);
  expect(screen.getByTestId("download-btn-1")).not.toBeNull();
  expect(screen.getByTestId("download-btn-2")).not.toBeNull();
});
