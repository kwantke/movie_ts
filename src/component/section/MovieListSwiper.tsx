import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";

export interface IMovie {
    id: number;
    img: string;
    name: string;
    type: string;
}
export default function MovieListSwiper(){

    const [movieList, setMovieList] = useState<IMovie[]>([]);
    const movieUrl = process.env.REACT_APP_MAIN_MOVIE_LIST as string
    useEffect(()=>{
        axios.get(movieUrl+"?sectionSeq=1")
            .then((res)=>{
                console.log(res.data);
                setMovieList(res.data);
            }).catch((Error)=>{
                console.log(Error);
            })
    },[]);
    return (
        <>
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            autoplay={{
                delay: 755500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
                // when window width is >= 640px
                280: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                510: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                758: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }}
        >
            {
            movieList.length>1 ? movieList.map(movie => (
                <SwiperSlide key={movie.id}>
                    <div className="movie-box">
                        <img src={movie.img} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">{movie.name}</h2>
                            <span className="movie-type">{movie.type}</span>
                            <a href="#" className="watch-btn play-btn">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            )) :""
        }

        </Swiper>
        </>
    )
}