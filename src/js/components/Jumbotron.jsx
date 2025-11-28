import React from "react";


export const Jumbotron = () => {
    return (

        <div className="p-5 pt-1 mb-4  bg-body-secondary border border-secondary">
            <div className="container-fluid py-5 pt-1">
                <h1 className="display-5 fw-bold">¡Bienvenido a Proyecta Futuro!</h1>
                <p className="col-md-12 fs-4">Estamos encantados de tenerte con nosotros.
                    Descubre herramientas innovadoras diseñadas para impulsar tus ideas.
                    Explora, crea y conecta con una comunidad que comparte tu visión.
                    Tu camino hacia el éxito comienza hoy.</p>
                <button className="btn btn-primary btn-lg" type="button">Empieza tu viaje!</button>
            </div>
        </div>

    )
}