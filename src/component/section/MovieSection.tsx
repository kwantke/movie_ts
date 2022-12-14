import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IMovie } from "./MovieListSwiper";

export default function MovieSection(){

        let [movieList, setMovieList] = useState<IMovie[]>([]);
        let [cnt, setCnt] = useState<string>('2');
        useEffect(()=>{
            axios.get(`http://localhost:3001/movie?sectionSwq=${cnt}`)
                .then((res)=>{
                    setMovieList(res.data);
                }).catch((Error)=>{
                    console.log(Error);
                })
        },[]);

        const saveStateValues = (movieName:string, movieId:string)=>{
            localStorage.setItem("movieName", movieName);
            localStorage.setItem("movieId", movieId);
        }
    return (<>
        <section className="movies container" id="movies">
            {/* Heading */}
            <div className="heading">
                <h2 className="heading-title">Movies And Show</h2>
            </div>
            {/* Movies Content */}
            <div className="movies-content">
               {
                movieList.length > 0 ? movieList.map((movie, index)=>(
                    <div className="movie-box" key={index}>
                        <img src={movie.img} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="box-title">{movie.name}</h2>
                            <span className="movie-type">{movie.type}</span>
                            <a href={`/play/${movie.name}`} onClick={()=>saveStateValues(`${movie.name}`, `${movie.id}`)} className="watch-btn play-btn">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    
                    </div>    
                )): ""
               }
            </div>
        </section>
    
    </>)
}