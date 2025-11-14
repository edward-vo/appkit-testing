"use client";
import { createStore } from "mipd";
import Image from "next/image";
import { useSyncExternalStore } from "react";
import { useAccount, useConnect, useConnectors, useDisconnect } from "wagmi";

const store = createStore()

export default function Home() {

  const accounts = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();
  
  const providers = useSyncExternalStore(store.subscribe, store.getProviders)
  

  const disconnect = async () => {
    connectors.map((connector) => disconnectAsync({ connector }));
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      iframe <br/>
      {navigator.userAgent}<br />
      {!window.ethereum ? 'No Eth' : 'Yes Eth'}<br />
      {!window.ReactNativeWebView ? 'No WebV' : 'Yes WebV'}
    </div>
  );
}


