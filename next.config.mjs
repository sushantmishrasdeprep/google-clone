let nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: `https`,
          hostname: `images.unsplash.com`,
          pathname: `/photo-*`, // Optional: Match specific paths
        },
        {
          protocol: `https`,
          hostname: `www.google.com`, // Updated hostname
          //pathname: `/images/branding/googlelogo*`, // Match specific paths
        },
      ],
    },
  };
  
  export default nextConfig