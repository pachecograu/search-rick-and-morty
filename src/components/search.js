import '../styles/search.css';
import '../styles/App.css';
import {useState} from 'react';

function Search(props) {
    const {getCharactersSearch} = props;
    let [name, setName] = useState('');
    return (
        <div className="app-col-lg">
            <div className="app-col-lg-90 app-col-md-90 app-col-sm-90 app-col-xs-70 app-col-70">
                <input type="text" className="search-input" placeholder="Busca tu personaje" defaultValue={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="app-col-lg-10 app-col-md-10 app-col-sm-10 app-col-xs-30 app-col-30">
                <button className="search-button" onClick={() => getCharactersSearch(name)}>Buscar</button>
            </div>
        </div>
    );
}

export default Search;
