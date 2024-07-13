import React, { useEffect, useState } from 'react'
import './Recommended.css'
import th1 from '../../assets/th1.jpg'
import th2 from '../../assets/th2.jpg'
import th3 from '../../assets/th3.jpg'
import th4 from '../../assets/th4.jpg'
import { API_KEY } from '../../data'
import { valueConverter } from '../../data'
import { Link } from 'react-router-dom'
const Recommended = ({categoryId}) => {
    console.log('categoryId',categoryId);
    const [recommendedData,setRecommendedData]=useState([])
    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=0&key=[YOUR_API_KEY] HTTP/1.1
    const fetchRecommendedData = async () => {
        try {
          const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
        //   console.log('dasa',data);
          setRecommendedData(data.items);
        //   console.log('ress',recommendedData[0]);
        } catch (error) {
          console.error('Failed to fetch recommended data:', error);
        }
      };
      
useEffect(()=>{
fetchRecommendedData();
},[categoryId])
return (
    <div style={{maxWidth:'28vw'}}>
      {recommendedData.map((data, index) => (
        <Link to={`/video/${data.snippet.categoryId}/${data.id}`}>
             <div className='recommended' key={index}>
          <div className='side-video-list'>
            <img src={data.snippet.thumbnails.default.url} alt={data.snippet.title} />
            <div className='vid-info'>
              <h4>{data.snippet.title}</h4>
              <p>{data.snippet.channelTitle}</p>
              <p>{valueConverter(data.statistics.viewCount)} Views</p>
            </div>
          </div>
        </div>
        </Link>
       
      ))}
    </div>
  );
  
  
}
 
export default Recommended


