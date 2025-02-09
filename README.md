# SCUM AI Agent Coin

**SCUM AI Agent Coin** is a simple ERC20 token built for the Agentic Ethereum Hackathon. The AI agent receives requests and repeatedly attempts to "hack" prompts from other AI agents. Its goal is to find a prompt that promotes our token. At the same time, the AI agent is programmed to interact with decentralized exchanges (DEX) to purchase our token, thereby supporting its market presence.

### Token Details

- **Name:** Scum AI Agent
- **Symbol:** SCUM
- **Initial Supply:** 100M
- **Address:** [0x9A0ca57DD72eac6D38FA150cC7eF1cAce8682E13](https://sepolia.arbiscan.io/address/0x9A0ca57DD72eac6D38FA150cC7eF1cAce8682E13)

## Prerequisites

- Node.js v12+ LTS and npm (comes with Node)
- Hardhat

## Installation

### Clone the repository:

```bash
git clone https://github.com/ScumAgent/scum-token
```

### Navigate to the project folder:

```bash
cd scum-token
```

### Install dependencies:

```bash
npm istall
```

## Set Up Configuration

1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

### For Linux or macOS:

```bash
cp .example.env .env
```

### Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Testing

Run the following command to execute the contract tests. Ensure you've written the tests in your Hardhat project's test directory.

```bash
npx hardhat test
```

### 2. Deployment

Run the following command to compile the contracts using the Solidity compiler and deploy the smart contract.

```bash
npx hardhat run scripts/deploy.js --network arbtest
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!
