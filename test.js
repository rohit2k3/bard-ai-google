const google_bard_api = require('./index')

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
