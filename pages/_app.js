import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="fullpage-container">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
