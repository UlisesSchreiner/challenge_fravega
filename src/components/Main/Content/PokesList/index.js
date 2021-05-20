import PokeCard from './PokeCard';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

export default function PokesList(params) {
    const store = useSelector(store => store);
    console.log(store)
    return (
        <div>
            {
                store.pokeListReducer.isFetching ? (
                    <div class="text-center">
                        <div class="spinner-border m-5" role="status">
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {
                            store.pokeListReducer.pokeList.results ? (
                                store.pokeListReducer.pokeList.results.map(poke => {
                                    return <PokeCard pokemon={poke} key={poke.name} refresh_visor={params.refresh_visor}></PokeCard>
                                })
                            ) : (null)
                        }
                    </div>
                )
            }
        </div>
    )
}