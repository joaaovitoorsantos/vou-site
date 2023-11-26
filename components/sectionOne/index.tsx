import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './styles.module.css';

export default function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Esqueça tudo o que você sabe sobre alugar carros!
          </Title>
          <Text c="dimmed" mt="md">
            Uns chamam de evolução da mobilidade urbana. Nós chamamos de revolução do aluguel de carros!
          </Text>

          <Group mt={30}>
            <Button radius="xl" color="dark" size="md" className={classes.control}>
              Como funciona
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Saiba mais
            </Button>
          </Group>
        </div>
        <img src="https://i.imgur.com/H47v9It.png" alt="" height={400} />
      </div>
    </Container>
  );
}