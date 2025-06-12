import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl w-4/5 bg-white text-black sm:max-w-96 mx-auto sm:text-2xl">
          <h1> Bamdad&apos;s Computer <br/> Shop </h1>
          <address>
            koche ali chap pelak 666
          </address>
          <p> always coding </p>
          <Link href="555666777" className="hover:underline" >
            555-666-777
          </Link>
        </div>
      </main>
    </div>
  );
}
