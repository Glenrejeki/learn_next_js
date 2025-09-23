import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images:{
    remotePatterns : [{
      protocol : "https",
      hostname :"encrypted-tbn0.gstatic.com",
      pathname:"/**"
    }
    ]
  }
};

export default nextConfig;
