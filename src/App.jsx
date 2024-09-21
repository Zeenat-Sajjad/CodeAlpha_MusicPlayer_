import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'; 

const songs = [
  {
    title: "Tere Bina Song ",
    artist: "A.R. Rahman",
    src: "/src/A.R. Rahman - Tere Bina Best Video_ Guru_Aishwarya Rai_Abhishek Bachchan_Chinmayi - SonyMusicIndiaVEVO.mp3", 
    cover: "/public/cover.jfif"
  },
  {
    title: "Iktara Song of Wake Up Sid",
    artist: "Kavita Seth, Amit",
    src: "/src/Iktara Full Video - Wake Up Sid_Ranbir Kapoor,Konkona Sen Sharma_Kavita Seth_Amit Trivedi - SonyMusicIndiaVEVO.mp3",
    cover: "/public/cover.jfif"
  },
  {
    title: "Teri Deewani Song",
    artist: "Kalaish Kher",
    src: "/src/Teri Deewani - Kailash Kher _ Official Video _ Kailasa _ Paresh _ Naresh - SonyMusicIndiaVEVO.mp3",
    cover: "/public/cover.jfif"
  },
  {
    title: "Chidiya Song",
    artist: "Vilen/Dark Music",
    src: "/src/Vilen - Chidiya (Official  Video) - Darks Music Company.mp3",
    cover: "/public/cover.jfif"
  },
  {
    title: "Ek Raat",
    artist: "Vilen/Dark Music",
    src: "/src/Vilen - Ek Raat (Official Video) - Darks Music Company.mp3",
    cover: "/public/cover.jfif"
  }
];

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-white text-center mb-4">🎵 Music Player</h1>
        
        <div className="flex justify-center">
          <img src={songs[currentSongIndex].cover} alt="Album Cover" className="w-32 h-32 rounded-full shadow-md border-4 border-white" />
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-white">{songs[currentSongIndex].title}</h2>
          <p className="text-gray-300">{songs[currentSongIndex].artist}</p>
        </div>

        <audio ref={audioRef} src={songs[currentSongIndex].src} onEnded={nextSong} />

        <div className="flex items-center justify-around mt-6">
          <button
            className="bg-purple-700 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transition-all"
            onClick={prevSong}
          >
            <FaBackward size={24} /> 
          </button>
          
          <button
            className={`p-4 rounded-full shadow-lg transition-all ${isPlaying ? 'bg-red-500 hover:bg-red-400' : 'bg-green-500 hover:bg-green-400'} text-white`}
            onClick={playPause}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />} 
          </button>

          <button
            className="bg-purple-700 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transition-all"
            onClick={nextSong}
          >
            <FaForward size={24} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

