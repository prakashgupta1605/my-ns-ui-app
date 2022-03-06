# Installation

## Prerequisites

- You need Node.js installed in your machine
- You need to be connected to the Oracle network (VPN or office)

## Setting up Node.js

You need to setup npm to point to NetSuite Nexus repository.
Additionally, you have to authenticate in NetSuite Nexus repository.
Run the following commands using your confluence/jira user and password

```bash
# this will prompt for username and password and will prevent storing you credentials in bash history
read -p "username: " NPMUSR; read -sp "password: " NPMPASSWD; echo

# setting-up npm configuration
npm config set email your_netsuite_email@netsuite.com
npm config set @oracle:registry https://artifacthub-tip.oraclecorp.com/api/npm/jet-npm/
npm config set @ns-ui:registry https://repository-master.eng.netsuite.com/content/repositories/releases-ns-ui-npm/
npm config set registry https://artifacthub-tip.oraclecorp.com/api/npm/npmjs-remote/
# setting-up proxy settings. Use the closer to your location
npm config set proxy http://www-proxy-lon.uk.oracle.com:80/
npm config set http_proxy http://www-proxy-lon.uk.oracle.com:80/
npm config set https_proxy http://www-proxy-lon.uk.oracle.com:80/
npm config set noproxy localhost,127.0.0.1,.us.oracle.com,.oraclecorp.com,.eng.netsuite.com
npm config set always-auth true
# configure the access to NetSuite Nexus
npm config set //repository-master.eng.netsuite.com/content/repositories/releases-ns-ui-npm/:_authToken $(echo -n "${NPMUSR}:${NPMPASSWD}" | openssl base64)
```

Notice the configuration above uses the London Oracle VPN proxy. You may want to setup another proxy closer to your location.

If you did all the steps above correctly, now your `.npmrc` will now look like:

```
email=your_netsuite_email@netsuite.com
@oracle:registry=https://artifacthub-tip.oraclecorp.com/api/npm/jet-npm/
@ns-ui:registry=https://repository-master.eng.netsuite.com/content/repositories/releases-ns-ui-npm/
registry=https://artifacthub-tip.oraclecorp.com/api/npm/npmjs-remote/
proxy=http://www-proxy-lon.uk.oracle.com:80/
http_proxy=http://www-proxy-lon.uk.oracle.com:80/
https_proxy=http://www-proxy-lon.uk.oracle.com:80/
noproxy=localhost,127.0.0.1,.us.oracle.com,.oraclecorp.com,.eng.netsuite.com
always-auth=true
//repository-master.eng.netsuite.com/content/repositories/releases-ns-ui-npm/:_authToken="your_user:your_password base64encripted"
```

> **:warning: WARNING**: Access to .npmrc - Credentials entered in the above step are encoded in BASE64 and stored in your .npmrc file. BASE64 encoded values can easily be decoded, so it is user's responsibility to make sure the .npmrc file can't be accessed by another user.

## Installing OJET CLI

After npm configuration is done, you need to install OJET CLI globally by running:

```bash
npm i -g https://artifacthub-phx.oci.oraclecorp.com/ojet-dev-local/com/oracle/oraclejet/oracle-ojet-cli/11.0.0-2021-03-16_18-30-28/oracle-ojet-cli-11.0.0-2021-03-16_18-30-28.tgz
```

More information: [Jet CLI Setup](https://confluence.oraclecorp.com/confluence/display/JET/JET+CLI+Setup)

## Optional: Installing NS UI CLI

Optionally, you can install ns-ui cli globally by running:

```bash
npm i -g @ns-ui/cli
```

You can then using it with the command `ns-ui` in the console

## Run the app

After you've downloaded the source code, open a Node.js terminal, navigate to the root folder and run one of the following commands:

```bash
npm run restore
# or its ojet equivalent
ojet restore
```

This will install all project dependencies from npm and Oracle Component Exchange.

After the restore command was executed successfully, you can run the application. In the CLI, run:

```bash
npm run serve
```

Welcome to the future!
