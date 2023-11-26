/* eslint-disable react/no-unescaped-entities */
//@ts-nocheck
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './styles.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Cartão de Credito',
    description:
      'Você não precisa de um cartão de crédito para alugar um carro. Com a Vou! a escolha é sua: oferecemos inúmeras opções de pagamento, desde o PIX até sua conta de luz.',
  },
  {
    icon: IconUser,
    title: 'Locação Ágil',
    description:
      'Alugar um carro pode ser tão fácil quanto deslizar no seu smartphone. Nada de espera, nada de estresse. Nada de formulários tediosos ou balcões de atendimento lotados. Do começo ao fim, tudo é feito digitalmente.',
  },
  {
    icon: IconCookie,
    title: 'Revolução Digital',
    description:
      'Você não precisa falar com um ser humano para pegar ou devolver um carro. O nosso sistema 100% digital garante que você consiga o veículo que precisa, quando precisa, sem demoras ou complicações.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} color="#000"/>
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export default function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Burocracia. Complicações. Cartões de crédito.</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Tradicionalmente, alugar um carro significava se submeter a um processo demorado e muitas vezes frustrante. Mas a era da locação de veículos descomplicada chegou, e seu nome é "Vou!".
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}