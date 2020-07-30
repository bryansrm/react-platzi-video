import React from 'react'

const Player = () => {
    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="" />
            </video>
            <div className="Player-back">
                <button type="button">
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default Player;