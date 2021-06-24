import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';

import PokeList from './PokeList';
import { QUERY_LIST } from '../service/queries/Pokemon';

const mocks = [
    {
        request: {
            query: QUERY_LIST,
        },
        result: {
            data: {
                pokemons: {
                    results: [
                        {
                            name: "bulbasaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        },
                    ]
                }
            }
        },
    },
];


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

it("Test : Poke List Page", () => {
    {
        act(() => {
            render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <PokeList />
                </MockedProvider>
                , container)
        })
        expect(container).toMatchSnapshot()
    }
});
