import { render, screen } from "@testing-library/react";
import Song from "../Song";

describe("Song Component", () => {
  test("renders song details correctly", () => {
    render(<Song title="Imagine" artist="John Lennon" year="1971" />);
    
    expect(screen.getByText("🎶 Imagine")).toBeInTheDocument();
    expect(screen.getByText(/Artist: John Lennon/)).toBeInTheDocument();
    expect(screen.getByText(/Year: 1971/)).toBeInTheDocument();
  });
});
