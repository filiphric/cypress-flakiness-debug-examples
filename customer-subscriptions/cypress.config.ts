/// <reference types="cypress" />
import { defineConfig } from "cypress";
import replayPlugin from "@replayio/cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    fixturesFolder: false,
    supportFile: 'cypress/support.ts',
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      replayPlugin(on, config);
      return config
    },
   },
});
