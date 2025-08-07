"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading && user) {
      router.push("/dashboard");
    }
  }, [user, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    setTimeout(async () => {
      const success = await login(email, password);
      if (!success) {
        setError("Invalid email and password");
      }
      setIsSubmitting(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="spinner animate-spin flex justify-center border-2 rounded-full border-r-white border-green-600 w-10 h-10 "></div>
    );
  }

  if (user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className=" bg-gradient-to-br flex flex-col md:flex-row from-white to-green-300 backdrop-blur-3xl h-screen overflow-hidden ">
      <div className="left-side md:w-[50%] space-y-10  ">
        <Link href={"/"}>
          <div className="text-green-600 font-Satoshi-bold text-2xl border px-5 py-2 my-3 mx-4 rounded-full w-fit ">
            TrackWise
          </div>
        </Link>
        <div>
          {" "}
          <p className="text-center text-4xl max-md:py-5  ">Welcome Back!</p>
          <p className=" max-w-[90%] md:max-w-[60%] text-center mx-auto">
            Sign in to access your dashboard and continue optimizing your Tasks
          </p>
          <p className=" max-w-[90%] md:max-w-[60%] text-center mx-auto">
            The login details is admin@gmail.com, admin123
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            className="max-w-[85%] md:max-w-[70%] mx-auto"
            type="email"
            placeholder="Email address"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="max-w-[85%] md:max-w-[70%] mx-auto"
            type="password"
            placeholder="Password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <div className="text-red-700 -w-[70%] mx-auto  text-xl font-Satoshi-bold">
              {error}
            </div>
          )}
          <Button
            text={isSubmitting ? "Logging in......" : "Login"}
            className={`max-w-[85%] md:maxmax-w-[70%] my-10 mx-auto justify-center text-xl py-3 w-full ${
              isSubmitting && "bg-slate-300"
            } `}
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </div>
      <div className="right-side max-md:hidden md:w-[50%] ">
        <Image
          src={"/login2.png"}
          alt="illustration pic"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};

export default Login;
