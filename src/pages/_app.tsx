import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { mainnet, goerli } from 'wagmi/chains'

const defaultChains = [mainnet, goerli]

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={session} refetchInterval={0}>
        <Component {...pageProps} />
    </SessionProvider>
    </WagmiConfig>
  );
};

export default trpc.withTRPC(MyApp);
