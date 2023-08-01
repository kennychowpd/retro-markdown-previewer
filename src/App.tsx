import { useState } from 'react'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'



function App() {
  const [guideVisibility, setGuideVisibility] = useState(true)

  const onToggleGuide = () => {
    setGuideVisibility((prev) => !prev)
  }

  return (
    <div>
      <Header onToggleGuide={onToggleGuide} />
      <MarkdownGuide guideVisibility={guideVisibility}/>
    </div>
  )
}

export default App
