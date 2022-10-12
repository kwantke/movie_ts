
import {Link} from "react-router-dom";
import { IMovie } from "../section/MovieListSwiper";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import AboutMovie from "./AboutMovie";
import Downloads from "./Downloads";
export default function Play(){
    const movieName:string | null = localStorage.getItem("moiveName");
    const movieId : string | null = localStorage.getItem("movieId");
    let [movie, setMovie] = useState<IMovie>();
    const movieUrl = process.env.REACT_APP_MAIN_MOVIE as string;
    useEffect(()=>{
        axios.get(movieUrl+"?id="+movieId)
            .then((res)=>{
                setMovie(res.data);
            }).catch((Error=>{
                console.log(Error);
        }))
    },[]);

    let video: HTMLElement;
    let myvideo: HTMLVideoElement;
    useEffect(()=>{
        setTimeout(()=>{
            video = document.querySelector('.video-container') as HTMLElement;
            myvideo = document.querySelector('#myvideo') as HTMLVideoElement;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            //myvideo = useRef<HTMLVideoElement>();
        })
    })


    const playButton = () =>{
        video.classList.add("show-video");

        /* Auto play When Clck On Button*/
       // myvideo.play();
        myvideo.play();
    }

    const closeButton = () =>{
        video.classList.remove("show-video");
        /* Pause On Close Video */
        myvideo.pause();

    }
    return (<>
            <div className="play-container container">
                {/* Play Image */}
                <img src="/images/play-page/play-background.jpg" alt="" className="play-img"/>
                {/* Play Text */}
                <div className="play-text">
                    <h2>{movie?.name}</h2>
                    {/* Ratings */}
                    <div className="rating">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half'></i>
                    </div>
                    {/* Tags */}
                    <div className="tags">
                        <span>Action</span>
                        <span>Adventure</span>
                        <span>4K</span>
                    </div>
                    {/* Trailer Button */}
                    <Link to={`/play/`} className="watch-btn">
                        <i className='bx bx-right-arrow'></i>
                        <span>Watch the trailer</span>
                    </Link>
                </div>
                {/* Play Btn */}
                <i className='bx bx-right-arrow play-movie' onClick={() => playButton()}></i>
                {/* Video container */}
                <div className="video-container">
                    {/* Video Box*/}
                    <div className="video-box">
                        <video id="myvideo" src="/images/play-page/Jumanji.mp4" controls></video>
                        {/* Close Video Icon */}
                        <i className='bx bx-x close-video' onClick={()=> closeButton()}></i>
                    </div>
                </div>
            </div>
            <AboutMovie/>
            <Downloads/>
        </>

    )
}