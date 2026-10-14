# Easel templates

Starter apps you can deploy to [Easel](https://easel.sh) in one click. Each folder is a standalone app.

| Template | Deploy |
| --- | --- |
| [Next.js](./nextjs) | [Deploy to Easel](https://app.easel.sh/new/clone?repository-url=https://github.com/easel-sh/templates/tree/main/nextjs) |
| [Vite + React](./vite-react) | [Deploy to Easel](https://app.easel.sh/new/clone?repository-url=https://github.com/easel-sh/templates/tree/main/vite-react) |
| [SvelteKit](./sveltekit) | [Deploy to Easel](https://app.easel.sh/new/clone?repository-url=https://github.com/easel-sh/templates/tree/main/sveltekit) |
| [Nuxt](./nuxt) | [Deploy to Easel](https://app.easel.sh/new/clone?repository-url=https://github.com/easel-sh/templates/tree/main/nuxt) |

Deploying makes a copy of the template's source in a new Easel project. To deploy your own changes, put the code in your own repository and connect it to the project.

## Deploy button for your own repo

Any public GitHub repository, or a folder in one, can be deployed with a link:

```
https://app.easel.sh/new/clone?repository-url=https://github.com/<owner>/<repo>
```

It accepts the same parameters as Vercel's Deploy Button: `repository-url` (may point at a folder with `/tree/<branch>/<path>`), `root-directory` and `project-name`.
