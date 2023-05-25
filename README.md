# Learn-KAFKA-with-upstash-JS

My first project to learn kafka.

# Project Title

## Description

This project is a demonstration of Kafka message streaming using Vanilla JavaScript bundled with Vite. It leverages Upstash to create a cluster for Kafka, enabling efficient and reliable message streaming.

The application showcases the following features:

- Kafka message streaming with a cluster created on Upstash.
- Vanilla JavaScript implementation for simplicity and flexibility.
- Vite as the bundler for fast development and building.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`.
2. Navigate to the project directory: `cd your-project`.
3. Install dependencies: `npm install`.

## Usage

To use the project:

1. Configure your Upstash cluster credentials in the project.
2. Implement your Kafka message streaming logic in `index.js`.
3. Build the project using Vite: `npm run build`.
4. Open the generated `index.html` file in a web browser.
5. Interact with the application to observe Kafka message streaming in action.

## Configuration

Before running the project, make sure to configure the necessary credentials. Follow these steps:

1. Open `index.js` in your preferred code editor.
2. Locate the configuration section.
3. Replace the placeholder values with your actual Upstash cluster credentials.

```javascript
// Configure Upstash Kafka cluster credentials
const kafkaConfig = {
  clusterId: "your-cluster-id",
  clientId: "your-client-id",
  username: "your-username",
  password: "your-password",
};
```
