# JSON Child Finder API

A simple Node.js API to find and return a child value from a specified parent key in a JSON string.

## Features

- Accepts a JSON string and a parent key via a POST request.
- Returns the value of the specified child key from the JSON string.
- Simple and lightweight implementation using Express.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/json-child-extractor-api.git
    cd json-child-extractor-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Usage

1. Start the server:
    ```sh
    node server.js
    ```

2. Send a POST request to http://localhost:3000/json-finder with the following JSON body:
    ```json
    {
        "jsonString": "{\"Parent\":\"Child\"}",
        "parentKey": "Parent"
    }
    ```

3. The server will respond with the value of the specified parent key:
    ```sh
    Child
    ```

### Example cURL Command
```sh
curl -X POST http://localhost:3000/get-child \
-H "Content-Type: application/json" \
-d '{
    "jsonString": "{\"Parent\":\"Child\"}",
    "parentKey": "Parent"
}'
```