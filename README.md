# nwplus.io
Website for all things nwPlus!

## Getting started
First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying
This site deploys to Firebase Hosting as a static export (`next build && next export` → `out/`).
Deploys are handled automatically by GitHub Actions:
- pushes to `main` deploy to production (`.github/workflows/firebase-hosting-merge.yml`)
- pull requests get a preview channel (`.github/workflows/firebase-hosting-pull-request.yml`)

## Contributing
Check out our [contribution guidelines](https://github.com/nwplus/nwplus.io/blob/main/CONTRIBUTING.md).
