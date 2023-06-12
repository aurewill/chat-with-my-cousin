import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";

// Our stack-specific configuration.
const config = new pulumi.Config();
const repo = config.require("repo");
const branch = config.require("branch");

// The DigitalOcean region to deploy into.
const region = digitalocean.Region.NYC3;

// The App Platform spec that defines our grocery list.
const app = new digitalocean.App("app", {
  spec: {
      name: "grocery-list",
      region: region,

      // The React front end.
      staticSites: [
          {
              name: "frontend",
              github: {
                  repo,
                  branch,
                  deployOnPush: true,
              },
              sourceDir: "/frontend",
              buildCommand: "npm install && npm run build",
              outputDir: "/dist",
          }
      ],

      // The Nest back end.
      services: [
          {
              name: "backend",
              github: {
                  repo,
                  branch,
                  deployOnPush: true,
              },
              sourceDir: "/backend",
              buildCommand: "npm install && npm run build",
              runCommand: "npm start:prod",
              httpPort: 8000,
              routes: [
                  {
                      path: "/api",
                      preservePathPrefix: true,
                  },
              ],
              instanceSizeSlug: "basic-xxs",
              instanceCount: 1,

              // To connect to MongoDB, the service needs a DATABASE_URL, which
              // is conveniently exposed as an environment variable thanks to its
              // membership in this app spec (below). (SCOPE NEEDED?)
              envs: [
                  {
                      key: "DATABASE_URL",
                      scope: "RUN_AND_BUILD_TIME",
                      value: "${db.DATABASE_URL}",
                  },
              ],
          },
      ],
  },
});

// The DigitalOcean-assigned URL for our app.
export const { liveUrl } = app;