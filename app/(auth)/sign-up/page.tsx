"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup } from "../actions";
import { useActionState } from "react";

export default function SignupForm(){
  const [ state, action, pending] = useActionState(signup, undefined)

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


      <div className="flex h-full items-center justify-center w-[70%] lg:w-[40%]">
        <div className="flex flex-col justify-center  items-cener gap-6">

          <h1>Create an account</h1>
          <p>Enter your details below</p>

          <div className="flex w-full flex-col gap-y-8 bg-background py-8">
            <form action={action}>
            <div className="flex gap-5 py-4">
            <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              className="text-sm"
              />
            {state?.errors?.name && <span className="text-sm text-red-600">{state.errors.name}</span>}
              </div>
              <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Last Name"
              name="lastname"
              className="text-sm"
              />
            {state?.errors?.lastname && <span className="text-sm text-red-600">{state.errors.lastname}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              className="text-sm"
              />
            {state?.errors?.email && <span className="text-sm text-red-600">{state.errors.email}</span>}
              </div>
              <div className="flex flex-col gap-4 py-4">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              className="text-sm"
              />
            {state?.errors?.name && (
              <div className="m">
                <p className="text-md mb-2 text-red-600">Password must:</p>
                <ul className=" flex flex-col gap-2 text-sm text-red-600">
                  {state.errors.password?.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
            </div>
            <Button disabled={pending} type="submit" className="w-full">
              Create Account
            </Button>
            </form>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>Already have account?</p>
            <a
            href="/login"
              className="font-medium text-primary hover:underline"
            >
              Log In
            </a>
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}
