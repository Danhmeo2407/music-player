import React, { useEffect, useState } from 'react'
import './player.css'
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import {db} from "../../firebase-config"
import { collection, getDocs} from 'firebase/firestore';

export default function Player() {

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0)

  const tracksCollectionRef = collection(db, "tracks");

  useEffect(() => {
    const getTracks = async () => {
      const data = await getDocs(tracksCollectionRef);
      setTracks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getTracks();
  },[tracksCollectionRef]);



  return (
    <div className='screen-container flex'>
      <div className='left-player-body'></div>
        <div className='right-player-body'>
          <SongCard album={currentTrack.album}/>
          <Queue tracks={tracks} setCurrentTrack={setCurrentIndex}/>
        </div>
    </div>
  )
}
