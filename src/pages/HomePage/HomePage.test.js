import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
  test("renders loading message when fetching Pokémon", async () => {
    render(<HomePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error message when fetch fails", async () => {
    // Mock axios.get to throw an error
    jest.spyOn(axios, "get").mockRejectedValueOnce(new Error("Network Error"));

    render(<HomePage />);
    await waitFor(() =>
      expect(
        screen.getByText("Failed to fetch Pokémon data")
      ).toBeInTheDocument()
    );
  });

  test("renders Pokémon grid when fetch succeeds", async () => {
    // Mock axios.get to return successful response
    const mockResponse = {
      data: {
        results: [
          {
            name: "charizard",
            url: "https://api.example.com/pokemon/charizard",
          },
          { name: "pikachu", url: "https://api.example.com/pokemon/pikachu" },
        ],
      },
    };
    jest.spyOn(axios, "get").mockResolvedValue(mockResponse);

    render(<HomePage />);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
  });
});
