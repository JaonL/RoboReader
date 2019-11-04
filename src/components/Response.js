import React from 'react'
import './Response.css'
import {Spring, animated} from 'react-spring/renderprops'

const Response = ({scores, tags, comment}) => (
  comment ?
  <div className='commentWrapper'>
    <div className='comment'>{comment}</div>
  </div> :
  <div className='responseWrapper'>
    <div className='responseTags'>
      {tags ? tags.map((tag, index) => {
        tag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return <div className='tag' key={tag + index}>{tag}</div>
      }) : <div/>}
    </div>
    <div className='responseScores'>
      {scores.length > 0 ? scores.map((score, index) => (
        //<div className='score' key={score + index} style={{width: Math.round(score * 100) + '%'}}/>
        <Spring
          key={score + index}
          from={{width: '0%'}}
          to={{width: Math.round(score * 100) + '%', height: 20}}
          children={props => <animated.div className='score' style={props}/>}
        >
        </Spring>
      )) : <div className='score' key={new Date()} style={{width: 20}}/>}
    </div>
  </div>
);
export default Response