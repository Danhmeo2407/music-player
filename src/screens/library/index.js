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
<<<<<<< HEAD
>>>>>>> 99781a4 (first commit)
=======
import { AiFillPlayCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
>>>>>>> 44d082c (second)


function Library({ isAuth }) {

  const [songLists, setSongList] = useState([]);

<<<<<<< HEAD
<<<<<<< HEAD
=======
  
=======
  const songsCollectionRef = collection(db, "songs");
>>>>>>> 44d082c (second)

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

  const navigate = useNavigate();

  const playSong = (id) =>{
    navigate('/player', {state: {id: id}})
  };

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
          <div className='playlist-card' key={song.id} onClick={() => playSong(song.id)}>
            <img
              src={song.img}
              className='playlist-image'
              alt='Playlist-Art'
            />
            <p className='playlist-title'>{song.title}</p>
            <p className='playlist-subtitle'>{song.quantity}</p>
            <div className='playlist-fade'>
              <IconContext.Provider value={{size: "50px", color: "#E99D72"}}>
                  <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
>>>>>>> 99781a4 (first commit)
    </div>
  )
}

export default Library