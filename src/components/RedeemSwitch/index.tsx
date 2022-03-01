import { Tab, TabList, Tabs } from '@chakra-ui/react'

const RedeemSwitch = ({ onChange }: { onChange: () => void }) => (
  <Tabs
    variant="soft-rounded"
    backgroundColor={'white'}
    borderRadius="25px"
    width="524px"
    marginBottom="20px"
    onChange={onChange}
  >
    <TabList>
      <Tab width="262px" _selected={{ color: 'white', bg: '#027DFF' }}>
        {' '}
        Stake{' '}
      </Tab>
      <Tab width="262px" _selected={{ color: 'white', bg: '#027DFF' }}>
        {' '}
        Unstake{' '}
      </Tab>
    </TabList>
  </Tabs>
)

export default RedeemSwitch
