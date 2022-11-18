import { ReactNode } from "react";
import { ModalProvider } from "./Components/ModalContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="root"><ModalProvider>{children}</ModalProvider></div>
      </body>
    </html>
  );
}
