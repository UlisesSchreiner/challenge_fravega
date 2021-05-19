import PokeCard from './PokeCard';
import { useSelector, useDispatch } from 'react-redux';

export default function PokesList(params) {
    const store = useSelector(store => store);
    console.log(store)
    return (
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