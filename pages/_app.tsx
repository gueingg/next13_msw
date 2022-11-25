import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { AuthProvider, AuthConsumer } from "../app/Components/AuthContext";
import { registerChartJs } from "../app/utils/register-chart-js";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../app/theme";

registerChartJs();

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data");
      // error.info = await res.json();
      // error.status = res.status
      throw error;
    }
    return res.json();
  };

  console.dir("1");

  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/* <AuthProvider>
          <AuthConsumer>
            {(auth) => auth.isLoading ? <>11</> : <>22</>}
          </AuthConsumer>
        </AuthProvider> */}
      </ThemeProvider>
    </SWRConfig>
  );
}
