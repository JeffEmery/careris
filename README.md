# CareRIS

**Introducing CareRIS - the next generation Radiology Information System**

`swa start` to run the application locally with the Azure Static Web Apps
emulator at http://localhost:4280

Using Remix configuration for
[PostCSS](https://remix.run/docs/en/v1/guides/styling#postcss)

Using
[PostCSS to run TailwindCSS](https://tailwindcss.com/docs/installation/using-postcss)
as a plugin

[Configure TailwindCSS](https://remix.run/docs/en/v1/guides/styling#tailwind-css)
according to Remix documentation (Note: We're using PostCSS not `tailwindcss`
command line)

Using
[PostCSS to optimizing CSS](https://tailwindcss.com/docs/optimizing-for-production)
with [cssnano](https://cssnano.co/) for production

### Build the CSS and Application

`npm run build:app`

This will build the CSS in production mode and build the app according to
NODE_ENV.

### Build and run the App and CSS in development

`npm run dev`

This will put the CSS into watch mode and start a Remix server on
http://localhost:3000. The application does NOT run in an Azure emulator.

### Build and run the App and CSS with Azure emulation

`swa start`

This will run the development build of the CSS in watch mode and the app in dev
mode running through the Azure emulator. This is the closest to a hosted
environment.

### Build the App and CSS

`swa build`

Ths builds the app and CSS in production mode.

### Deploy the app to Azure

If the repository is not connected to Github CI Actions, this will allow you to
deploy the app and function to Azure.
