import React, {useState} from 'react'
import './Main.css'
import { meets } from '../data/data'

const Main = () => {
    const [person, setPerson] = useState(meets);

    return (
        <div className='row text-center'>
            <div className="col-12">
                <h1 className='p-3 mt-2' id='t-m'>Prossimi Incontri</h1>
            </div>
            <div className="col-12 p-2 my-3">
                <div className="row">
                    {
                        person.map(el => {
                            const {id,name,phrase,image} = el;
                            return(
                                <div key={id} className="col-12 card_person shadow">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-7 col-sm-5 col-md-3 div-img">
                                            <img className="img-fluid" src={image} alt={`${name} immagine`} />
                                        </div>
                                        <div className="col-12 col-md-7">
                                            <h5>{name}</h5>
                                            <p>{phrase}</p>
                                        </div>
                                        <div className="col-12 col-md-2 p-3">
                                            <button className='btn btn-danger px-4'>X</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;
