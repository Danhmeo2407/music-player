<<<<<<< HEAD
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import {auth ,db} from "../../firebase-config"
import { collection, getDocs} from 'firebase/firestore';
=======
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import {db} from "../../firebase-config"
import { collection, getDocs} from 'firebase/firestore';
import './library.css'
import 'firebase/storage';
import { IconContext } from "react-icons"
>>>>>>> 99781a4 (first commit)


function Library({ isAuth }) {

  const [songLists, setSongList] = useState([]);
  const songsCollectionRef = collection(db, "songs");

<<<<<<< HEAD
=======
  

>>>>>>> 99781a4 (first commit)
  useEffect(() => {
    const getSongs = async () => {
      const data = await getDocs(songsCollectionRef);
      setSongList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getSongs();
<<<<<<< HEAD
  },[]);
=======
  },[songsCollectionRef]);
>>>>>>> 99781a4 (first commit)


  return (
    <div className='screen-container'>
<<<<<<< HEAD
      <ul>
      {songLists.map((song) => (
        <li key={song.id}>
          {song.title}
        </li>
      ))}
    </ul>
=======
      <div className='library-body'>
        {songLists.map((song) => (
          <div className='playlist-card'>
            <img
              src={song.img}
              className='playlist-image'
              alt='Playlist-Art'
            />
            <p className='playlist-title'>{song.title}</p>
            <p className='playlist-subtitle'>{song.quantity}</p>
            <div className='playlist-fade'>

            </div>
          </div>
        ))}
      </div>
>>>>>>> 99781a4 (first commit)
    </div>
  )
}

export default Library