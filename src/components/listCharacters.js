import '../styles/list-characters.css'
import '../styles/App.css';

function ListCharacters({ listCharacters, getDetailCharacter, getPaginator }) {
    return (
        <div className="app-col-lg">
            {listCharacters.results.map((character) =>
                <div className="app-col-lg-50 app-col-sm-100 app-col-xs-100 app-col-100" key={character.id}>
                    <div className="app-col-lg-30 app-col-md-30 app-col-sm-30">
                        <div style={{backgroundImage: 'url(' + character.image+ ')'}} className="characters-image" />
                    </div>
                    <div className="app-col-lg-70 app-col-md-70 app-col-sm-70">
                        <div className="characters-contain">
                            <p style={{margin: '12px 0px'}}>
                                {character.name}
                            </p>
                            <div>
                                <small><div className={"characters-status " + character.status}></div> {character.status}</small>
                            </div>
                            <div>
                                <small>{character.species}</small>
                            </div>
                            <div className="characters-button-detail-container">
                                <button className="characters-button" onClick={() => getDetailCharacter(character.id)} >Detalle</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="app-col-lg ">
                <div className="app-col-lg-10 app-col-md-10 app-col-sm-10 app-col-xs-10 app-col-10"></div>
                <div className="app-col-lg-60 app-col-md-70 app-col-sm-60 app-col-xs-70 characters-button-container">
                    <button className="characters-button characters-button-paginator" onClick={() => getPaginator(listCharacters.info.prev, 1)} disabled={listCharacters.info.prev == null} >Inicio</button>
                    <button className="characters-button characters-button-paginator" onClick={() => getPaginator(listCharacters.info.prev)} disabled={listCharacters.info.prev == null} >Atras</button>
                    <button className="characters-button characters-button-paginator" onClick={() => getPaginator(listCharacters.info.next)} disabled={listCharacters.info.next == null} >Siguiente</button>
                    <button className="characters-button characters-button-paginator" onClick={() => getPaginator(listCharacters.info.next, listCharacters.info.pages)} disabled={listCharacters.info.next == null} >Fin</button>
                </div>
                <div className="app-col-lg-30 app-col-sm-20 app-col-sm-20 app-col-xs-10 app-col-10">{listCharacters.info.next == null ? listCharacters.info.pages : parseInt(listCharacters.info.next.split('=')[1]) - 1} de {listCharacters.info.pages} Paginas</div>
            </div>
        </div>
    );
}

export default ListCharacters;
