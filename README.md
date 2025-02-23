

## Build

this uses ios simulator for development process.

```
 npx expo start                   
```

```bash

curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
--data-binary '{"query":"{ getAllRequests }"}'

curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{ "query": "{ getAllRequests { id title date status urgentLevel type } }" }'


curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{"query": "query { hello }"}'


 curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{"query": "{ getAllRequests { id title date status urgentLevel type } }"}'


curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{"query": "mutation { addRequest(title: \"Flood\", date: \"2025-02-23\", status: \"Open\", urgent_level: \"Urgent\", type: \"Urgent\") { id title date status urgent_level type } }"}'


npx wscat -c ws://localhost:18080/ws

```

