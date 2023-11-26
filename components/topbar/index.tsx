/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './styles.module.css';

const links = [
    { link: '/como-funciona', label: 'Como funciona' },
    { link: '/compartilhe-seu-carro', label: 'Compartilhe seu Carro' },
    { link: '/contato', label: 'Contato' },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <img
                    src="https://i.imgur.com/fTVflAB.png"
                    alt=""
                    height={30}
                    style={{ cursor: 'pointer' }}
                />
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}