import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { useTranslation } from '../../../utils/use-translation'
const translations = require('../../../../public/locales/stake.json')

export const RedeemSwitch = ({ onChange }: { onChange: () => void }) => {
  const translate = useTranslation(translations)
  return (
    <Tabs
      variant="soft-rounded"
      backgroundColor={'white'}
      borderRadius="25px"
      marginBottom="20px"
      onChange={onChange}
    >
      <TabList>
        <Tab width="120px" _selected={{ color: 'white', bg: '#027DFF' }}>
          {' '}
          {translate('stake')}{' '}
        </Tab>
        <Tab maxWidth="120px" _selected={{ color: 'white', bg: '#027DFF' }}>
          {' '}
          {translate('unstake')}{' '}
        </Tab>
      </TabList>
    </Tabs>
  )
}
