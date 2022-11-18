import { ReactNode } from "react";
import { ModalProvider } from "./Components/ModalContext";
import Nav from './nav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
            <Nav></Nav>
        </header>
        <div id="root">
          <ModalProvider>{children}</ModalProvider>
        </div>
      </body>
    </html>
  );
}
