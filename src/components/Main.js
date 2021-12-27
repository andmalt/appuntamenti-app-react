import React, {useState} from 'react'
import './Main.css'
import { meets } from '../data/data'

const Main = () => {
    const [person, setPerson] = useState(meets);

    return (
        <div className='row text-center'>
            <div className="col-12">
                <h1 className='p-2' id='t-m'>Prossimi Incontri</h1>
            </div>
            <div className="col-12 p-2 my-3">
                <div className="row">
                    {
                        meets.map(el => {
                            const {id,name,phrase,image} = el;
                            return(
                                <div key={id} className="col-12">
                                    <div className="row">
                                        <div className="col-12 col-md-3">
                                            <img className="img-fluid" src={image} alt="" />
                                        </div>
                                        <div className="col-12 col-md-7">
                                            <h5>{name}</h5>
                                            <p>{phrase}</p>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <button></button>
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
