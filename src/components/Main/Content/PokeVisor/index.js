import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './style.css';

export default function PokeViewer(params) {

    const store = useSelector(store => store);
    const { t, i18n } = useTranslation();

    return (
        <div className="p-4">
            <div className="visorBorder">
                <div className="d-flex justify-content-center p-2">
                    <div>
                        <div style={{ width: '300px' }}>

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
                        <p><strong>{t('WEIGTH')} </strong> {store.pokemonReducer.pokemon.weight} </p>
                        <p><strong>{t('HEIGHT')} </strong> {store.pokemonReducer.pokemon.height} </p>
                    </div>
                </div>

            </div>
        </div>
    )
}