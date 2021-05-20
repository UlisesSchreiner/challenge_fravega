import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './style.css';
import PropertiesVisor from './PropertiesVisor';
import { Fragment } from 'react';

export default function PokeViewer(params) {

    const store = useSelector(store => store);
    const { t, i18n } = useTranslation();

    let abilitiesList = () => {
        let res_arr = [];
        store.pokemonReducer.pokemon.abilities.forEach(element => {
            res_arr.push(element.ability.name)
        });
        return res_arr;
    }

    let movesList = () => {
        let res_arr = [];
        store.pokemonReducer.pokemon.moves.forEach(element => {
            res_arr.push(element.move.name)
        });
        return res_arr;
    }

    let gamesList = () => {
        let res_arr = [];
        store.pokemonReducer.pokemon.moves.forEach(element => {
            res_arr.push(element.move.name)
        });
        return res_arr;
    }

    return (
        <div className="p-4">
            <div className="visorBorder">

                { store.pokemonReducer.isFetching ? (
                    <div class="text-center">
                        <div class="spinner-border m-5" role="status"></div>
                    </div>
                ) : (
                    <Fragment>
                        <div className="d-flex justify-content-center p-2">
                            <div>
                                <div className="carouserWidth">

                                    <div id="carouselExampleControls" className="carousel slide justify-content-center" data-bs-ride="carousel">
                                        <div className="carousel-inner d-flex justify-content-center">
                                            <div className="carousel-item active">
                                                <img src={store.pokemonReducer.pokemon.sprites.front_default}></img>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={store.pokemonReducer.pokemon.sprites.back_default}></img>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={store.pokemonReducer.pokemon.sprites.front_shiny}></img>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <i style={{ color: 'blue' }} className="fa fa-chevron-left fa-2x"></i>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <i style={{ color: 'blue' }} className="fa fa-chevron-right fa-2x"></i>
                                        </button>
                                    </div>

                                </div>

                                <div className="text-primary text-center">
                                    <h2>{store.pokemonReducer.pokemon.name}</h2>
                                </div>
                            </div>
                        </div>
                        <hr className="m-2"></hr>
                        <div className="row">
                            <div className="col-6">
                                <div className="p-1">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-primary" scope="col">{t('CHARACT')}</th>
                                                <th className="text-primary" scope="col">{t('VALUE')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t('WEIGTH')}</td>
                                                <td>{store.pokemonReducer.pokemon.weight}</td>
                                            </tr>
                                            <tr>
                                                <td>{t('HEIGHT')}</td>
                                                <td>{store.pokemonReducer.pokemon.height}</td>
                                            </tr>
                                            <tr>
                                                <td>{t('BASE_EXPERIENCE')}</td>
                                                <td>{store.pokemonReducer.pokemon.base_experience}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-6">
                                {
                                    abilitiesList().length > 0 ? (
                                        <PropertiesVisor key_id={'abilities'} title={t('ABILITIES')} list={abilitiesList()}></PropertiesVisor>
                                    ) : (null)
                                }
                                {
                                    movesList().length > 0 ? (
                                        <PropertiesVisor key_id={'moves'} title={t('MOVES')} list={movesList()}></PropertiesVisor>
                                    ) : (null)
                                }
                                {
                                    gamesList().length > 0 ? (
                                        <PropertiesVisor key_id={'games'} title={t('GAMES')} list={gamesList()}></PropertiesVisor>
                                    ) : (null)
                                }
                            </div>
                        </div>
                    </Fragment>)}

            </div>
        </div>

    )
}