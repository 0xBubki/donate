import { Box, Heading, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { Translations, useTranslation } from '../../utils/use-translation'

interface LocalizedParagraphProps {
  header?: string
  paragraphs: string[]
  translations: Translations
}

export const TranslatedParagraph: FC<LocalizedParagraphProps> = ({
  header,
  paragraphs,
  translations
}) => {
  const translate = useTranslation(translations)

  return (
    <Box className="pb-12">
      {header && (
        <Heading color="#fff" fontWeight="bold" className="text-4xl pb-3">
          {translate(header)}
        </Heading>
      )}

      <Flex direction="column" className="space-y-3 text-xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{translate(paragraph)}</p>
        ))}
      </Flex>
    </Box>
  )
}
