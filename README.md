# AngularCLI



PWAs with the Angular CLI  
(https://medium.com/@amcdnl/service-worker-pwas-with-the-angular-cli-98a8f16d62d6)

1) Service Workers: First make sure you are on the latest CLI, then we can add a new flag to our angular-cli.json called serviceWorker.
<pre>
{
  "apps": [
    { "serviceWorker": true }
  ]
}
</pre>

2) Install NPM
npm i @angular/service-worker ng-pwa-tools --S

3) Build

ng build --prod

4) Indist folder, we have 3 new files:
ngsw-manifest.json — A manifest file automatically generated that contains all our resources.
sw-register — A service worker registration script.
worker-basic — The worker script that helps facilitate all the registration/etc.

5) we were able to automatically build all our assets and setup web worker registration and caching. The CLI automatically crawled all our configuration and generated all this for us! Sometimes you have files such as external fonts you also want to cache that the CLI can’t find. If you create a ngsw-manifest in the root of your project you can provide some extra configuration. In the index.html you can see the material docs use a few external assets that weren’t able to be resolved by the CLI. Lets create our ngsw-manifest.json and put add references to those files.



<pre>
{
  "external": {
    "urls": [
      {"url": "https://fonts.googleapis.com/icon?family=Material+Icons"},
      {"url": "https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono"},
      {"url": "https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"},
      {"url": "https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.2.5/web-animations.min.js"}
    ]
  }
}
</pre>

5) Manifests:
Now that we’ve created our service workers, we need to add a application manifest to describe our application. To do this, simply add a manifest.json file in the src folder of our application.
<pre>
{
  "name": "Angular Material",
  "short_name": "Angular Material",
  "theme_color": "#FFFFFF",
  "background_color": "#3F51B5",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "icons": [
    {
      "src": "\/android-chrome-36x36.png",
      "sizes": "36x36",
      "type": "image\/png",
      "density": "0.75"
    },
    {
      "src": "\/android-chrome-48x48.png",
      "sizes": "48x48",
      "type": "image\/png",
      "density": "1.0"
    },
    {
      "src": "\/android-chrome-72x72.png",
      "sizes": "72x72",
      "type": "image\/png",
      "density": "1.5"
    },
    {
      "src": "\/android-chrome-96x96.png",
      "sizes": "96x96",
      "type": "image\/png",
      "density": "2.0"
    },
    {
      "src": "\/android-chrome-144x144.png",
      "sizes": "144x144",
      "type": "image\/png",
      "density": "3.0"
    },
    {
      "src": "\/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image\/png",
      "density": "4.0"
    }
  ]
}
</pre>
You can use http://realfavicongenerator.net

6) Now we need to tell the application where this file is by adding a new tag to our index.html <link rel="mannifest" href="manifest.json" />



7) We also need to tell the CLI to pick up this file when we do the build by adding it to the assets property in our angular-cli.json file.

ngu-sw-manifest --module src/app/app.module.ts


8) Add ngsw-manifest.json file to the root folder for more configuration changes


9) Enabling PushNotification:
1) Add  Below code to the ng-sw-manifest.json file on the app root directory..
<pre>
"push": {
    "showNotifications": true,
    "backgroundOnly": false
}
</pre>


10) Register Service Worker....
Update the main.ts file to register the service worker.....


<pre>
10.1import below line to the app.module.ts fiel.
import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker'

10.2

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then( () => {
      if ( 'serviceWorker' in navigator ) {
        navigator.serviceWorker.register('/worker-basic.min.js');  
      }
    }
  );

  10.3: Update .angular-cli.json with to copy service worker.   

</pre>
