import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostForm = () => {
  const [post, setPost] = useState('');

  const onChangeHandler = (e) => {
    setPost(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        color='secondary'
        onChange={onChangeHandler}
        value={post}
        multiline
        fullWidth
      />
      <Button type='submit' variant='contained'>
        Post
      </Button>
    </form>
  );
};

export default PostForm;
