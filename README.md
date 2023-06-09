# [Updated] - Add build and run steps

## Pre-requisites
Make sure that you have the following tools installed in your system:
`Terraform`, `docker`, `docker compose`, `curl`, `cdktf`

## Execution steps
1. Install dependencies using `pnpm`
```bash
pnpm install --prefix=./packages/iac
```
2. Change directory to `packages/iac`
```bash
cd packages/iac
```
3. Spin up the HashiCups backend server
```bash
pnpm run api:init
```
4. Create HashiCups user. Note: make sure you confirm the token from the response.
```bash
pnpm run user:create
```
5. Deploy the `cdktf` stack. Ensure to approve the deployment plan
```bash
cdktf deploy
```
6. Run the unit tests
```bash
pnpm test
```
7. After testing the application, you can destroy the infra. Approve the plan
```bash
cdktf destroy
```
8. Drop the HashiCups backend server
```bash
pnpm run api:destroy
```


# Yassir take-home platform engineering challenge

**Note**: Do not **fork** this repository. Just clone it locally. We do not accept pull requests.

This repository acts as a boilerplate to get you started tackling Yassir's platform engineering challenge.

The stack used here is close to what we use for Infrastructure As Code. Mainly:

- [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
- [CDK for Terraform](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-install).
- Typescript as the IaC language of choice.
- A [monorepo](https://monorepo.tools/) managed with [pnpm](https://pnpm.io/).

Once you have the above-mentioned tools installed you can run `pnpm install` to install the npm/Typescript dependencies.

## About the challenge
The challenge is about showcasing your ability to implement and manage infrastructure using code. You'll need to use Hashicups.

[Hashicups](https://registry.terraform.io/providers/hashicorp/hashicups/latest/docs) is a fictional Terraform provider. It does not provision real infrastructure (like AWS or GCP), but instead resources are represented as coffee
orders in a coffee-shop. The idea is to mimic cloud-providers with a simple, fun API, without having to deal with cloud providers registrations, accounts or billing for our candidates.

The gist of the work is mostly translating the [CRUD operations](https://developer.hashicorp.com/terraform/tutorials/providers/provider-use) from plain Terraform to CDKTF.


## The deliverable
The final output should be this repository updated with your code, configs and setup. We should be able to:
- Have your repository in a zip format.
- Able to run `pnpm install` for all required/new dependencies.
- A way or a command to run Hashicups APIs locally (feel free to bundle it in a docker compose file).
- README.md updated, or a `help` file included on how to provision the infrastructure using Hashicups.
- Be able to provision the CRUD operation for the coffee-shop. The Infrastructure as Code should go under `packages/iac`.
- A way to destroy/cleanup the infrastructure.
- All using cdktf, not plain terraform.
- Bonus points for using [Constructs](https://developer.hashicorp.com/terraform/cdktf/concepts/constructs) and [CDKTF best practices](https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/best-practices).

### Having troubles?
If you're encountering any troubles, feel free to send an email to `platform@yassir.com`.
