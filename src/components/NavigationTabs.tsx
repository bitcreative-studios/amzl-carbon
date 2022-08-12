import React, { useState } from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Search,
} from 'carbon-components-react'
import CircularProgressChart from './CircularProgressChart'
import SelectMenu from './SelectMenu'

export type NavigationTabsProps = {}

const NavigationTabs = ({}: NavigationTabsProps) => {
  const [packageOptions, setPackageOptions] = useState([
    {
      id: 'search',
      text: 'Search',
      helperText: 'Get detailed information about packages.',
    },
    {
      id: 'on-road',
      text: 'On-road management',
      helperText: 'Assign drivers & and override package status',
    },
    {
      id: 'crash',
      text: 'Crash',
      helperText: 'Scan packages and dispatch to CO',
    },
    {
      id: 'induct',
      text: 'Induct Management',
      helperText: 'Set induct to the correct cycle',
    },
  ])
  return (
    <div>
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>Packages</Tab>
          <Tab>DSP Routes</Tab>
          <Tab disabled>Flex Routes</Tab>
          <Tab title="Tab Label 4 with a very long long title">
            Tab Label 4 with a very long long title
          </Tab>
          <Tab>Tab Label 5</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="tab-panel__content">
            <SelectMenu
              title="Select a tool to manage packages"
              menuItems={packageOptions}
            />
            <div>
              <h1 id="panel-heading">Scan Packages</h1>
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Search
                closeButtonLabelText="Clear search input"
                defaultValue="A default value"
                id="search-1"
                labelText="Search"
                onChange={function noRefCheck() {}}
                onKeyDown={function noRefCheck() {}}
                size="lg"
              />
            </div>
          </TabPanel>
          <TabPanel>
            Tab Panel 2 <Button>Example button</Button>
          </TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
          <TabPanel>Tab Panel 4</TabPanel>
          <TabPanel>Tab Panel 5</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default NavigationTabs
