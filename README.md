This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Requirements
- Node.js 18.18 or later


## Running app

First, install dependencies:
```bash
npm install
```

To run app (with live reload)
```bash
npm run dev
```

## Running Playwright Tests

Assuming app is running, the Playwright UI can be run with the following command:
```bash
npx playwright test --ui
```

Alternatively, the [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) can be used. Tests should appear in the Test Explorer.

## OpenAPI Specification/Swagger UI
- OpenAPI specification is automatically generated and available at http://localhost:3000/api/doc
- Swagger UI pointing a the API spec is available at http://localhost:3000/swagger-ui.html

