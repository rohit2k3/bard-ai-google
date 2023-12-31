# Bard-API-Node

## Description
**bard-api-node** is a Node.js library for interacting with Bard, an AI Chatbot developed by Google. Bard is based on Google's Large language model (LLM), LaMDA, which is designed to generate human-like text and images in response to prompts.

## What is Bard?
Bard is basically an AI Chatbot developed by Google. It is based on Google’s Large language model (LLM), LaMDA, similar to how ChatGPT is based on GPT. These are types of neural networks that mimic the underlying architecture of the brain in the form of a computer. Bard is separate from Google Search, which is the default way how billions of people look for information on the web. Unlike how a traditional search works, Bard is conversational and allows users to write a prompt and receive human-like text and images generated by artificial intelligence.

In its own description, Bard is a “large language model, also known as a conversational AI or chatbot trained to be informative and comprehensive”. “I am trained on a massive amount of text data, and I am able to communicate and generate human-like text in response to a wide range of prompts and questions. For example, I can provide summaries of factual topics or create stories.”

## Installation

To use the Bard-API-Node library in your project, you can install it via npm directly:
```
npm i bard-ai-google
```
or can install it via npm from Github:
```
npm install git+https://github.com/rohit2k3/bard-ai-google.git
```


## Authentication
To authenticate with the Bard API, you need to obtain the session value. Here's how you can get it:

1. Visit https://bard.google.com/.
2. Open the browser console by pressing F12.
3. Go to the "Application" tab.
4. Under "Cookies", find the cookie named `__Secure-1PSID`.
5. Copy the value of the cookie, which will be your session value.

## Usage

```javascript
const google_bard_api = require('bard-ai-google')

const cookie = "jdfvkdfvkdjfvkldfvdfv/dfvdfnvjvdfv."

async function fetchData(query) {
    try {
      const data = await google_bard_api(query, cookie);
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  fetchData("what is google");

```
Make sure to replace `cookie` with the actual value of your cookie obtained from the Bard website.

## Feedback

I welcome any feedback, bug reports, or problems you may encounter while using this library. If you have any issues or suggestions, please don't hesitate to reach out. You can send your reports to [rohitsharma2k3@gmail.com](mailto:rohitsharma2k3@gmail.com).

Thank you for your support and feedback!

## License
This project is licensed under the [MIT License](LICENSE).
If you find this project helpful in your own work, I would appreciate a star or acknowledgment in your projects.
