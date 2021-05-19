
import { useTranslation } from 'react-i18next';
import './style.css';


export default function NavBar(params) {

    const { t, i18n } = useTranslation();

    const onchangerLenguage = (_lng) => {
        console.log(_lng)
        i18n.changeLanguage(_lng);
    };

    return (
        <nav className="navbar navbar-light d-flex justify-content-around navBarHeigth">
            <a className="navbar-brand pokesTitle" href="#">Pokes</a>

            <div>
                <select className="form-select" value={t('LANGUAGE')}>
                    <option value={'English'} onClick={() => onchangerLenguage('en')}>English</option>
                    <option value={'Español'} onClick={() => onchangerLenguage('es')}>Español</option>
                </select>
            </div>

        </nav>
    )
}