
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
        <div className="container contentHeigt pt-4">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 order-2 order-sm-2 order-md-1">
                    <div className="border rounded border-primary p-4">
                        <Paginator state={params.state} setState={params.setState}></Paginator>
                        <PokesList refresh_visor={refresh_visor}></PokesList>
                    </div>

                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 order-1 order-sm-1 order-md-2 mb-3">
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