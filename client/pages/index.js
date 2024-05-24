import React from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = React.useState("Hello World");

  React.useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>{message}</h1>
        <Link href="/addperson">Add Person</Link>
        <Link href="/updateperson">Update Person</Link>
      </div>
    </main>
  );
}
