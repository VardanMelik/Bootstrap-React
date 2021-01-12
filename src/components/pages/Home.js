import React from 'react';
import { InfoConsumer} from '../context';

function Home() {
    return (
        <InfoConsumer>
            { value => {
                return <h2>{value}</h2>
            }}
        </InfoConsumer>
    )
}

export default Home
