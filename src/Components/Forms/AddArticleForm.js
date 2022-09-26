import React from "react";

const AddArticleForm = ({
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Input Content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input type="submit" value="Add Article" />
    </form>
  );
};

export default AddArticleForm;
