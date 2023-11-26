/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './styles.module.css';

export default function HeroBullets() {
  return (
    <div className={classes.container}>
      <Container size="md">
        <div className={classes.inner}>
          <img src="https://i.imgur.com/850sB0G.png" alt="" height={400} />
          <div className={classes.content}>
            <Title className={classes.title}>
              Redefinindo a Locação de Veículos com a Vou!
            </Title>
            <Text c="dimmed" mt="md">
              Então, da próxima vez que precisar de um veículo, lembre-se: você não só merece mais, como agora pode ter mais do que as locadoras tradicionais oferecem.
              <br />
              <br />
              Escolha a Vou! e descubra a nova geração de locação. Rápido, simples e no SEUS termos.
            </Text>


          </div>
        </div>
      </Container>
    </div>
  );
}