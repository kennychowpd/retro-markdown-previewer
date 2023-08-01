import { FC } from 'react'
import { styled } from 'styled-components'

interface MarkdownGuideProps {
  guideVisibility: boolean
}

const GuideContainer = styled.div`
  background-color: gray;
  margin-top: 10px;
  padding: 10px;
`

const MarkdownSheet = styled.div`
  border: 2px solid white;
  border-radius: 6px;
  padding: 10px;
`

const List = styled.ul`
  margin: 10px;
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

const MarkdownGuide: FC<MarkdownGuideProps> = ({ guideVisibility }) => {
  return guideVisibility ? (
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
