import Head from "next/head";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>CodeIT</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.ico"
        />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.ico" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.ico" />
      </Head>
      <Navbar />
      <main className="min-h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Code <span className="text-[hsl(280,100%,70%)]">IT</span>
          </h1>
          <h3 className="text-2xl text-white font-bold">Programa tu futuro</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/cursos"
            >
              <h3 className="text-2xl font-bold">Explorar →</h3>
              <div className="text-lg">
                Encuentra el contenido que más te guste sobre tu tecnología
                favorita
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/guias"
            >
              <h3 className="text-2xl font-bold">Guías →</h3>
              <div className="text-lg">
                Lee nuestros articulos en caso de ayuda
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
