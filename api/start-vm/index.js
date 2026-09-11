const fetch = require("node-fetch"); // Oder nativer fetch in neueren Node-Versionen

module.exports = async function (context, req) {
    const webhookUrl = "https://5c61ad9e-11cb-4404-92e8-a908ef2ff902.webhook.dewc.azure-automation.net/webhooks?token=YMpmHF5FI6GSwacv%2bTJ1LYX7rIzae2oC9StxDBh8jkg%3d";

    try {
        const webhookResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Action: "Start" })
        });

        if (webhookResponse.ok) {
            context.res = { status: 200, body: "VM Start triggered" };
        } else {
            context.res = { status: 500, body: "Webhook error" };
        }
    } catch (error) {
        context.res = { status: 500, body: error.message };
    }
};