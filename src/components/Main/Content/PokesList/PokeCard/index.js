import './style.css';

export default function PokeCard(params) {

    return (
        <div className="col-12">
            <div className="p-2">
                <div className="card">
                    <h5 className="card-header">{params.pokemon.name}</h5>
                    <div className="card-body">
                        <div className="d-flex justify-content-end">
                            <a href="#" className="btn btn-primary" onClick={() => params.refresh_visor(params.pokemon.name)}>Ver detalles <i className="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}