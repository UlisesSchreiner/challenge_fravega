
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInformation } from '../../../../../redux/actions/pokeListAction';

export default function (params) {
    const dispatch = useDispatch();

    const next_previus = (_state) => {
        let offset = _state ? params.state.pagination.offset + 5 : params.state.pagination.offset - 5

        params.setState({
            ...params.state,
            pagination: {
                ...params.state.pagination,
                offset: offset
            }
        })
        dispatch(fetchInformation(offset))
    }

    const pagination_number = (_number) => {
        params.setState({
            ...params.state,
            pagination: {
                ...params.state.pagination,
                offset: _number
            }
        })
        dispatch(fetchInformation(_number))
    } 


    const initial_pagination = () => {
        return (
            <Fragment>
                <li className="page-item active"><a className="page-link" href="#">{params.state.pagination.offset}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset + 5)}><a className="page-link" href="#">{params.state.pagination.offset + 5}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset + 10)}><a className="page-link" href="#">{params.state.pagination.offset + 10}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset + 15)}><a className="page-link" href="#">{params.state.pagination.offset + 15}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset + 20)}><a className="page-link" href="#">{params.state.pagination.offset + 20}</a></li>
            </Fragment>
        )
    }

    const normal_pagination = () => {
        return (
            <Fragment>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset - 10)}><a className="page-link" href="#">{params.state.pagination.offset - 10}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset - 5)}><a className="page-link" href="#">{params.state.pagination.offset - 5}</a></li>
                <li className="page-item active"><a className="page-link" href="#">{params.state.pagination.offset}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset + 5)}><a className="page-link" href="#">{params.state.pagination.offset + 5}</a></li>
                <li className="page-item" onClick={() => pagination_number(params.state.pagination.offset + 10)}><a className="page-link" href="#">{params.state.pagination.offset + 10}</a></li>
            </Fragment>
        )
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={params.state.pagination.offset == 0 ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true" onClick={() => next_previus(false)}>Previous</a>
                </li>
                {params.state.pagination.offset < 5 ? (
                    initial_pagination()
                ) : (
                    normal_pagination()
                )}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => next_previus(true)}>Next</a>
                </li>
            </ul>
        </nav>
    )
}