import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CardOwned from './CardOwned';

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

it("Test : Card Owned Data", () => {
    {
        act(() => {
            const fakeData = {
                index: 1,
                id: 1,
                pokemon: 'Bulbasaur',
                nickname: 'Bambang',
                onClick: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
            }
            render(
                <CardOwned
                    key={fakeData.nickname}
                    index={fakeData.index}
                    id={fakeData.id}
                    pokemon={fakeData.pokemon}
                    nickname={fakeData.nickname}
                />
                , container)
        })
        expect(container).toMatchSnapshot()
    }
});
