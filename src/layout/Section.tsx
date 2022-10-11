import HomeSection from "../component/section/HomeSection";
import MainSection from "../component/section/MainSection";
import MovieSection from "../component/section/MovieSection";

export default function Section(){

    return (
        <>
        {/* Home Section */}
        <HomeSection/>
        {/* Popular Section Start*/}
        <MainSection/>
        {/* MovieSection */}
        <MovieSection/>
        </>
    )
}