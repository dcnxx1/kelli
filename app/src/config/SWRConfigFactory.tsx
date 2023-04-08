import { AppState, AppStateStatus } from "react-native/types";
import { SWRConfig } from "swr";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SWRConfigFactory({ children }: Props) {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => true,
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = (nextAppState: AppStateStatus) => {
            if (
              appState.match("/inactive|background/") &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };
          const sub = AppState.addEventListener("change", onAppStateChange);
          return () => {
            sub.remove();
          };
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
