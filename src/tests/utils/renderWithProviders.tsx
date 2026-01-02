import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { createTestStore, TestStore } from "./testStore";

type ExtendedRenderOptions = {
  store?: TestStore;
} & Omit<RenderOptions, "queries">;

export function renderWithProviders(
  ui: ReactElement,
  { store = createTestStore(), ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
