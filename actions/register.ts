"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { error } from "console";
import { getUserByEmail } from "@/data/user";

export const register = async (values:z.infer<typeof RegisterSchema>) =>{
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid Fields!" };
    }

    const {email,password,name} = validatedFields.data;
    const hashPassword = await bcrypt.hash(password,10);

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error:"Email already taken!"};
    }

    await db.user.create({
        data:{
            name,
            email,
            password:hashPassword,
        }
    })
    return {success:"User created "};
}