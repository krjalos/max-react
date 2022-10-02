import {render, screen} from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test('Renders posts if fetch sucseeds', async () => {

    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json:async () => [{id:"p1", title:"First Post"},{id:"p2", title:"Second Post"} ]
    });


    render(<Async/>);

    const postList = await screen.findAllByRole('listitem');
    expect(postList).not.toHaveLength(0);
  })
});