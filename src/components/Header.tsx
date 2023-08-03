import { FC } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  height: 43px;
  width: 100%;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: space-between;
  items-align: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  padding-top: 4px
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 22px;
  font-family: 'Press Start 2P';
`

const Button = styled.button`
  padding: 2px;
  font-size: 16px;
  &:hover {
    background-color: red;
    color: white;
  }
`

interface HeaderProps {
  onToggleGuide: () => void
}

const Header: FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Title>Markdown</Title>
        <Title>Previewer</Title>
      </div>
      <Button onClick={onToggleGuide}>Cheat Sheet</Button>
    </HeaderContainer>
  )
}

export default Header
