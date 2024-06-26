import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1> Frontend Next JS</h1>
        <Link href="/addpersonform">Add Person</Link>
        <Link href="/updateperson">Update Person</Link>
      </div>
    </main>
  );
}
