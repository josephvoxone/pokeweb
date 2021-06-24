import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from './Header';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

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

it("Test : Header", () => {
    {
        act(() => {
            render(
                <Router>
                    <Header>
                        <NavLink exact to="/"></NavLink>
                    </Header>
                </Router>, container)

        })
        expect(container).toMatchSnapshot()
    }
});
