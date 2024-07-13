import './Sidebar.css'
import React from 'react'
import home from "../../assets/home.png"
import game from '../../assets/game.png'
import automoile from '../../assets/automoile.png'
import sport from '../../assets/sport.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blog from '../../assets/blog.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import sk from '../../assets/sk.png'

const Sidebar = ({sidebar,category,setCategory }) => {
  return (
    // <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className='sortcut-links'>
        
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="home" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game} alt="home" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automoile} alt="automobiles" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sport} alt="sport" /><p>sport</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={tech} alt="tech" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="tech" /><p>tech</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="music" /><p>music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blog} alt="blog" /><p>blog</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="news" /><p>news</p>
            </div>

            <hr/>
        </div>
        <div className='subscribed-list'>
            <h3 className='sub'>Subscribed</h3>
            <div className='side-link'>
                <img src={sk} alt="jack" /><p>PewDiePie</p>
            </div>
            <div className='side-link'>
                <img src={sk} alt="jack" /><p>PewDiePie</p>
            </div>
            <div className='side-link'>
                <img src={sk} alt="jack" /><p>PewDiePie</p>
            </div>
            <div className='side-link'>
                <img src={sk} alt="jack" /><p>PewDiePie</p>
            </div>
             
        </div>

    </div>
  )
}

export default Sidebar