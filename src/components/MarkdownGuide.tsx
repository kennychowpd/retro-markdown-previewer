import { FC } from 'react'
import { styled } from 'styled-components'

interface MarkdownGuideProps {
  showGuide: boolean
}

const GuideContainer = styled.div`
  background-color: gray;
  padding: 10px;
  position: absolute;
  z-index: 10;
  top: 75px;
  right: 0;
  width: 300px;
  justify-self: center;
`

const MarkdownSheet = styled.div`
  border: 2px solid white;
  border-radius: 6px;
  padding: 10px;
`

const List = styled.ul`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`

const markdownSyntax = [
  '# H1',
  '## H2',
  '### H3',
  '**bold**',
  '*italic*',
  '[Link](https://whatever.com)',
  '![Image](htp://url/a.png)',
  '`inline code`',
  '```block code```',
  '- list item',
]

const MarkdownGuide: FC<MarkdownGuideProps> = ({ showGuide }) => {
  return showGuide ? (
    <GuideContainer>
      <MarkdownSheet>
        <h1>HI! CHEATERS.</h1>
        <List>
          {markdownSyntax.map((item) => (
            <li key={item}>
              <code>{item}</code>
            </li>
          ))}
        </List>
      </MarkdownSheet>
    </GuideContainer>
  ) : null
}

export default MarkdownGuide
