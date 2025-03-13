import { render, screen, waitFor } from "@testing-library/react";
import Playlist from "../Playlist";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { type: "song", title: "Imagine", artist: "John Lennon", year: "1971" },
        { type: "podcast", episodeTitle: "Tech Talks", season: 1, episode: 5 },
      ]),
  })
);

describe("Playlist Component", () => {
  beforeEach(() => {
    localStorage.clear();
    fetch.mockClear();
  });

  test("renders loading message before data is fetched", () => {
    render(<Playlist />);
    expect(screen.getByText("Loading playlist...")).toBeInTheDocument();
  });

  test("fetches and displays playlist items correctly", async () => {
    render(<Playlist />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    
    expect(screen.getByText("🎶 Imagine")).toBeInTheDocument();
    expect(screen.getByText("🎤 Tech Talks")).toBeInTheDocument();
  });

  test("saves and retrieves shuffled playlist from localStorage", async () => {
    const mockShuffledPlaylist = JSON.stringify([
      { type: "song", title: "Mock Song", artist: "Mock Artist", year: "2025" },
    ]);

    localStorage.setItem("shuffledPlaylist", mockShuffledPlaylist);
    
    render(<Playlist />);
    
    await waitFor(() =>
      expect(screen.getByText("🎶 Mock Song")).toBeInTheDocument()
    );
  });

  test("handles fetch failure gracefully", async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error("Fetch failed")));

    render(<Playlist />);
    
    await waitFor(() =>
      expect(console.error).toHaveBeenCalledWith("Error fetching playlist data:", expect.any(Error))
    );
  });
});
