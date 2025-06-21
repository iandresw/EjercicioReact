import UseCuadratica from "../hooks/UseCuadratica"

const Cuadratica = () =>{
    const {
        numA,
        setnumA,
        numB,
        setnumB,
        numC,
        setnumC,
        resultado,
        Cuadratica,
        Limpia,
    } = UseCuadratica()

    return(
        <div className="container mt-5 text-center items-center">
            <div className="row justify-content-center">
                <div className="col-12 mb-3 ">
                    <label className="form-label">Ingrese el Numero a </label>
                    <input type="number"
                    className="form-control"
                    value={numA}
                    onChange={(e)=>setnumA(e.target.value)}/>
                    <label className="form-label">Ingrese el Numero b </label>
                    <input type="number"
                    className="form-control"
                    value={numB}
                    onChange={(e)=>setnumB(e.target.value)}/>
                    <label className="form-label">Ingrese el Numero C </label>
                    <input type="number"
                    className="form-control"
                    value={numC}
                    onChange={(e)=>setnumC(e.target.value)}/>
                    <label className="form-label">Resultado </label>
                    <input type="text"
                    className="form-control"
                    value={resultado}
                    readOnly/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 mb-3 ">
                    <button className="btn btn-success"
                    onClick={Cuadratica}>Calcular</button>
                </div>
                 <div className="col-6 mb-3 ">
                    <button className="btn btn-danger"
                    onClick={Limpia}>Limpiar</button>
                </div>

            </div>
        </div>
    )
}

export default Cuadratica