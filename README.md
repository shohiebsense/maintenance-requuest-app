# Sample Usage

## Build

```
 npx expo start                   
```

```bash
curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{"query": "query getAllRequests { hello }"}'

curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
--data-binary '{"query":"{ getAllRequests }"}'

curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{"query":"{ getAllRequests }"}'

curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{"query":"{ getAllBooks }"}'

curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{ "query": "{ getAllBooks { id name author { firstName lastName } } }" }'


curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{"query": "query getAllRequests { hello }"}'

curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{ "query": "{ getAllRequests { id title date status info type } }" }'

curl -X POST 'http://localhost:18080/graphql' \
 -H 'content-type: application/json' \
 --data-binary '{"query":"{ bookById(id:\"book-1\") { name, pageCount, author { firstName, lastName} } }"}'



curl -X POST "http://localhost:18080/graphql" \
 -H "Content-Type: application/json" \
 -d '{"query": "query { hello }"}'


 curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{"query": "{ getAllRequests { id title date status info type } }"}'

curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{"query": "mutation { addRequest(title: \"New Request\", date: \"2025-02-23\", status: \"Open\", info: \"Request details here\", type: \"Urgent\") { id title date status info type } }"}'

curl -X POST http://localhost:18080/graphql \
 -H "Content-Type: application/json" \
 -d '{"query": "mutation { addRequest(title: \"New Request\", date: \"2025-02-23\", status: \"Urgent\", info: \"Request details here\", type: \"Urgent\") { id title date status info type } }"}'


npx wscat -c ws://localhost:18080/ws

```

