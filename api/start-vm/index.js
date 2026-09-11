module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const webhookUrl = "https://5c61ad9e-11cb-4404-92e8-a908ef2ff902.webhook.dewc.azure-automation.net/webhooks?token=YMpmHF5FI6GSwacv%2bTJ1LYX7rIzae2oC9StxDBh8jkg%3d";

    try {
        // Verwende den globalen fetch (in aktuellen Node-Versionen direkt verfügbar)
        const webhookResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Action: "Start" })
        });

        if (webhookResponse.ok || webhookResponse.status === 202) {
            context.res = {
                status: 200,
                body: "VM Start triggered successfully"
            };
        } else {
            const errorText = await webhookResponse.text();
            context.res = {
                status: 500,
                body: `Webhook failed: ${errorText}`
            };
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: `Error: ${error.message}`
        };
    }
};