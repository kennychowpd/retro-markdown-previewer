import { ChangeEvent, useState } from 'react'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownOutput from './components/MarkdownOutput'
import MarkdownInput from './components/MarkdownInput'
import { styled } from 'styled-components'

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overscroll-behavior: none;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`)
  const [showGuide, setShowGuide] = useState(false)

  const onToggleGuide = () => {
    setShowGuide((prev) => !prev)
  }

  const markdownChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value)
  }

  return (
    <AppContainer>
      <Header onToggleGuide={onToggleGuide} />
      <MarkdownGuide showGuide={showGuide} />
      <Container>
        <MarkdownInput
          value={markdown}
          onChange={markdownChangeHandler}
        />
        <MarkdownOutput markdown={markdown}/>
      </Container>
    </AppContainer>
  )
}

export default App
