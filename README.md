## Installation

```
cd producer
npm i
npm run build
cd ../consumer
npm i
npm run start:dev
```

## Error

Running `curl "localhost:3000/working?aNumber=1"` correctly prints `Hello World!%` and the NestJS log shows `{ aNumber: 1 }`

Running `curl "localhost:3000/broken?aNumber=1"` dies with an error 500 because `aNumber` is still treated as string despite the `@Type` annotation.
