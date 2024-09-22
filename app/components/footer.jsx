import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#222831] z-10 border-l-transparent border-r-transparent text-white bg-[#222831]">
      <div className="container p-12 flex justify-between">
        {/* <Image src={LogoIcon} alt="Logo Icon" width={24} height={24} /> */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
