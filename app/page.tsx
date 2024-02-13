"use client";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full h-full justify-center text-center">
        <Nav />
        <Footer />
        <HomePage />
        <Link
          href={`https://fl.dym.fyi/rollapp/omegayon_8075298-1`}
          className="text-3xl text-lime-600 border-b-2 border-lime-600">
          ❂ Rollapp
        </Link>
        <div className="justify-center text-center">
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x0b95d7bED91BB7323682c8eb9490aF0189925881&chain=%7B%22name%22%3A%22omegayon-1%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fevmrpc.clodron.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22Omega%22%2C%22name%22%3A%22Omega%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22omegayon-1%22%2C%22chainId%22%3A8075298%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22omegayon-1%22%2C%22icon%22%3A%7B%22url%22%3A%22%22%2C%22width%22%3A50%2C%22height%22%3A50%2C%22format%22%3A%22%22%7D%7D&clientId=1b92c02c1df9434398d1373e31966efb&tokenId=0&theme=system&primaryColor=green"
            width="600px"
            height="600px"
            className="w-full mt-2"
          />
        </div>
      </main>
    </>
  );
}
