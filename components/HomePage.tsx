"use client";

import Faucet from "./Faucet";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="text-center self-center">
        Omegayon Avail Testnet Faucet
        <Faucet />
      </div>
    </div>
  );
};

export default HomePage;
