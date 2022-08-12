import React, { useState } from 'react'
import { Dropdown } from 'carbon-components-react'

export type SelectMenuItem = {
  id: string
  text: string
  helperText?: string
  isInvalid?: boolean
  invalidText?: string
}
export type SelectMenuProps = {
  menuItems: Array<SelectMenuItem>
  id?: string
  /* The id of the preferred default selection */
  defaultSelection?: string
  title: string
}

const isValidCrashTime = (time: Date) => {
  // const latestPossibleDispatchTime =
}

const SelectMenu = ({
  menuItems,
  id,
  defaultSelection,
  title,
}: SelectMenuProps) => {
  const initialSelection = defaultSelection
    ? menuItems.find((item) => item.id === defaultSelection)
    : ({} as SelectMenuItem)
  const [currentItem, setCurrentItem] = useState<
    SelectMenuItem | undefined | null
  >(initialSelection)
  return (
    <Dropdown
      ariaLabel="Dropdown"
      id={id ?? 'carbon-dropdown-example'}
      items={menuItems}
      itemToString={(item) => (item ? item.text : '')}
      onChange={({ selectedItem }) => setCurrentItem(selectedItem)}
      selectedItem={currentItem}
      label="Dropdown menu options"
      titleText={title}
      helperText={currentItem?.helperText}
      size="sm"
    />
  )
}

export default SelectMenu
