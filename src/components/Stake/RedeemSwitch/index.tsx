import { Tab, TabList, Tabs } from '@chakra-ui/react'

export const RedeemSwitch = ({
  stake = '',
  unstake = '',
  onChange
}: {
  stake: string
  unstake: string
  onChange: () => void
}) => (
  <Tabs
    variant="soft-rounded"
    backgroundColor={'white'}
    borderRadius="25px"
    marginBottom="20px"
    onChange={onChange}
  >
    <TabList>
      <Tab width="100px" _selected={{ color: 'white', bg: '#027DFF' }}>
        {' '}
        {stake}{' '}
      </Tab>
      <Tab maxWidth="100px" _selected={{ color: 'white', bg: '#027DFF' }}>
        {' '}
        {unstake}{' '}
      </Tab>
    </TabList>
  </Tabs>
)
