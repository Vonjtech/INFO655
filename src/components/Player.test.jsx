
import { render, screen, fireEvent } from "@testing-library/react";
import Player from "../Player";

describe("Player Component", () => {
  const mockSetStatus = jest.fn();
  const mockPlaylist = [
    { title: "Song 1" },
    { episodeTitle: "Podcast 1" },
  ];

  beforeEach(() => {
    mockSetStatus.mockClear();
  });

  test("renders playlist items correctly", () => {
    render(<Player playlist={mockPlaylist} setStatus={mockSetStatus} />);
    
    expect(screen.getByText("Song 1")).toBeInTheDocument();
    expect(screen.getByText("Podcast 1")).toBeInTheDocument();
  });

  test("handles play/pause button click", () => {
    render(<Player playlist={mockPlaylist} setStatus={mockSetStatus} />);
    fireEvent.click(screen.getByText("Play/Pause"));
    expect(mockSetStatus).toHaveBeenCalled();
  });

  test("handles next button click", () => {
    render(<Player playlist={mockPlaylist} setStatus={mockSetStatus} />);
    fireEvent.click(screen.getByText("Next"));
    expect(mockSetStatus).toHaveBeenCalled();
  });

  test("handles prev button click", () => {
    render(<Player playlist={mockPlaylist} setStatus={mockSetStatus} />);
    fireEvent.click(screen.getByText("Prev"));
    expect(mockSetStatus).toHaveBeenCalled();
  });

  test("handles shuffle button click", () => {
    render(<Player playlist={mockPlaylist} setStatus={mockSetStatus} />);
    fireEvent.click(screen.getByText("Shuffle"));
    expect(mockSetStatus).toHaveBeenCalled();
  });
});
