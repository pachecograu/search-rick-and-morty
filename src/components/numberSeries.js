import '../styles/number-series.css'
import '../styles/App.css'

function NumberSeries(props) {
    let { numberLocation, numberCharacter, numberEpisodies } = props;
    return (
        <div className="app-col-lg">
            <div className="app-col-lg-100 series-contain">
                <div className="app-col-lg-20 app-col-xs-100 app-col-100">
                    <span className="series-p-l">La serie en Numeros:</span>
                </div>
                <div className="app-col-lg-20 app-col-xs-30 app-col-100 series-item">
                    {numberEpisodies} Numero de episodios
                </div>
                <div className="app-col-lg-30 app-col-xs-30 app-col-100 series-item">
                    {numberLocation} Numero de locations
                </div>
                <div className="app-col-lg-30 app-col-xs-30 app-col-100 series-item">
                    {numberCharacter} Numero de personajes
                </div>
            </div>
        </div>
    );
}

export default NumberSeries;
