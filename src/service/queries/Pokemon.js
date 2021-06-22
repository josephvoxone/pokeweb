import { gql } from '@apollo/client';

export const QUERY_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
        id
        name
        stats {
            base_stat
            stat {
                name
            }
        }
        abilities {
            ability {
                name
            }
        }
        moves {
            move {
                name
            }
        }
        types {
            type {
                name
                }
            }
        }
    }
`

export const QUERY_LIST = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            results {
                id
                name
                image
            }
        }
    }
`