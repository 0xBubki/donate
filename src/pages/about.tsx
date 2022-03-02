import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { TranslatedParagraph } from '../components/TranslatedParagraph'

const translations = require('../../public/locales/about.json')

const About: NextPage = () => {
  return (
    <Flex direction={['column', 'row']}>
      <article>
        <TranslatedParagraph
          translations={translations}
          header="headerOne"
          paragraphs={['paragraphOneA', 'paragraphOneB']}
        />

        <TranslatedParagraph
          translations={translations}
          header="headerTwo"
          paragraphs={['paragraphTwoA', 'paragraphTwoB']}
        />

        <TranslatedParagraph
          translations={translations}
          header="headerThree"
          paragraphs={['paragraphThree']}
        />
      </article>

      <Image
        src="/wewantyouryield.png"
        className="your-yield"
        alt="We want your yield"
      />
    </Flex>
  )
}

export default About
