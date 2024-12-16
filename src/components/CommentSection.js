import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // 댓글 추가
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, id: Date.now(), likes: 0 }]);
      setNewComment("");
    }
  };

  // 댓글 보이기/숨기기
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // 댓글 수정
  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditText(comments[index].text);
  };

  // 수정된 댓글 저장
  const handleSaveEdit = () => {
    if (editText.trim()) {
      setComments((prevComments) => {
        const updatedComments = [...prevComments];
        updatedComments[editIndex].text = editText;
        return updatedComments;
      });
      setEditIndex(null);
      setEditText('');
    }
  };

  // 댓글 삭제
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // 좋아요 증가
  const handleLikeComment = (index) => {
    setComments((prevComments) => {
      const updatedComments = prevComments.map((comment, i) => 
        i === index ? { ...comment, likes: comment.likes + 1 } : comment
      );
      return updatedComments;
    });
  };

  return (
    <div className='commentWrap'>
      <button className='commentToggleBtn' onClick={toggleComments}>
        {showComments ? '댓글 숨기기' : '댓글 보기'}
      </button>
      {showComments && (
        <div>
          <ul className='commentList'>
            {comments.map((comment, index) => (
              <li key={comment.id}>
                <div className='inputText'>
                  {editIndex === index ? (
                    <div className='commentContent'>
                      <input 
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button className='commentAddBtn' onClick={handleSaveEdit}>저장</button>
                    </div>
                  ) : (
                    <p>{comment.text}</p>
                  )}
                </div>
                <div>
                  <span className='editBtn' onClick={() => handleEditComment(index)}>수정</span>
                  <span className='deleteBtn' onClick={() => handleDeleteComment(index)}>삭제</span>
                  <span className='likeNumber'>{comment.likes}</span>
                  <span className='iLikeYou' onClick={() => handleLikeComment(index)}>좋아요</span>
                </div>
              </li>
            ))}
          </ul>
          <div className='reple'>
            <input 
              type="text" 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder='댓글을 입력 하세요...'
            />
            <button className='addBtn' onClick={handleAddComment}>댓글 추가</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
