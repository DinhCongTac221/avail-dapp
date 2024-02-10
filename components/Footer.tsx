import Link from "next/link";
import React from "react";

type Props = {};
import {
  PiCodeBold,
} from "react-icons/pi";

import { RiTwitterXLine, RiGithubFill } from "react-icons/ri";

const Footer = (props: Props) => {
  return (
    <div className="justify-center gap-3 font-bold flex mt-2 text-2xl">
      <Link href="https://twitter.com/Omegayon" target="_blank">
        <RiTwitterXLine />
      </Link>
      <Link href="https://clodron.com/" target="_blank">
        <PiCodeBold />
      </Link>
      <Link href="https://github.com/berkeguleryuz" target="_blank">
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Footer;
