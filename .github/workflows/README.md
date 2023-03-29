## Automate Slack Notification With Github-Actions

#### Setting Up Slack Notification after All check are passed on Pull Request :


* **Step 1:** Create New App for our slack workspace
Click on Create New App.

Set an **App Name** for your app to which I’ve set **Github-Actions** and Select the **workspace (mine is integrations)** you need to integrate your app with.

Then click on **Create App**.

* **Step 2:** Assign Permissions to Slack Bot.
Navigate to **App Home** on the left sidebar. Click on **Review Scopes to Add** to set permissions for our bot.

Click on **Add an OAuth Scope** and select appropriate permissions.

Since our bot just needs to write on the slack channel, so I have provided only 2 permission **channels:join and chat:write**

* **Step 3** Install our Bot to the Workspace
Now, navigate to **OAuth & Permissions** and Click on **Install to Workspace**

Click on Allow when redirected to the authorization page.

Now, our slack bot is ready to operate on the workspace we have integrated it with.

You will be redirected to the OAuth & Permissions page again where you can see now a **Bot User OAuth Token.**

Copy this Token and Save this in your github repository secrets. Go to Settings -> Secrets & save the token under the name SLACK_BOT_TOKEN.

We will be using this in gihtub workflow file.

* **Step 4:** Invite Bot to Channel
We will now invite Slack Bot to the channel we need to get the notifications.

I have created a separate channel **“demo-project_pull-requests”** and send this message on channel **/invite @bot-name.**


With this, we have finished setting up a slack bot for getting the notifications.

