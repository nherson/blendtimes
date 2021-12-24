# Blend Times

The (bl)end times are upon us.

## Development

Run the server locally:

```
npm run start
```

Watch for tailwind changes and automatically recompile CSS (run in background):

```
npx tailwindcss -i ./src/index.css -o ./build/output.css --watch
```

Prepare a deploy:

```
npm run predeploy
```

Deploy:

```
npm run deploy
```

## Todo

* Support keg base weight
* Final volume specification
* Fine tuned weight adjustments w/ final gravities
* Help modal
* CSV download
* Metric