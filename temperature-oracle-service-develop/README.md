# temperature-oracle-service
oracle service for getting temperature data and relaying it to a smart contract

## Install dependencies

Use `yarn` for that

```
$ yarn install
```

## Setup Environment

Get yourself a `.env` file, and update it as you see fit. Make sure your account has ETH to pay gas fees.

```
$ cp .env.example .env
```

## Start the processes

Start the temperature oracle and the event lister with

```
$ yarn develop
```
