import Link from "next/link";
import { signIn } from "next-auth/react";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { useRouter } from 'next/router';


export default function Navbar() {
  const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { requestChallengeAsync } = useAuthRequestChallengeEvm();
    const { push } = useRouter();

    const handleAuth = async () => {

        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const { message } = await requestChallengeAsync({ address: account, chainId: chain.id });

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('moralis-auth', { message, signature, redirect: false, callbackUrl: '/' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };

  return (
    <header className="container mx-auto flex flex-wrap px-2 py-2 flex-col md:flex-row items-center text-gray-400 bg-transparent body-font">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/cursos" className="mr-5 px-2 py-2 font-semibold text-white no-underline transition hover:text-white">Cursos</Link>
          <Link href="/guias" className="mr-5 px-2 py-2 font-semibold text-white no-underline transition hover:text-white">Guías</Link>
          <Link href="/nosotros" className="mr-5 px-2 py-2 font-semibold text-white no-underline transition hover:text-white">Nosotros</Link>
          <Link href="/contacto" className=" px-2 py-2 font-semibold text-white no-underline transition hover:text-white">Contacto</Link>
        </nav>
        <Link href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl xl:block lg:hidden">CodeIT</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <div className="flex flex-col items-center justify-center gap-4">
              <button className=" mb-2 rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20" onClick={handleAuth}>
              Ingresar
              </button>
          </div>
        </div>
    </header>
  )
}


    

