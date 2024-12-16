import React from 'react';
import postsData from '../data/postsData';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';


const PostDetail = () => {
  const {id} = useParams();
  const post = postsData.find((p) => p.id === parseInt(id, 10));
  if(!post) {
    return (
      <h1 className='journalLayout'>게시글을 찾을 수 없습니다.</h1>
    )
  };
  return (
    <div className='postDetail journalLayout'>
      <h2>{post.title}</h2>
      <div>
        <span>작성자 {post.author} | </span>
        <span>{post.date}</span>
        <p>
          {post.content}
        </p>
      </div>
      <p>
        <h2>본문</h2>
        <p>
          {post.body}
        </p>
      </p>
      <CommentSection />
    </div>
  )
}

export default PostDetail