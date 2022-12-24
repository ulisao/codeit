import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Cursos = () => {
  return (
    <>
      <Head>
        <title>CodeIT</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Code <span className="text-[hsl(280,100%,70%)]">IT</span>
          </h1>
          <h1 className="text-5xl text-white">ACA VAN LOS CURSOS MOSTRADOS</h1>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Cursos;