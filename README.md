# TypeScript Project

This project explores TypeScript development practices and patterns. It provides a foundation for creating production-ready, scalable applications using TypeScript along with Node.js and npm.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Running the Tests](#running-the-tests)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Contributing](#contributing)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js, npm and TypeScript installed on your machine:

#### Tooling

- [Node.js 18](https://github.com/nvm-sh/nvm)
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install)

### installation

## Usage

For new AWS accounts, you need to bootstrap the account with the following command:

```shell
cdk bootstrap
```

### Add new example

1. Create a new directory under `examples/` with the name of the example.
2. run `cdk init app --language typescript` in the new directory.
3. run `npm install -g aws-cdk ` in the new directory.
4. run `npm install aws-cdk-lib` in the new directory.
5. run `npm install constructs` in the new directory.
6. run `export AWS_ACCESS_KEY_ID=` and `export AWS_SECRET_ACCESS_KEY=` and `export AWS_SESSION_TOKEN=` in the new directory with the credentials of the user you want to use.
7. add example into `bin/` directory.
8. run `cdk deploy` in the new directory.
