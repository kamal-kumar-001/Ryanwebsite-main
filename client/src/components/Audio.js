import { useRef, useState, useEffect } from "react";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import egmp3 from "../../src/files/file_example_MP3_1MG.mp3";
import "./AudioPlayer.css";
import sampleimg from "../../src/files/download.jpg";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", setAudioData);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", setAudioData);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (event) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newTime = (offsetX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipTime = (amount) => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(
      Math.max(audio.currentTime + amount, 0),
      duration
    );
    setCurrentTime(audio.currentTime);
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="audio-player">
      <div className="audio-image">
        <img src={sampleimg} alt="" />
      </div>
      <div className="audio-layout">
        <div className="audio-all-buttons">
          <audio ref={audioRef}>
            <source src={egmp3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={togglePlayPause} className="play-pause-button">
            {isPlaying ? (
              <AiFillPauseCircle size={40} />
            ) : (
              <AiFillPlayCircle size={40} />
            )}
          </button>
          <button onClick={() => skipTime(-15)} className="skip-button">
            <AiOutlineMinusCircle size={20} /> -15s
          </button>
          <button onClick={() => skipTime(15)} className="skip-button">
            <AiOutlinePlusCircle size={20} /> +15s
          </button>
          <div className="audio-title">
            {/* <span data-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, exercitationem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, omnis..">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              exercitationem Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Maxime, omnis..
            </span> */}
          </div>
        </div>
        <div className="timeline">
          <span>{formatTime(currentTime)}</span>
          <div
            ref={progressBarRef}
            className="progress-bar-container"
            onClick={handleProgressClick}
          >
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
