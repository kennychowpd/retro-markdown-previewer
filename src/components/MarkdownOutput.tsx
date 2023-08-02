import { FC } from 'react'
import { styled } from 'styled-components'
import ReactMarkdown from 'react-markdown'

interface MarkdownOutputProps {
  markdown: string
}

const OutputContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 50%;
  padding: 20px;
`



const MarkdownOutput: FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <h2>output:</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  )
}

export default MarkdownOutput
