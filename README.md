# Maintenance Requ(u)est App

## Checklist Requirement Criterias

[x] Track the time taken to resolve a request and display: 


## Build

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
 -d '{"query": "mutation { addRequest(title: \"New Request\", date: \"2025-02-23\", status: \"Open\", urgentLevel: \"Urgent\", type: \"Urgent\") { id title date status urgentLevel type } }"}'


npx wscat -c ws://localhost:18080/ws

```

