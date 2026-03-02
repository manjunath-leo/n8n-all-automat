n8n Automation Collection
This repository contains a suite of n8n workflows designed to automate content creation, CRM management, and social media publishing. These tools leverage AI and various third-party APIs to streamline business operations and marketing efforts.

Table of Contents
Automated Faceless AI Videos

Brand Voice Blog Automation

Lead Qualification CRM Automation

News-to-Blog WordPress Automation

Automated News Video Production

YouTube Transcript & Highlights

1. Automated Faceless AI Videos
File: 2025_04_26_automated_faceless_ai_videos_n8n.json

This workflow automatically brainstorms viral video ideas, generates scripts and captions using AI, and creates faceless videos for social media platforms.

How to Use:

Configure AI Agent: Set your desired theme in the "AI Agent" node.

API Configuration: Provide your video generation service API key in the "Prepare Video" and "Prepare for Publish" nodes.

Social Connectivity: Input your account IDs for Instagram, Facebook, LinkedIn, and Threads in the publication nodes.

Trigger: The workflow is configured to run daily via a Schedule Trigger.

2. Brand Voice Blog Automation
File: Blog_automation_Oendies (2).json

A workflow that analyzes existing content to extract a unique "brand voice" and uses it to generate new articles that maintain a consistent style.

How to Use:

Data Source: Connect your spreadsheet containing existing article URLs to the "Get all content" node.

Style Extraction: The workflow crawls your URLs to identify language patterns, structure, and writing styles.

Article Generation: Send a new topic via Webhook to trigger the "Content Generation Agent".

SEO Automation: An AI agent uses sitemap tools to find and insert relevant internal links automatically.

3. Lead Qualification CRM Automation
File: CRM_AUTOMTION (1).json

Automates the process of identifying potential leads from incoming emails and adding them to a CRM.

How to Use:

Inbox Integration: Connect your business email to the "Gmail Trigger" node.

AI Validation: An LLM analyzes email snippets to distinguish genuine sales interest from general inquiries.

CRM Sync: Qualified leads are automatically synced to your CRM as new contacts and deals.

Inbox Organization: The workflow automatically applies a "leads" label to qualified emails in your inbox.

4. News-to-Blog WordPress Automation
File: Wordpress_blog.json

Automatically monitors technology news and transforms the latest updates into illustrated WordPress blog posts.

How to Use:

News Fetching: Configure the HTTP Request node with your news provider API key.

WordPress Connection: Link your site using the WordPress API credentials.

Content Creation: AI creates a unique title and a structured 5-paragraph HTML article.

Automated Imagery: The workflow generates a professional illustration based on the article content and sets it as the featured image.

5. Automated News Video Production
File: news_video_automation_workflow (2).json

Converts written publication posts into news-style video content featuring AI voiceovers and custom animations.

How to Use:

Source Connection: Fetches content from your digital publication API.

A/V Workflow: Uses AI to write a 90-second script, generate a voiceover, and create matching illustrations.

Animation & Assembly: Static images are animated and merged with the audio track automatically.

Direct Upload: The finished video is uploaded directly to your video hosting channel with optimized tags.

6. YouTube Transcript & Highlights
File: youtube_transcript_highlights_workflow.json

Extracts key highlights and timestamps from YouTube videos to assist with content repurposing.

How to Use:

Audio Processing: Provide a YouTube URL; the workflow downloads the audio for analysis.

Speech-to-Text: The audio is sent to a transcription service to generate a text record.

Highlight Extraction: AI identifies significant segments and provides their exact timestamps.

General Requirements
n8n Environment: A running n8n instance (self-hosted or cloud).

API Management: You must provide your own API keys for AI services, social platforms, and CRMs.

Credential Setup: Ensure all nodes requiring authentication are properly configured in your n8n credentials manager.

contact -manjunath21203@gmail.com if u have any queries 
