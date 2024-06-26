
## Message Storage dApp: Local Development Setup

### 1. Clone the repository:

```bash
git clone <repository_url>
cd message-storage-dapp
```

### 2. Install Dependencies:

```bash
npm install
```

### 3. Create an .env file:

Create a file named `.env` in the root directory of your project with the following content:

```bash
INFURA_PROJECT_ID=<Your_Infura_Project_ID>
PRIVATE_KEY=<Your_Private_Key>
CONTRACT_ADDRESS=<Deployed_Contract_Address>
CONTRACT_ABI=<Contract_ABI>
```

### 4. Deploy Smart Contract:

1. Compile and deploy the smart contract using Remix IDE or Truffle.
2. Copy the deployed contract address and ABI to the `.env` file.

### 5. Run Node.js Server:

```bash
node index.js
```

### 6. Testing Endpoints:

Use Postman or another tool to test the endpoints:

- `GET /api/message`: Retrieve the current message stored on the blockchain.
- `POST /api/message`: Store a new message on the blockchain.

---
