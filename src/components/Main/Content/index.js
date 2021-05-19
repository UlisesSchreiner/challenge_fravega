
import './style.css';
import { fetchInformation } from '../../../redux/actions/pokeListAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PokesList from './PokesList';
import Paginator from './PokesList/Paginator';
import PokeVisor from './PokeVisor';
import $ from 'jquery';
import { fetchPokemon } from '../../../redux/actions/pokemonAction';


export default function Content(params) {

    const store = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInformation(params.state.pagination.offset))
    }, [])

    const refresh_visor = (_name) => {

        if (!$('#pokeVisor').is(':visible')) {
            $('#pokeVisor').toggle(500);
        }

        dispatch(fetchPokemon(_name))

    }

    return (
        <div className="container contentHeigt">
            <div className="row">
                <div className="col-4">
                    <div className="border rounded border-primary p-4">
                        <Paginator state={params.state} setState={params.setState}></Paginator>
                        <PokesList refresh_visor={refresh_visor}></PokesList>
                    </div>

                </div>
                <div className="col-6">
                    <div id="pokeVisor" style={{ display: 'none' }}>
                        {
                            store.pokemonReducer.pokemon.sprites ? (
                                <PokeVisor></PokeVisor>
                            ) : (null)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}