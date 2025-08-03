# Gizmo SDK

Unofficial SDK for Gizmo API v1, v2, v3 (alpha)

## Features
- Support for multiple API versions (v1, v2, v3)
- Authorization via username/password

## Installation

```bash
npm install gizmovsky
```

## Usage Example

```js
import { GizmoSDK } from 'gizmo-sdk';

const config = {
    ip: '127.0.0.1',
    port: 81,
    ssl: false,
    username: 'admin',
    password: 'admin',
    version: 3 // 1, 2, or 3
};

const sdk = new GizmoSDK(config);

// Example: Get users (v1)
const users = await sdk.v1.users.getUsers();

// Example: Get products (v3)
const products = await sdk.v3.products.getProducts();
```

## Custom Requests

You can use the underlying client for custom requests:

```js
const client = sdk.client;
const result = await client.request('get', '/v3.0/any-endpoint', { body1: "value" }, { param1: 'value' });
```

## Contributing
Pull requests and issues are welcome!

## License
MIT
