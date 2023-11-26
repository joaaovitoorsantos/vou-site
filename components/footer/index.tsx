//@ts-nocheck

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './styles.module.css';

const data = [
  {
    title: 'Para você',
    links: [
      { label: 'Como funciona', link: '#' },
      { label: 'Compartilhe seu carro', link: '#' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'Fale com a gente', link: '#' },
    ],
  },
  {
    title: 'Sobre nós',
    links: [
      { label: 'Vou!', link: '#' },
      { label: 'Politica de Privacidade', link: '#' },
    ],
  },
];

export default function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img src="https://i.imgur.com/fTVflAB.png" alt="" height={50} />
          <Text size="xs" c="dimmed" className={classes.description}>
          Evolução da mobilidade urbana? Aqui, é revolução no aluguel de carros!
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2023 Vou. Todos os direitos reservados.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}