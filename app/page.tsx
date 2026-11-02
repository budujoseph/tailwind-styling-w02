import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="p-4">
            <Image
          className="rounded-full mx-auto w-[300px] h-[300px] object-cover"
          src="/tryimg.jpg"
          alt="My-trying-img"
          width={400}
          height={400}
          priority
        />
        <h1 className=" mt-7 text-center text-3xl font-bold">Tailwind CSS Practice</h1>
        <p className="bg-gray-700 mt-7 text-center p-3 rounded-md">Tailwind CSS is a utility-first framework for rapid building custom user interfaces</p>
        </div>
      </main>
    </div>
  );
}
