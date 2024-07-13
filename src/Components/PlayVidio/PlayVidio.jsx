import React, { useEffect, useState } from 'react';
import './PlayVidio.css';
import vidio1 from '../../assets/vidio1.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import save from '../../assets/save.png';
import share from '../../assets/share.jpg';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.png';
import { API_KEY, valueConverter } from '../../data';
import moment from 'moment';

const PlayVidio = ({ vidioId }) => {
  const [apiData, setApiData] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [channelData,setChannelData]=useState(null);
const [comment,setComment]=useState([]);
  // https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY] HTTP/1.1
  const fetchComment=async()=>{
const commentDetails_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${vidioId}&key=${API_KEY}`
     const response= await fetch(commentDetails_url);
       const data= await response.json();
      //  console.log('data3456',data.items[0].replies.);
      setComment(data.items)
      // console.log('cccccccc',data.items[0].snippet.topLevelComment.snippet.authorChannelUrl);

}

  const fetchVidioData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidioId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then(res => res.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          if(data.items[0]!=null)
          setApiData(data.items[0]);
          else if(data.items.length>0)
            setApiData(data.items);
        } else {
          console.error('No items found in response');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };
  const fetchOtherData = async () => {
    try {
      console.log('apiData.snippet.channelId', apiData.snippet.channelId);
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
  
      const response = await fetch(channelData_url);
      const data = await response.json();
      // console.log('ddd',data.items[0].snippet.thumbnails.default.url);
      if (data.items && data.items.length > 0) {
        if(data.items[0]!=null)
        setChannelData(data.items[0]);
        else if(data.items.length>0)
          setChannelData(data.items);
      } else {
        console.error('No items found in response');
      }
     
    } catch (error) {
      console.error('Error fetching channel data:', error);
    }
  };
  

  useEffect(() => {
    // console.log(apiData);
    fetchVidioData();
    // fetchOtherData();

  }, [vidioId]);
  useEffect(() => {
  
    // fetchVidioData();
    fetchOtherData();
    // console.log('channelData',channelData);
    fetchComment()
  }, [apiData]);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  return (
    <div className='play-vidio'>
      <iframe src={`https://www.youtube.com/embed/${vidioId}`}></iframe>
      <h3>{apiData?.snippet?.title || "Title not available"}</h3>
      <div className='play-vidio-info'>
        <p>
          {valueConverter(apiData?.statistics?.viewCount || 0)} Views &bull; {moment(apiData?.snippet?.publishedAt || new Date()).fromNow()}
        </p>
        <div>
          <span><img src={like} alt="like" />{valueConverter(apiData?.statistics?.likeCount || 0)}</span>
          <span><img src={dislike} alt="dislike" /></span>
          <span><img src={save} alt="save" />120</span>
          <span><img src={share} alt="share" />100</span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={channelData?.snippet.thumbnails.default.url} alt="publisher" />
        <div>
          <p>GreatStack</p>
          <span>{valueConverter(channelData?.statistics?.subscriberCount || 2222)}Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
      <p>
          {isDescriptionExpanded ? apiData.snippet.localized.description : apiData.snippet.localized.description.slice(0, 100)}
          {apiData.snippet.localized.description.length > 100 && (
            <span onClick={toggleDescription} style={{fontWeight:'600', paddingLeft:'8px',cursor:'pointer' }}>
              {isDescriptionExpanded ? 'Read Less' : 'Read More..'}
            </span>
          )}
        </p>
        <p>Subscribe GreatStack to Watch More ...</p>
        <hr />
        {/* <h4>{valueConverter(commentCount)} Comments</h4> */}
        <h4>{valueConverter(apiData?.statistics?.commentCount || 0)} Comments</h4>
        {comment.map((data,index)=>(

      
        <div className='comment'>
         {/* { console.log('sdfghj',data.snippet.topLevelComment.snippet.authorChannelUrl)} */}
          <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile" />
          <div>
            <h3>{data.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(data.snippet.topLevelComment.snippet.updatedAt).fromNow()}</span></h3>
            <p>{data.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className='comment-action'>
              <img src={like} alt="like" />
              <span>{valueConverter(data?.snippet.topLevelComment.snippet.likeCount)}</span>
              {/* <span>{valueConverter(7777777777777)}</span> */}
              <img src={dislike} alt="dislike" />
              {/* <span>44</span> */}
            </div>
          </div>
        </div>
         ))} 
        {/* Repeat the comment div as needed */}
      </div>
    </div>
  );
};

export default PlayVidio;
