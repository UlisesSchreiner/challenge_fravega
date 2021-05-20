import { useState } from 'react';
import './style.css';
import $ from 'jquery';

export default function PropertiesVisor(params) {

    const [listDesplegated, setListDesplegated] = useState(false);

    const clickInButton = () => {
        if (listDesplegated) { // cerrar
            if ($('#' + params.key_id + '-list').is(':visible')) {
                $('#' + params.key_id + '-list').toggle(500);
            }
        } else {
            if (!$('#' + params.key_id + '-list').is(':visible')) {
                $('#' + params.key_id + '-list').toggle(500);
            }
        }
        setListDesplegated(listDesplegated ? false : true);
    }

    return (
        <div className="propiertyViewer">
            <div className="p-2">
                <div className="d-flex justify-content-center">
                    <button onClick={clickInButton} type="button" class="btn btn-light propertyButton"><p className="text-primary propiertyTitle">{params.title} <i className={listDesplegated ? 'fa fa-arrow-down' : 'fa fa-arrow-right'}></i></p></button>
                </div>
                <div className="propertyList" id={params.key_id + '-list'} style={{ display: 'none' }}>
                    <ul className="mt-2">
                        {
                            params.list.map(e => {
                                return <li><p>{e}</p></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}