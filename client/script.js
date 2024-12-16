async function getData() {
    const url = "http://localhost:3000/users";
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const users = await response.json();
      printUsers(users);
      console.log(users);
    } catch (error) {
      console.error(error.message);
    }
  }