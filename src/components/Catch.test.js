import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Catch from './Catch';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Test : Catch Pokemon", () => {
    {
        act(() => {
            const fakeData = {
                id: 1,
                name: 'Bulbasaur',
            }
            render(
                <Catch pokemon={fakeData}></Catch>
                , container)
        })
        expect(container).toMatchSnapshot()
    }
});
