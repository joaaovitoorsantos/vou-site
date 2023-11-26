/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import { Title, Text, Button, Container } from '@mantine/core';
import Dots from '@components/dots';
import classes from './styles.module.css';

export default function HeroText() {
    return (
        <div className={classes.container}>
            <Container className={classes.wrapper}>

                <div className={classes.inner}>
                    <Title className={classes.title}>
                        Nós somos a "Vou!",<br /> a revolução no aluguel de carros.
                    </Title>

                    <Container p={0} size={600}>
                        <Text size="lg" c="dimmed" className={classes.description}>
                            Cansados da velha maneira de alugar carros, decidimos criar algo diferente. Somos uma equipe de inovadores, rebeldes e, acima de tudo, apaixonados por mobilidade. Acreditamos que todos merecem se movimentar livremente, sem burocracias ou barreiras. Na "Vou!", não seguimos regras ultrapassadas, criamos novos caminhos. Venha fazer parte dessa revolução!
                        </Text>
                    </Container>


                </div>
                <img src="https://i.imgur.com/evO2LVJ.png" alt="" height={400} style={{
                    marginTop: 32

                }} />
            </Container>
        </div>

    );
}