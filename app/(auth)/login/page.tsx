"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { login } from "../actions";


export default function LoginPage(){
    const [ state, action, pending] = useActionState(login, undefined)
  return (
    <section className='py-10'>
      <div className="flex h-[85dvh] lg:justify-between justify-center">

    <div className="h-full relative lg:w-[50%]">
      <Image 
      src={"/images/auth_img.webp"}
      fill
      className="object-center lg:flex hidden object-cover"
      alt="Phone with Card and Products"
      />
    </div>


      <div className="flex h-full items-center justify-center lg:w-[50%]">
        <div className="flex flex-col justify-center  items-cener gap-6">

          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>

          <div className="flex w-full max-w-sm min-w-sm flex-col gap-y-8 bg-background py-4">
            <form action={action}>
             <div className="flex flex-col gap-8">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="text-sm"
              />
              {state?.errors?.email && <span className="text-sm text-red-600">{state.errors.email}</span>}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="text-sm"
              />
              {state?.errors?.password && <span className="text-sm text-red-600">{state.errors.password}</span>}
            <Button disabled={pending} type="submit" className="w-full">
              Login
            </Button>
              </div>
             </form>
          </div>

          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>Need an account?</p>
            <a
            href="/sign-up"
              className="font-medium text-primary hover:underline"
            >  
            Sign up
            </a>
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}