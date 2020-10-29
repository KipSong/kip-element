import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from './components/Button/button'
// import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabsItem from './components/Tabs/tabsItem'
import Icon from './components/Icon/icon'
library.add(fas)

function App() {

  return (
    <div className="App">
      <header className="App-header">
     
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


      </header>
    </div>
  );
}

export default App;
