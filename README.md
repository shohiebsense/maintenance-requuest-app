# Maintenance Requ(u)est App

## Checklist Requirement Criterias

React Native

- ✅ Realtime updates using socket
`Any update should update in real time.`
- ✅ Typescript
- ✅ clean object-oriented code 
- ✅ using MobX
- ✅ Ensure that the metrics (e.g., average resolution time, number of urgent requests) update in real-time as changes occur.
- ⚠️ Include forms for adding and editing maintenance requests. 
`The forms are there, the plan is to store the added / updated item when is offline, checked using web socket, whenever online, upload it, alas I don't have much time`


Backend

- ❌ NodeJS -> ✅ Kotlin
- ✅ Micronaut including its serialization feature
- ✅ Using Jakarta Persistence
- ✅ websockets for real time updating
- ✅ GraphQL

## Overall Criteria

- ✅ Separation of concerns
```txt
I divided every page into 3, section, styles, view
HomePageSection.tsx
HomePageStyles.ts
HomePageView.tsx
```
- ✅ Maintainability
```txt
While in general React (to me) a bit hassle compared to Svelte, or other cross-platforms (Flutter, Multiplatform) when it comes to error tracing. I tried to make a util function to standardize on how to write the logge because how imporant that is. Quicker error tracing, quicker SLA or problem resolution.
```
- ✅ Extensibility
```txt
The point is we have to know the team member each other, it would be waste if we are implementing patterns that even we find it hard to understand, so adjust it with our behavior or culture.
The rest like product-related (like metrics, statuses, urgency-levels) make sure we add metadata, say formatted in json so that every change, we adapt it easier.
```
- ✅ Problem Solving
```txt
For offline first functionality, in client we can add the store / cache functionality, Say put it in an array, in the meantime as mentioned we can utilize the websockets to check availability of the network and server.
When it's online, push them.
```
- ❌ metrics

```txt
i don't have time to think through that one. my 
```

## Build

this uses ios simulator for development process.

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

