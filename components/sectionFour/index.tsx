/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import { Timeline, Text, ThemeIcon, Container } from '@mantine/core';
import { IconKey, IconCreditCard, IconCar, IconCalendarEvent, IconHandshake } from '@tabler/icons-react';
import classes from './styles.module.css'

export default function CarRentalTimeline() {
    return (
        <Container>
            <div className={classes.inner}>
                <Timeline active={0} bulletSize={24} lineWidth={2}>
                    <Timeline.Item
                        title="Escolha sem sair de casa"
                        bullet={<ThemeIcon color="dark" size={30} radius="xl"><IconCar size={16} /></ThemeIcon>}
                    >
                        <Text>Navegue pelo nosso app e encontre o carro perfeito para a sua necessidade.</Text>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Pague do SEU jeito"
                        bullet={<ThemeIcon color="dark" size={30} radius="xl"><IconCreditCard size={16} /></ThemeIcon>}
                    >
                        <Text>Sem cartão de crédito? Sem problemas! PIX, boleto e até sua conta de luz estão na lista.</Text>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Pegue o carro, sem papo furado"
                        bullet={<ThemeIcon color="dark" size={30} radius="xl"><IconKey size={16} /></ThemeIcon>}
                    >
                        <Text>Sem balcões, sem espera. Só você, o app e o carro que você precisa.</Text>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Curta sua viagem"
                        bullet={<ThemeIcon color="dark" size={30} radius="xl"><IconCar size={16} /></ThemeIcon>}
                    >
                        <Text>Com o vento no cabelo e a liberdade na alma.</Text>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Devolva quando quiser"
                        bullet={<ThemeIcon color="dark" size={30} radius="xl"><IconCalendarEvent size={16} /></ThemeIcon>}
                    >
                        <Text>Sem surpresas desagradáveis. Devolva o carro, confirme no app, e pronto!</Text>
                    </Timeline.Item>
                </Timeline>
                <img
                    src="https://i.imgur.com/voRaL4l.png"
                    alt=""
                    height={500}
                    className={classes.image}
                />
            </div>
        </Container>
    );
}
