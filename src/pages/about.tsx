import { Heading, Flex, Text, Box, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useTranslation } from '../utils/use-translation'

// TODO - verify that these are the right keys
const localisation = {
  en: {
    headerOne: 'Why you should care',
    paragraphOneA:
      'If you haven’t heard already, Ukraine is under attack by Russia. Help us in doing our part! 💪',
    paragraphOneB:
      'Join us and the crypto community at large in providing humanitarian DeFi support to aid Ukraine.',
    headerTwo: 'How it works',
    paragraphTwoA:
      'Delegate your funds to help support Ukrainians during this wild time.',
    paragraphTwoB:
      'Project Sunflower allows you to invest your money in an Interest generating pool, used for collateralized loans. You still hold on to the exact amount you invested and can get it back any time. We take the returns made off using your assets as collateral to support Ukraine’s defense efforts.',
    headerThree: 'Where the money is going',
    paragraphThree:
      'We are donating all the yield generated to X organization. Contract address: 0x...........'
  },
  gr: {
    headerOne: 'Warum Sie das interessieren sollte',
    paragraphOneA:
      'Falls Sie es noch nicht gehört haben: Die Ukraine wird von Russland angegriffen. Helfen Sie uns, unseren Teil dazu beizutragen! 💪',
    paragraphOneB:
      'Schließen Sie sich uns und der gesamten Krypto-Community an und leisten Sie humanitäre DeFi-Hilfe für die Ukraine.',
    headerTwo: 'Wie es funktioniert',
    paragraphTwoA:
      'Delegieren Sie Ihr Geld, um den Ukrainern in dieser wilden Zeit zu helfen.',
    paragraphTwoB:
      'Projekt Sunflower ermöglicht es Ihnen, Ihr Geld in einen zinsbringenden Pool zu investieren, der für besicherte Kredite verwendet wird. Dabei behalten Sie genau den Betrag, den Sie investiert haben, und können ihn jederzeit zurückfordern. Wir nehmen die Renditen, die durch die Verwendung Ihres Vermögens als Sicherheiten erzielt werden, um die Verteidigungsanstrengungen der Ukraine zu unterstützen.',
    headerThree: 'Wo das Geld hingeht',
    paragraphThree:
      'Wir spenden alle erwirtschafteten Erträge an die Organisation X. Adresse des Vertrags: 0x...........'
  },
  pl: {
    headerOne: 'Dlaczego to też twoja sprawa?',
    paragraphOneA:
      'Jak wszyscy wiemy, Rosja rozpoczęła wojnę przeciwko Ukrainie. Pomóż nam robić to, co potrafimy najlepiej! 💪',
    paragraphOneB:
      'Dołącz do naszej krypto-społeczności, tworzącej instrumenty finansowe wspomagające działalność humanitarną na rzecz Ukrainy.',
    headerTwo: 'Jak to działa?',
    paragraphTwoA:
      'Zamroź swoje fundusze na pomoc Ukrainie w tym niepewnym czasie.',
    paragraphTwoB:
      'Projekt Sunflower pozwala zainwestować twoje pieniądze w generujące przychód pule, użyte jako zabezpieczenie pożyczki. Nie tracisz swoich pieniędzy I w każdej chwili możesz je odzyskać. My przekazujemy zysk wygenerowany przez twoje fundusze jako wsparcie obrony Ukrainy.  ',
    headerThree: 'Gdzie trafiają pieniędze?',
    paragraphThree:
      'Przekazujemy cały zysk dla organizacji X. Adres kontraktu: 0x...........'
  },
  sp: {
    headerOne: 'Por qué debería importarte',
    paragraphOneA:
      'Si aún no lo ha escuchado, Ucrania está siendo atacada por Rusia. ¡Ayúdanos a hacer nuestra parte! 💪',
    paragraphOneB:
      'Únase a nosotros y a la comunidad criptográfica en general para brindar apoyo humanitario de DeFi para ayudar a Ucrania.',
    headerTwo: 'Cómo funciona',
    paragraphTwoA:
      'Delegue sus fondos para ayudar a apoyar a los ucranianos durante este tiempo salvaje.',
    paragraphTwoB:
      'Project Sunflower le permite invertir su dinero en un grupo generador de intereses, utilizado para préstamos garantizados. Todavía conserva la cantidad exacta que invirtió y puede recuperarla en cualquier momento. Tomamos los rendimientos obtenidos utilizando sus activos como garantía para apoyar los esfuerzos de defensa de Ucrania.',
    headerThree: 'Adónde va el dinero',
    paragraphThree:
      'Estamos donando todo el rendimiento generado a la organización X. Dirección del contrato: 0x...........'
  },
  fr: {
    headerOne: '',
    paragraphOneA: '',
    paragraphOneB: '',
    headerTwo: '',
    paragraphTwoA: '',
    paragraphTwoB: '',
    headerThree: '',
    paragraphThree: ''
  }
}

const About: NextPage = () => {
  return (
    <Flex
      direction="row"
      width="80%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        width="60%"
        height="100%"
        direction="column"
        justifyContent="space-between"
      >
        <Paragraph
          header="headerOne"
          paragraph1="paragraphOneA"
          paragraph2="paragraphOneB"
        />

        <Paragraph
          header="headerTwo"
          paragraph1="paragraphTwoA"
          paragraph2="paragraphTwoB"
        />

        <Paragraph header="headerThree" paragraph1="paragraphThree" />
      </Flex>
      <Box width="40%">
        <Image src="/wewantyouryield.png" className="your-yield" />
      </Box>
    </Flex>
  )
}

export default About

const Paragraph = ({
  header,
  paragraph1,
  paragraph2
}: {
  header: string
  paragraph1: string
  paragraph2?: string
}) => {
  const translate = useTranslation(localisation)

  return (
    <Box
      height={
        paragraph2 ? (paragraph2 === 'paragraphOneB' ? '20%' : '40%') : '30%'
      }
    >
      <Heading color="#fff" fontWeight="bold" fontSize="6vh">
        {translate(header)}
      </Heading>
      <Flex
        direction="column"
        height={
          paragraph2 ? (paragraph2 === 'paragraphOneB' ? '40%' : '60%') : 'auto'
        }
        justifyContent="space-around"
      >
        <Text color="#fff" fontWeight={400} fontSize="2vh">
          {translate(paragraph1)}
        </Text>
        {paragraph2 ? (
          <Text color="#fff" fontWeight={400} fontSize="2vh">
            {translate(paragraph2)}
          </Text>
        ) : null}
      </Flex>
    </Box>
  )
}
