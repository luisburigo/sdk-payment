import {trpc} from "@/config/trpc";
import {useForm} from "react-hook-form";
import {LoginForm} from "@/modules/auth/pages/login/types";
import useAuthStore from "@/modules/auth/store";
import {Button, TextField} from "@mui/material";

export function Login() {
    const {setToken} = useAuthStore();
    const {register, handleSubmit, formState, setError} = useForm<LoginForm>();

    const {mutate} = trpc.fakeAuth.useMutation({
        onError: error => {
            setError('root', {
                message: error.message
            })
        },
        onSuccess: data => {
            setToken(data.token);
        }
    });

    const onSubmit = (data: LoginForm) => {
        mutate({email: data.email})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Email"
                type="text"
                fullWidth
                {...register('email', {
                    required: 'Email é obrigatorio.'
                })}
            />
            <p>{formState.errors?.email?.message}</p>
            <p>{formState.errors?.root?.message}</p>
            <Button
                type="submit"
                size="large"
                variant="contained"
                fullWidth
            >
                Signin
            </Button>
        </form>
    )
}