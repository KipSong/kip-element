import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// import Button from './components/Button/button'
// import Alert from './components/Alert/alert'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import Icon from './components/Icon/Icon'
import Input from './components/Input/Input'
// import AutoComplete from './components/AutoComplete/AutoComplete'
library.add(fas)


// const fetchSuggestions = (query: string) => {
//   return [{label:'123',value:'123'}] 
// }

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Input style={{ width: '300px' }} prepend='http://' append=".com"></Input>
        <Input placeholder='试试' append=".com"></Input>
        <Menu defaultIndex={'0'} mode="horizontal">
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <MenuItem>
            cool link 3
          </MenuItem>
          <SubMenu title='kipsong'>
            <MenuItem disabled>
              kipsong link
            </MenuItem>
            <MenuItem>
              kipsong link 2
            </MenuItem>
            <MenuItem>
              kipsong link 3
            </MenuItem>
          </SubMenu>
        </Menu>

        <Icon icon='coffee' theme='danger'></Icon>
        {/* <AutoComplete fetchSuggestions={fetchSuggestions}>

        </AutoComplete> */}
      </header>
    </div>
  );
}

export default App;
