import React, { useState } from 'react'
import PostItem from './PostItem'

import Thumbnail1 from '../images/avatar3.png'
import Thumbnail2 from '../images/picture2.jpg'
import Thumbnail3 from '../images/picture3.jpg'
import Thumbnail4 from '../images/picture4.jpg'

const DEMO_POSTS = [
  {
    id:'1',
    thumbnail: Thumbnail1,
    category: 'education',
    title: 'Dealing with Education',
    description: 'This will be remove iliterace from our societies',
    author_id: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category: 'science',
    title: 'Science subjects',
    description: 'Technology is a key',
    author_id: 1
  },
  {
    id:'3',
    thumbnail: Thumbnail3,
    category: 'weather',
    title: 'Dealing with Weather',
    description: 'This will be control the weather forecasting around us',
    author_id: 13
  },
  {
    id: '4',
    thumbnail: Thumbnail4,
    category: 'farming',
    title: 'Farming',
    description: 'Domestic cultivation is needed',
    author_id: 11
  },
]

const Posts = () => {
  const [posts, setPosts] = useState(DEMO_POSTS)
  return (
   
    <section className="posts">
      <div className="container posts__container">
      {
      posts.map(({id, thumbnail, category, title, description, author_id}) => <PostItem key ={id} thumbnail={thumbnail} category={category} title={title} description={description} author_id={author_id} />)
      }
      </div>
   </section>
  
  )
}

export default Posts