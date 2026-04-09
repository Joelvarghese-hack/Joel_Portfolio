import 'dotenv/config';
import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with API token from environment variable
const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
});

// LinkedIn profile URLs to scrape
const input = {
    profileUrls: [
        "https://www.linkedin.com/in/williamhgates",
        "http://www.linkedin.com/in/jeannie-wyrick-b4760710a"
    ]
};

(async () => {
    if (!process.env.APIFY_API_TOKEN) {
        console.error('Error: APIFY_API_TOKEN is not set. Copy .env.example to .env and add your token.');
        process.exit(1);
    }

    console.log('Starting LinkedIn profile scraper...');
    console.log(`Scraping ${input.profileUrls.length} profile(s)...\n`);

    // Run the Actor and wait for it to finish
    const run = await client.actor("2SyF0bVxmgGr8IVCZ").call(input);

    console.log(`Run finished. Dataset ID: ${run.defaultDatasetId}\n`);

    // Fetch and print Actor results from the run's dataset
    console.log('Results from dataset:');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item, { depth: null });
    });
})();
