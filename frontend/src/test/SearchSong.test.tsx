/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { SearchSong } from "../pages/HomePage/components/SearchSong/SearchSong";

test("SearchSong component is rendering properly?", () => {
  render(<SearchSong />);
});

test("SearchSong has input field for search query?", () => {
  render(<SearchSong />);
  expect(screen.getByTestId("input-search-query")).not.toBeNull();
});

test("SearchSong has Get Song Button?", () => {
  render(<SearchSong />);
  expect(screen.getByText("Get Song")).not.toBeNull();
});
