import React, { useState } from 'react'
import './queue.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

export default function Queue({album , setCurrentIndex}) {

  const [tracks, setTracks] = useState([]);

  const tracksCollectionRef = collection(db, "tracks");

  useState(() => {
    const getTracks = async () => {
      const data = await getDocs(tracksCollectionRef);
      setTracks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getTracks();
  },[tracksCollectionRef]);

  return (
    <div className='queue-container flex'>
      <div className='queue flex'>
        <p className='upNext'>Up Next</p>
        <div className='queue-list'>
          {tracks.map((tracks) => (
            <div className='queue-item'
            >
              <p className="track-name">{tracks.title}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
