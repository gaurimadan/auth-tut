"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { useState, useTransition } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";

export const RegisterForm = () => {
    const[error,setError] = useState<string|undefined>("");
    const[success,setSuccess] = useState<string|undefined>("");
    const[isPending,startTranstion] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name:"",
        },
    });

    const onSubmit=(values:z.infer<typeof RegisterSchema>)=>{
        setError("");
        setSuccess("");
        startTranstion(()=>{
            register(values)
             .then((data)=>{
                setError(data.error);
                setSuccess(data.success);
             })
        });
    }

    return (
        <CardWrapper
            headerLabel="Create an Account"
            backButtonLabel="Already have an account?"
            backButtonhref="/auth/login"
            showSocial>
            
            {/* Use FormProvider to provide the form context */}
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                    <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="John Doe"
                                            type="name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="abc123@gmail.com"
                                            type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full">
                        Register
                    </Button>
                </form>
            </FormProvider>
        </CardWrapper>
    )
}
