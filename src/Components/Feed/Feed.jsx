import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Feed.css';
import th1 from '../../assets/th1.jpg';
import th2 from '../../assets/th2.jpg';
import th3 from '../../assets/th3.jpg';
import th4 from '../../assets/th4.jpg';
import search from '../../assets/search.png';
import { API_KEY, valueConverter } from '../../data';
import { Link } from 'react-router-dom';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url)
            .then(response => response.json())
            .then(data => setData(data.items));
    };

    useEffect(() => {
        fetchData();
        // console.log('data',data.length);
        data.map((id) => console.log('id', id));
    }, [category]);

    return (
        <div className='feed'>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                        <img src={`${item.snippet.thumbnails.medium.url}`} alt={item.snippet.title} />
                        <h2>{`${item.snippet.title}`}</h2>
                        <h3>{`${item.snippet.channelTitle}`}</h3>
                        <p>{`${valueConverter(item.statistics.viewCount)} views • ${moment(item.snippet.publishedAt).fromNow()}`}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Feed;
