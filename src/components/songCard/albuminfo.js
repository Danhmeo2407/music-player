import React, { useState } from 'react'
import './albuminfo.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

export default function Albuminfo({artist}) {

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
    <div className="albumInfo-card">
    {tracks.map((track) => (
    <div key={track.id}>
      <div className="albumName-container">
        <div className="marquee">
          <p>{track.title + " - " + track.artist}</p>
        </div>
        </div>
        <div className="album-info">
          <p>{track.title} is an {track.type} by {track.artist} with {track.total} track(s)</p>
        </div>
        <div className="album-release">
          <p>Release Date: {track.releaseyear}</p>
        </div>
    </div>
    ))}
</div>

  )
}
 