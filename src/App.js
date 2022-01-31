import './styles/App.css';
import logo from './img/Rick_and_Morty.png';
import Search from './components/search';
import NumberSeries from './components/numberSeries';
import ListCharacters from './components/listCharacters';
import DetailCharacter from './components/detailCharacter';
import api from './services/api';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const { character, detail, paginator } = api;
    let [msjError, setMsjError] = useState({
        data: {
            error: ""
        }
    });
    let [list, setList] = useState({
        info: { next: '', count: 0 },
        results: []
    });
    let [locations, setLocations] = useState({
        info: { count: 0 },
        results: []
    });
    let [episodies, setEpisodies] = useState({
        info: { count: 0 },
        results: []
    });
    let [detailCharacter, setDetailCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    async function getCharacters(name) {
        console.log('buscando');
        setMsjError({
            data: {
                error: ""
            }
        });
        let res = await character.fn(name);
        if (!!res.success && res.success.info) {
            setList(res.success);
        } else {
            setMsjError(res.error);
        }
    }
    async function getDetail(id) {
        console.log('buscando');
        setMsjError({
            data: {
                error: ""
            }
        });
        let res = await detail.fn(id);
        if (!!res.success && res.success.info) {
            setDetailCharacter(res.success);
        } else {
            setMsjError(res.error);
        }
    }
    async function getPaginator(url, number) {
        console.log('buscando');
        setMsjError({
            data: {
                error: ""
            }
        });
        let res = await paginator.fn(url, number);
        if (!!res.success && res.success.info) {
            setList(res.success);
        } else {
            setMsjError(res.error);
        }
    }

    function getNumber(type) {
        setLoading(true);
        axios({
            method: 'get',
            url: api.urlBase + api[type].url
        }).then(function (response) {
            switch (type) {
                case 'character':
                    setList(response.data);
                    break;
                case 'location':
                    setLocations(response.data);
                    break;
                case 'episode':
                    setEpisodies(response.data);
                    break;
                default:
                    break;
            }
            setLoading(false)
        }).catch(function (error) { });
    }

    useEffect(() => {
        getNumber('character');
        getNumber('location');
        getNumber('episode');
    }, []);

    return (
        <div className="app-container">
            <header className="app-header" >
                <div className="app-msj-error" style={{display: msjError.data.error ? 'block' : 'none'}}>{msjError.data.error}</div>
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <div className="app-body">
                <Search getCharactersSearch={getCharacters} />
                <NumberSeries numberCharacter={list.info.count} numberLocation={locations.info.count} numberEpisodies={episodies.info.count} />
                <div className="app-col">
                    <div className="app-col-lg-70 app-col-md-70 app-col-sm-70 app-col-xs-100 app-col-100">
                        <ListCharacters listCharacters={list} getDetailCharacter={getDetail} getPaginator={getPaginator} />
                    </div>
                    <div className="app-col-lg-30 app-col-md-30 app-col-sm-30 app-col-xs-100 app-col-100">
                        <DetailCharacter detailCharacter={detailCharacter} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;