import { render, screen } from "@testing-library/react";
import Podcast from "../Podcast";

describe("Podcast Component", () => {
  test("renders podcast episode with season", () => {
    render(<Podcast season={1} episode={5} episodeTitle="Tech Talks" />);
    
    expect(screen.getByText("🎤 Tech Talks")).toBeInTheDocument();
    expect(screen.getByText("Season 1, Episode 5")).toBeInTheDocument();
  });

  test("renders podcast episode without season", () => {
    render(<Podcast episode={3} episodeTitle="Security Insights" />);
    
    expect(screen.getByText("🎤 Security Insights")).toBeInTheDocument();
    expect(screen.getByText("Episode 3")).toBeInTheDocument();
  });
});
