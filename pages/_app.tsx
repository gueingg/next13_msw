import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = async (url: RequestInfo | URL) => {
    const res = await fetch(url); 
    if(!res.ok){
      const error = new Error('An error occurred while fetching the data');
      // error.info = await res.json();
      // error.status = res.status
      throw error;
    }
    return res.json()
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
