```mermaid
sequenceDiagram
    participant Browser
    participant Server
    
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa

    activate Server
    Server-->>Browser: HTML Code
    deactivate Server

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: main.css
    deactivate Server

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: spa.js
    deactivate Server
    Note right of Browser: Browser executes spa.js, request a JSON file from the server

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: data.json { content: "Hi!", date: "2023-12-08T12:31:02.546Z" }
    deactivate Server
    Note right of Browser: Browser executes the event that display the JSON info

```