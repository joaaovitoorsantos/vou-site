//@ts-nocheck
import { Title, Text, Button, Container, Avatar, Group, Paper } from '@mantine/core';
import classes from './styles.module.css';

export default function HeroText() {

    const testimonials = [

        {
            name: "Maria Clara",
            role: "Empreendedora",
            comment: "A Vou! revolucionou a maneira como eu vejo o serviço de locação. Atendimento de primeira e processos super simples!",
            avatar: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        },
        // Novo depoimento 2
        {
            name: "Carlos Souza",
            role: "Fotógrafo Profissional",
            comment: "Para quem precisa de flexibilidade e rapidez, recomendo a Vou! sempre. Atendimento excelente e carros impecáveis.",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        }
    ];

    return (
        <Container className={classes.wrapper} size={1400}>
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Nossos clientes falam por nós. E eles são bem claros.
                </Title>

                <div className={classes.fixFlex}>
                    {testimonials.map(testimonial => (
                        <Paper withBorder radius="md" className={classes.comment} key={testimonial.name}>
                            <Group>
                                <Avatar src={testimonial.avatar} />
                                <div>
                                    <Text fz="sm">{testimonial.name}</Text>
                                    <Text fz="xs" c="dimmed">
                                        {testimonial.role}
                                    </Text>
                                </div>
                                <div className={classes.content}>
                                    {testimonial.comment}
                                </div>
                            </Group>
                        </Paper>
                    ))}
                </div>
            </div>
        </Container>
    );
}