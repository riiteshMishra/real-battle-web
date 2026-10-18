"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/store";

// TANSTACK QUERY SETUP
const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });

const RootProviders = ({ children }: PropsWithChildren) => {
  // INITIALIZE QUERY CLIENT
  const [queryClient] = useState(() => createQueryClient());

  return (
    <ReduxProvider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default RootProviders;
