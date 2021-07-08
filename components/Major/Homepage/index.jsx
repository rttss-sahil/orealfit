import React from "react";

import Link from "next/link";

function HomePage() {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div className="container">
        <p>Become a member of Orealfit,</p>
        <Link href="/signup">Join Us</Link>
      </div>
    </div>
  );
}

export default HomePage;
