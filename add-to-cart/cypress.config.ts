/// <reference types="cypress" />
import { defineConfig } from "cypress";
import { plugin as replayPlugin } from "@replayio/cypress";

export default defineConfig({
  projectId: 'hejdx4',
    e2e: {
      setupNodeEvents(on, config) {
        replayPlugin(on, config, {
          upload: true,
          apiKey: process.env.REPLAY_API_KEY,
        });
        return config;
      },
      baseUrl: 'http://localhost:3000',
      supportFile: 'cypress/support.ts',
      retries: 2
    },
  });