import { render } from "@testing-library/react";
import CustomSelect from "./CustomSelect";

describe("Select Component", () => {
  test("should match snapshot", () => {
    const { container } = render(<CustomSelect />);
    expect(container).toMatchSnapshot();
  });
});
