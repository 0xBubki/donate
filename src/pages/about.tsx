import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../components/Root'
import { useTranslation } from '../utils/use-translation'

// TODO - verify that these are the right keys

const localisation = {
  sp: {
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
  en: {
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
  const translate = useTranslation(localisation)

  return (
    <Flex
      direction="row"
      width="100vw"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Box width="885px">
          <Heading color="#fff" fontWeight="bold" fontSize="48">
            {translate('headerOne')}
          </Heading>
          <Text
            color="#fff"
            fontWeight={400}
            fontSize="20px"
            mt="30px"
            lineHeight="122%"
          >
            {translate('paragraphOneA')}
            <br />
            <Box mt="30px">{translate('paragraphOneB')}</Box>
          </Text>
        </Box>
        <Box mt="88px" width="742px">
          <Heading color="#fff" fontWeight="bold" fontSize="48">
            {translate('headerTwo')}
          </Heading>
          <Text
            color="#fff"
            fontWeight={400}
            fontSize="20px"
            mt="30px"
            lineHeight="122%"
          >
            {translate('paragraphTwoA')}
            <br />
            <Box mt="30px">{translate('paragraphTwoB')}</Box>
          </Text>
        </Box>
        <Box mt="88px" width="670px">
          <Heading color="#fff" fontWeight="bold" fontSize="48">
            {translate('headerThree')}
          </Heading>
          <Text
            color="#fff"
            fontWeight={400}
            fontSize="20px"
            mt="30px"
            lineHeight="122%"
          >
            {translate('paragraphThree')}
          </Text>
        </Box>
      </Box>
      <Box>
        <Image src="/wewantyouryield.png" />
      </Box>
    </Flex>
  )
}

export default About
