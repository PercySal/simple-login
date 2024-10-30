"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const loginParams = useSearchParams();
  const isLoggedIn = loginParams.has("isLoggedIn");

  if (!isLoggedIn) {
    return redirect("/login");
  } else {
    return (
      <div>
        <p>Welcome!</p>
        <a href="/">Logout</a>
      </div>
    );
  }
}
