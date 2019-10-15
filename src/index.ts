import { PropertiesApiApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { PropertiesApiApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new PropertiesApiApplication(options);
  await app.boot();
  console.log('migrating schema')
  await app.migrateSchema();
  console.log('migration finished')
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
