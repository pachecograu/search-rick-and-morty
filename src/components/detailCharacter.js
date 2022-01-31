import '../styles/detail-character.css'
import '../styles/App.css';
import flecha from '../img/fecha.png';

function DetailCharacter(props) {
    let { detailCharacter } = props;
    if (detailCharacter && detailCharacter.id) {
        return (
            <div className="app-col-lg">
                <div className="detail-contain">
                    <div className="detail-title">
                        Detalle
                    </div>
                    <div>
                        <div style={{ backgroundImage: 'url(' + detailCharacter.image + ')' }} className="detail-image" />
                    </div>
                    <p>
                        {detailCharacter.name}
                    </p>
                    <div className="detail-others">
                        <div>
                            - <small>{detailCharacter.gender}</small>
                        </div>
                        <div>
                            - <small>{detailCharacter.origin.name}</small>
                        </div>
                        <div>
                            - <small>{detailCharacter.episode.length} Episodios</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="app-col-lg">
                <div className="app-col-lg-100 detail-contain">
                    Selecciona un personaje
                    <div>
                        <img src={flecha} className="detail-flecha" alt="Click en detalles" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCharacter;
