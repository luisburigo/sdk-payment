import {Box, Button, List, ListItem, ListItemText, Typography} from "@mui/material";
import useOrder from "@/modules/order/store";
import {toCurrency} from "@/utils/string";
import useRouter from "@/modules/core/hooks/router";

function Order() {
    const {order} = useOrder();
    const {nextRoute} = useRouter();

    return (
        <Box>
            <List>
                {order.map(item => (
                    <ListItem>
                        <Box
                            component="img"
                            src={item.image}
                            sx={{
                                width: '100%',
                                maxWidth: '100px'
                            }}
                        />
                        <ListItemText sx={{ margin: 2 }}>
                            <Typography>
                                {item.name}
                            </Typography>
                            <Typography>
                                Qtd. {item.quantity}
                            </Typography>
                            <Typography>
                                Valor: {toCurrency(item.price)}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button
                onClick={nextRoute}
                variant="outlined"
                size="large"
                fullWidth
            >
                Ir para pagamento
            </Button>
        </Box>
    )
}

export default Order;