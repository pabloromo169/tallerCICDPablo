import { render,screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import App from "./App";

vi.mock("/vite.svg", () => ({
    default: "/vite.svg"
}))

test("Verifica titulo principal", () => {
    render(<App />);
    const linkElement = screen.getByText(/Bienvenido/i);
    expect(linkElement).toBeInTheDocument();
});