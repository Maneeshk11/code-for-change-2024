import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId='79490610041-57m0fj4mgjhu9ksf5meucc5igipnoipm.apps.googleusercontent.com'>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
