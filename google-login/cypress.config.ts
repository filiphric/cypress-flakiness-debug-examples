/// <reference types="cypress" />
import { defineConfig } from "cypress";
import replay from "@replayio/cypress";

export default defineConfig({
  projectId: 'hejdx4',
  e2e: {
    baseUrl: 'http://localhost:3000',
    fixturesFolder: false,
    supportFile: 'cypress/support.ts',
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      replay(on, config);
      return config
    },
   },
});
