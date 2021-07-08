import React from "react";

import Link from "next/link";
import Router from "next/router";

function _error() {
  return (
    <div className="error404-page">
      <h1>Error 404</h1>
      <div>
        <p>Under Maintenance. Try again Later.</p>
        <button
          onClick={() => {
            Router.push("/");
          }}
        >
          Go To Home
        </button>
      </div>
    </div>
  );
}

export default _error;
