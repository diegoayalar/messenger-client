import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import { z } from 'zod';
import { logIn } from '../api/auth';
import { useAuth } from '../context/AuthContext';

const schema = z.object({
    email: z
        .string()
        .nonempty('Email is required')
        .email('Invalid email address'),
    password: z
        .string()
        .nonempty('Password is required')
        .min(8, 'Password must be at least 8 characters'),
});

type FormFields = z.infer<typeof schema>;

const LoginPage = () => {
    const { refreshAuth } = useAuth();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await logIn(data.email, data.password);
            await refreshAuth();
        } catch (error) {
            setError('root', {
                message:
                    error instanceof Error
                        ? error.message
                        : 'An unknown error occurred.',
            });
        }
    };

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">
            <h2 className="text-6xl font-semibold mb-12">Log In</h2>
            <form
                className="flex flex-col w-full max-w-[600px] p-4 min-h-0"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="text-left text-3xl mb-2">Email</label>
                <input
                    {...register('email')}
                    className="shadow border border-gray-200 rounded py-1 pl-2 text-3xl"
                    type="email"
                    placeholder="Enter your email"
                />
                {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                )}

                <label className="text-left text-3xl mt-2 mb-2">Password</label>
                <input
                    {...register('password')}
                    className="shadow border border-gray-200 rounded py-1 pl-2 mb-1 text-3xl"
                    type="password"
                    placeholder="Enter your password"
                />
                {errors.password && (
                    <div className="text-red-500">
                        {errors.password.message}
                    </div>
                )}

                {errors.root && (
                    <div className="text-red-500">{errors.root.message}</div>
                )}

                <button
                    className="text-3xl font-bold rounded shadow mt-5 p-2 bg-gray-200 hover:bg-gray-300"
                    disabled={isSubmitting}
                    type="submit"
                >
                    Log in
                </button>

                <div className="items-start mt-3">
                    <NavLink to="/signup" className="text-2xl">
                        Sign Up
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
