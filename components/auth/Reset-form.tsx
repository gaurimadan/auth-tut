"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetSchema } from "@/schemas";
import * as z from "zod";
import { useState, useTransition } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { reset } from "@/actions/reset";

export const ResetForm = () => {
   
    const[error,setError] = useState<string|undefined>("");
    const[success,setSuccess] = useState<string|undefined>("");
    const[isPending,startTranstion] = useTransition();
    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
           
        },
    });

    const onSubmit=(values:z.infer<typeof ResetSchema>)=>{
        setError("");
        setSuccess("");
        startTranstion(()=>{
            reset(values)
             .then((data)=>{
                setError(data?.error);
                setSuccess(data?.success);
             })
        });
    }

    return (
        <CardWrapper
            headerLabel="Forgot your password?"
            backButtonLabel="Go back to login"
            backButtonhref="/auth/login"
            >
            
            {/* Use FormProvider to provide the form context */}
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
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
                           
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full">
                        send Reset email
                    </Button>
                </form>
            </FormProvider>
        </CardWrapper>
    )
}
