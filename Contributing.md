# AWS CDK TypeScript examples Contributing Guide

[TOC]

## Getting Started

This guide contains the necessary instructions for developers who will contribute to the aws-cdk examples

### Prerequisites

These are the prerequisites for using or developing the service this repository.

#### Tooling

- [Node.js 18](https://github.com/nvm-sh/nvm)
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install)


### Add new example

1. Create a new directory under `examples/` with the name of the example.
2. run `cdk init app --language typescript` in the new directory.
3. run `npm install -g aws-cdk ` in the new directory.
4. run `npm install aws-cdk-lib` in the new directory.
5. run `npm install constructs` in the new directory.
6. run `export AWS_ACCESS_KEY_ID=` and `export AWS_SECRET_ACCESS_KEY=` and `export AWS_SESSION_TOKEN=` in the new directory with the credentials of the user you want to use.
7. add example into `bin/` directory.
8. run `cdk deploy` in the new directory.
