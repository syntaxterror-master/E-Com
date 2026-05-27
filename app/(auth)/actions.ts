"use server";
import { SignupFormSchema, LoginFormSchema, FormState } from "@/lib/definitions";
import bcrypt from "bcrypt"
import prisma from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  })
  
if(!validatedFields.success){
  return {
    errors: validatedFields.error.flatten().fieldErrors
  }
}

const { name, lastname, email, password } = validatedFields.data

const hashedPassword = await bcrypt.hash(password, 12) 

const data = await prisma.user.create({
  data: {
    name: name,
    lastname: lastname,
    email: email,
    password: hashedPassword,
  }
})

const user = data
const userId = data.id.toString()

if(!user){
  return {
    messsage: "An error occurred while creating your account"
  }
}


await createSession(userId)

if(user.role === "USER") redirect('/')
if(user.role === "ADMIN") redirect('/admin')


}

export async function login(state: FormState, formData: FormData) {
  
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })
  
if(!validatedFields.success){
  return {
    errors: validatedFields.error.flatten().fieldErrors
  }
}

const { email, password } = validatedFields.data

const user = await prisma.user.findUnique({ where: {email}})

const isPasswordValid = user ? await bcrypt.compare(password, user.password) : false

  if (!user || !isPasswordValid) {
    return {
      errors: {
        email: ["Neteisingas el. pašto adresas arba slaptažodis"],
      },
    };
  }

await createSession(user.id.toString());

if(user.role === "USER") redirect('/')
if(user.role === "ADMIN") redirect('/admin')


}

export async function logout() {
  await deleteSession();
  redirect("/");
}