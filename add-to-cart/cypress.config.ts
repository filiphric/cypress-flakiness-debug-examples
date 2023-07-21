/// <reference types="cypress" />
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    fixturesFolder: false,
    supportFile: false,
    retries: 2
   },
});
