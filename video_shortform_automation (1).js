// n8n Workflow: Phase 1 - YouTube → AssemblyAI → Highlights
{
  "nodes": [
    {
      "parameters": {
        "url": "https://your-api.com/yt-download",
        "method": "POST",
        "responseFormat": "json",
        "jsonParameters": true,
        "options": {},
        "bodyParametersJson": "{ \"url\": \"{{Your_YouTube_Link}}\" }"
      },
      "name": "Download YouTube Audio",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 1,
      "position": [100, 300]
    },
    {
      "parameters": {
        "url": "https://api.assemblyai.com/v2/transcript",
        "method": "POST",
        "responseFormat": "json",
        "jsonParameters": true,
        "authentication": "headerAuth",
        "headerParametersJson": "{ \"authorization\": \"{{AssemblyAI_API_Key}}\" }",
        "bodyParametersJson": "{ \"audio_url\": \"={{$json[\"audio_url\"]}}\", \"iab_categories\": true, \"auto_highlights\": true }"
      },
      "name": "Send to AssemblyAI",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 1,
      "position": [300, 300]
    },
    {
      "parameters": {
        "functionCode": "return $json.auto_highlights.results.map(h => ({ json: { text: h.text, timestamps: h.timestamps } }));"
      },
      "name": "Extract Highlights",
      "type": "n8n-nodes-base.function",
      "typeVersion": 1,
      "position": [500, 300]
    }
  ]
}
