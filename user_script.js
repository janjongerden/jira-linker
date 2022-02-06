// ==UserScript==
// @name        GitHub Jira linking
// @description Turn a Jira ticket number in a GitHub PR into a link to that ticket.
// @author      Jan Jongerden
// @version     1
// @match       https://github.com/*
// ==/UserScript==

// base of your Jira ticket urls
const urlPrefix = 'https://jira.example.com/browse/';

// Jira project code, for example "ABC" if you tickets have numbers like "ABC-67"
const projectCode = 'ABC';

const addJiraLink = () => {

    const title = document.getElementsByClassName("js-issue-title")[0];

    if (title) {
        const titleText = title.innerHTML;

        if (!titleText.includes(urlPrefix)) {

            var regex = new RegExp(projectCode + '[- ]\\d+', 'i');

            const replaced = titleText.replace(regex, (match) => {
                const ticket = match.toUpperCase().replace(' ', '-');
                return '<a href="' + urlPrefix + ticket + '">' + match + '</a>';
            });

            title.innerHTML = replaced;
        }
    }
};

// check every second if the PR title needs to be updated due to asynchronous changes
var repeater = setInterval(addJiraLink, 1000);
