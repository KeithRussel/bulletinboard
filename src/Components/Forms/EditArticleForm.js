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
  resize: none;
`;

const Select = styled.select`
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
  color,
  setColor,
  handleSelectChange,
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
      <Select name="colors" value={color} onChange={handleSelectChange}>
        <option value="none" selected disabled hidden>
          Select a Color
        </option>
        <option value="rgb(237, 234, 24)">Yellow</option>
        <option value="rgb(24, 167, 237)">Blue</option>
        <option value="rgb(139, 86, 255)">Violet</option>
        <option value="rgb(24, 237, 67)">Green</option>
      </Select>
      <Button type="submit" value="Update Article" />
    </form>
  );
};

export default EditArticleForm;
