import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import FormControl from '../../components/FormControl/FormControl';
import { useAppSelector } from '../../hooks/useAppSelector';
import { login } from '../../store/actions/auth';
import { valid } from '../../utils/validation';
import "./Login.scss"


interface IFormFields {
    email: string
    password: string
}

const Login = () => {
    const dispatch = useDispatch()
    const { isAuth, error } = useAppSelector(state => state.auth)

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid, isDirty } }
        = useForm<IFormFields>({ mode: "onChange" })


    const onSubmit: SubmitHandler<IFormFields> = (data) => {
        dispatch(login({ email: data.email, password: data.password }))
    }



    return (
        <div className="login">
            <div className="login__block">
                <h1 className="login__title">Admin</h1>
                <form action="" className="login__form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControl register={register("email", valid(30))} type="email"
                        label="Email" placeholder="Your email" id="email"
                        errors={errors.email} />

                    <FormControl register={register("password", valid(30))} type="password"
                        label="Password" placeholder="Your password" id="password"
                        errors={errors.password} />

                    <button type="submit" className="login__btn"
                        disabled={isSubmitting || !isValid || !isDirty}>
                        Login
                    </button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;