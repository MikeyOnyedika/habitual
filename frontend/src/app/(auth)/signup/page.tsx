"use client"
import Image from "next/image";
import Logo from "@/app/assets/logo.svg"
import Link from "next/link"
import TextField from "@/app/components/form/TextField";
import Button from "@/app/components/form/Button";
import { GoogleLogo } from "@/app/assets/icons";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Signup() {
  const router = useRouter()
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push("/overview")
  }
  return (
    <div className="w-full h-full flex p-4">
      <main className="w-full h-full flex flex-col items-center gap-4">
        <Image src={Logo} alt="logo" />
        <div className="flex flex-col w-full h-full items-center gap-4">
          <h1 className="font-bold text-lg">Create Account</h1>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <TextField label="Username" name="username" />
            <TextField label="Email" name="email" />
            <TextField label="Password" name="password" />
            <Button label="Signup" isSubmit={true} />
          </form>
          <p className="text-[0.81rem] font-bold text-gray-75">Or Continue with</p>
          <Button variant="gray" label="Google" isSubmit={true}>
            <Image src={GoogleLogo} alt="google logo" />
          </Button>

          <p className="text-[0.81rem] flex items-center gap-2">
            <span>Already have an account?</span>
            <Link href="/login" className="text-primary-500 hover:underline">Login</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
