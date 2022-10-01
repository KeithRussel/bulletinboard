import styled from "@emotion/styled";
import React, { useState } from "react";
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

// const [options, setOptions] = useState([
//   {
//     name: "Yellow",
//     value: "rgb(237, 234, 24)",
//   },
//   {
//     name: "Blue",
//     value: "rgb(24, 167, 237)",
//   },
//   {
//     name: "Violet",
//     value: "rgb(139, 86, 255)",
//   },
//   {
//     name: "Green",
//     value: "rgb(24, 237, 67)",
//   },
// ]);

const AddArticleForm = ({
  title,
  setTitle,
  content,
  setContent,
  color,
  setColor,
  handleSelectChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Input Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextArea
        type="text"
        placeholder="Input Content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Select name="colors" defaultValue={color} onChange={handleSelectChange}>
        {/* {colors
          ? colors.map((color) => (
              <p>test</p>
              <option value={color.value}>{color.name}</option>
            ))
          : null} */}
        <option value="rgb(237, 234, 24)">Yellow</option>
        <option value="rgb(24, 167, 237)">Blue</option>
        <option value="rgb(139, 86, 255)">Violet</option>
        <option value="rgb(24, 237, 67)">Green</option>
      </Select>
      <Button type="submit" value="Add Article" />
    </form>
  );
};

export default AddArticleForm;
