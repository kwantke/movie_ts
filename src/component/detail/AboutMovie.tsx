
import {Link} from "react-router-dom";
import { IMovie } from "../section/MovieListSwiper";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
export default function AboutMovie(){


    return (<div className="about-movie container">
            <h2>Jumanji: Welcome to the Jungle</h2>
            <p>When four students play with a magical video game, they are drawn to the jungle, where they are trapped as their avatars. To return to the real world, they must finish the game.</p>
            {/* Movie Cast */}
            <h2 className="cast-heading">Movie Cast</h2>
            <div className="cast">
                <div className="cast-box">
                    <img src="/images/play-page/cast1.jpg" alt="" className="cast-img" />
                    <span className="cast-title">Dwayne Johnson</span>
                </div>
                <div className="cast-box">
                    <img src="/images/play-page/cast2.jpg" alt="" className="cast-img" />
                    <span className="cast-title">Karen Gillan</span>
                </div>
                <div className="cast-box">
                    <img src="/images/play-page/cast3.jpg" alt="" className="cast-img" />
                    <span className="cast-title">Kevin Hart</span>
                </div>
                <div className="cast-box">
                    <img src="/images/play-page/cast4.jpg" alt="" className="cast-img" />
                    <span className="cast-title">Jack Black</span>
                </div>
                <div className="cast-box">
                    <img src="/images/play-page/cast5.jpg" alt="" className="cast-img" />
                    <span className="cast-title">Nick Jonas</span>
                </div>
                <div className="cast-box">
                    <img src="/images/play-page/cast6.jpg" alt="" className="cast-img" />
                    <span className="cast-title">Madison Iseman</span>
                </div>
            </div>
        </div>
    )
}