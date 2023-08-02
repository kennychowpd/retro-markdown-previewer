import { FC } from 'react'
import { styled } from 'styled-components'

interface MarkdownInputProps {
  value: string
  onChange: (value: string) => void
}
const InputContainer = styled.div`
  background-color: gray;
  height: 100%;
  width: 50%;
  padding: 20px;
`

const StyledTextArea = styled.textarea`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px;
  font-size: 24px;
`

const MarkdownInput: FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  )
}

export default MarkdownInput
