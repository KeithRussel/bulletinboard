import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../utils/styles";

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${() => theme.colors.secondary};
  color: ${() => theme.colors.white};
`;

const EditArticleForm = ({
  title,
  setTitle,
  content,
  setContent,
  titleOnChangeHandler,
  contentOnChangeHandler,
  handleUpdate,
}) => {
  return (
    <form onSubmit={handleUpdate}>
      <Input
        type="text"
        placeholder="Input Title"
        name="title"
        value={title}
        onChange={titleOnChangeHandler}
        required
      />
      <TextArea
        type="text"
        placeholder="Input Content"
        name="content"
        value={content}
        onChange={contentOnChangeHandler}
        required
      />
      <Button type="submit" value="Update Article" />
    </form>
  );
};

export default EditArticleForm;
