import { ChangeEvent, FC } from 'react'
import { styled } from 'styled-components'

interface MarkdownInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  height: 100%;
  width: 100%;
  padding-right: 20px;
`

const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-style: bold;
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`

const MarkdownInput: FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <h2 style={{ color: 'white' }}>input:</h2>
      <StyledTextArea
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  )
}

export default MarkdownInput
