import { configureStore } from "@reduxjs/toolkit";
import { testRootReducer, TestRootState } from "./testRootReducer";

export function createTestStore(preloadedState?: Partial<TestRootState>) {
  return configureStore({
    reducer: testRootReducer,
    preloadedState: preloadedState as TestRootState | undefined,
  });
}

export type TestStore = ReturnType<typeof createTestStore>;
