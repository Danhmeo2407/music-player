/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import {auth ,db} from "../../firebase-config"
import { collection, getDocs} from 'firebase/firestore';


function Library({ isAuth }) {

  const [songLists, setSongList] = useState([]);
  const songsCollectionRef = collection(db, "songs");

  useEffect(() => {
    const getSongs = async () => {
      const data = await getDocs(songsCollectionRef);
      setSongList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getSongs();
  },[]);


  return (
    <div className='screen-container'>
      <ul>
      {songLists.map((song) => (
        <li key={song.id}>
          {song.title}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Library