import React from "react"
import {
  Header as MantineHeader,
  ActionIcon,
  Menu,
  Text,
  NumberInput,
  Indicator,
} from "@mantine/core"
import { HiShoppingCart } from "react-icons/hi"
export const Header = () => {
  return (
    <MantineHeader height={60} p='xs'>
      <div className='tw-flex tw-items-center tw-justify-end tw-pr-20'>
        <Menu closeOnItemClick={false} shadow='md' width={300}>
          <Menu.Target>
            <Indicator size={16} label='2'>
              <ActionIcon>
                <HiShoppingCart size={25} />
              </ActionIcon>
            </Indicator>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <div className='tw-flex tw-items-center tw-justify-between'>
                <Text>Item 1</Text>
                <div className='tw-w-16'>
                  <NumberInput min={0} max={10} />
                </div>
              </div>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </MantineHeader>
  )
}
