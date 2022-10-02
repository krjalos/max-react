import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Heading from "./Heading";

describe("Greeting component", () => {
  test("Welcome to React testing | exists", () => {
    render(<Heading/>);
    const greetingElement = screen.getByText('Welcome to React testing', {exact: false});
    expect(greetingElement).toBeInTheDocument();
  });
  test("Lorem ipsum dolor sit amet. | exists before click ", () => {

    render(<Heading/>);
    const pElement = screen.getByText('Lorem ipsum dolor sit amet.');
    expect(pElement).toBeInTheDocument();
  });

  test('Text was changed | exists after click', () => {

    render(<Heading/>);

    const button = screen.getByText('Change Text')
    userEvent.click(button);

    const changedElement = screen.getByText('Text was changed');
    expect(changedElement).toBeInTheDocument();
  });

  test('Lorem ipsum dolor sit amet. | does NOT exist after click', () => {

    render(<Heading/>);

    const button = screen.getByText('Change Text')
    userEvent.click(button);

    const changedElement = screen.queryByText('Lorem ipsum dolor sit amet', {exact: false});
    expect(changedElement).toBeNull();
  });
});

