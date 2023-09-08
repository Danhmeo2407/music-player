import React, { useState } from 'react'
import './albumimage.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

export default function Albumimage({url}) {

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
    <div>
        <div className='albumImage flex'>
            {tracks.map((tracks) => (
                <img
                src={tracks.coverArt}
                className='albumImage-art'
                alt='album-art'
                />
            ))}
        </div>
    </div>
  )
}
