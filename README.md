# Jira Linker
Turn Jira ticket numbers in a GitHub PR title into a link to this ticket using a GreaseMonkey script.
Once the script is installed and configured, links are generated automatically, like
in the PR below, which refers to the Jira ticket JILI-123.

![screenshot of script in action](./screenshot.png?raw=true "Linked ticket number")

## Setup Jira Linker

### Install GreaseMonkey/TamperMonkey

First, install a user script plugin. For Firefox, this is
[GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
, for Chrome [TamperMonkey](https://www.tampermonkey.net/).

### Add the user script

In your monkey-plugin, choose _"New user script..."_ (GreaseMonkey) or 
_"Create a new script..."_ (TamperMonkey) and replace the content with 
[the user script in this repo](user_script.js).

### Configure the parameters

Adjust the two constants to match your setup: the Jira base url and the 
Jira project code. Say your Jira links look like
_https://jira.example.org/browse/JILI-513_, then this would be the correct config:

```javascript
const urlPrefix = 'https://jira.example.org/browse/';

const projectCode = 'JILI';
```

If your git repos are not hosted under _https://github.com/_, adjust the
`@match`-line in the header accordingly. For example:

```
// @match       https://ghe.example.com/*
```

Save the user script, and you are good to go!
