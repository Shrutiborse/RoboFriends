import React from 'react';

const Card =({id,name,email}) => {
    return(
        <div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?100x100`}/>
            <div>
                <h1 className='baskerville black w5-m'>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;