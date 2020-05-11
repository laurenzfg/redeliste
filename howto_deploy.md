# How to deploy

## Client
The client is written as a static react app.
Currently, there is no connection to the DB.
So no configuration is neccessary.
The repository contains all files for a deployment on Firebase Hosting
(see deploy_client.sh).
You only have to put a Firebase handle in a .firebaserc file.
This file my look like this:

    {
      "projects": {
        "default": "redeliste-a00b5"
      }
    }

