import { FC } from 'react'
import { styled } from 'styled-components'
import ReactMarkdown from 'react-markdown'

interface MarkdownOutputProps {
  markdown: string
}

const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const StyledOutput = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 10px;
`

const MarkdownOutput: FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <h2 style={{ color: 'white' }}>output:</h2>
      <StyledOutput>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </StyledOutput>
    </OutputContainer>
  )
}

export default MarkdownOutput
