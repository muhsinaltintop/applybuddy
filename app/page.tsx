import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Apply Buddy</h1>
        <h2 className="text-lg font-bold">To-Do List:</h2>
        <ol className="">
          <li className="">Create Register</li>
          <li className="">Create Login</li>
        </ol>

        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Apply Buddy is Here to help you during your job applications.
      </footer>
    </div>
  );
}
