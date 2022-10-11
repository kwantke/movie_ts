import MovieListSwiper from "./MovieListSwiper";

export default function MainSection(){

    return (
        <section className="popular container" id="popular">

            {/* Heading */}
            <div className="heading">
                <h2 className="heading-title">Popular Movies</h2>
            </div>
            {/* Content */}

            <div className="popular-content swiper">
                <MovieListSwiper/>
            </div>
        </section>
    )
}