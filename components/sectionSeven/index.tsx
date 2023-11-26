import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <Container>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Fale com a gente. Estamos ansiosos para ouvir você!</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Tem alguma dúvida, sugestão ou simplesmente quer bater um papo sobre o futuro da mobilidade? Nosso time está sempre disponível para conversar. Mande uma mensagem, um sinal de fumaça, ou se preferir, use o bom e velho e-mail. Estamos aqui por você, 24/7.
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="joao@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Nome"
              placeholder="João Vitor"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Sua mensagem"
              placeholder="Gostaria de saber mais sobre a vou"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} color='dark'>Enviar mensagem</Button>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}