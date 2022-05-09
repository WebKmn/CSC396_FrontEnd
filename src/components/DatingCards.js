import React, {useState, useEffect} from 'react'
import DatingCard from 'react-tinder-card'
import axios from './axios';
import '../styles/DatingCards.css';

const DatingCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/dating/cards');
            setPeople(req.data.cards);
        }
        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('Receiving' + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + 'Left the Screen!');
    }

    return(
        <div className='datingCards'>
            <div className='datingCards_container'>
                {people.map((person) => (
                    <DatingCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className='card'>
                            <h3>{person.name}</h3>
                            {/*<SwipeButtons />*/}
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}

export default DatingCards