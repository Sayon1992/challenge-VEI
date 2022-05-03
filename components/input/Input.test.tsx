import { fireEvent, render, waitFor } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("should match snapshot", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
  test("should show input and options of input when typed", async () => {
    const { getByTestId, getByText } = render(<Input />);
    const searchInput = getByTestId("autosuggest-trigger").querySelector(
      ".ant-select-selection-search-input"
    ) as HTMLInputElement;

    fireEvent.focus(searchInput!);

    fireEvent.change(searchInput!, { target: { value: "Bit" } });
    expect(searchInput?.value).toBe("Bit");

    fireEvent.click(getByText("Bitcoin"));

    await waitFor(() => {
      expect(document.querySelector(".ant-select-dropdown")).not.toBeNull();
    });
  });
});
