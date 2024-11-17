/** 1. Fetch data from an API.
2. Filter the results based on a criterion (e.g., age > 20).
3. Display the filtered data.*/
// Step 1: Fetch data from the API
fetch("https://api.example.com/people") // Replace with the actual API URL
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json(); // Parse JSON data from the response
  })
  .then((data) => {
    // Step 2: Filter the data based on the criterion (age > 20)
    const filteredData = data.filter((person) => person.age > 20);

    // Step 3: Display the filtered data
    filteredData.forEach((person) => {
      console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**1. Create an HTML file with a button and an empty ul element for displaying names.
2. In JavaScript, define a function to handle the button's click event.
3. Use fetch) to get data from the API, then parse it with -json() .
4. Loop through the data to create li elements, adding each name to the ul */
document.getElementById("loadDataBtn").addEventListener("click", function () {
  fetchDataAndDisplay();
});

// Step 3: Function to fetch data from API and parse it
function fetchDataAndDisplay() {
  fetch("https://api.example.com/people") // Replace with the actual API URL
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json(); // Parse the JSON data from the response
    })
    .then((data) => {
      // Step 4: Loop through the data and create <li> elements for each name
      const nameList = document.getElementById("nameList");
      nameList.innerHTML = ""; // Clear the previous list, if any

      data.forEach((person) => {
        const li = document.createElement("li");
        li.textContent = person.name; // Assuming each person object has a 'name' property
        nameList.appendChild(li); // Append the li to the ul element
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

/**1. Use Promise.all to handle multiple fetch) requests.
2. Combine the results and display them together. */
document.getElementById("loadDataBtn").addEventListener("click", function () {
  fetchDataAndDisplay();
});

// Step 3: Function to fetch data from multiple APIs and combine the results
function fetchDataAndDisplay() {
  // Define the API endpoints you want to fetch data from
  const apiUrls = [
    "https://api.example.com/people1", // Replace with actual API URL 1
    "https://api.example.com/people2", // Replace with actual API URL 2
    "https://api.example.com/people3", // Replace with actual API URL 3
  ];

  // Step 3.1: Use Promise.all to fetch data from all APIs
  Promise.all(
    apiUrls.map((url) => fetch(url).then((response) => response.json()))
  )
    .then((results) => {
      // Combine the results from all API responses
      const allPeople = results.flat(); // Flatten the array of arrays

      // Step 4: Loop through the combined data and create <li> elements
      const nameList = document.getElementById("nameList");
      nameList.innerHTML = ""; // Clear the previous list, if any

      allPeople.forEach((person) => {
        const li = document.createElement("li");
        li.textContent = person.name; // Assuming each person object has a 'name' property
        nameList.appendChild(li); // Append the li to the ul element
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

/**1. Define an async function to handle the fetch request.
2. Use fetch() with the specified URL (API endpoint).
3. Call -then() on the promise returned by fetch() to extract the JSON data.
4. Log the data to the console. */
// Step 1: Define the async function to handle the fetch request
async function fetchData() {
  const url = "https://api.example.com/data"; // Replace with the actual API endpoint

  // Step 2: Use fetch() with the specified URL
  fetch(url)
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Step 3: Extract JSON data from the response
    })
    .then((data) => {
      // Step 4: Log the data to the console
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch operation
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Event listener for the button click
document.getElementById("fetchDataBtn").addEventListener("click", fetchData);

/**1. Define the function with user data as a parameter.
2. Use fetch() with PUT and include updated data in the body.
3. Parse and log the response */

// Step 1: Define the function with user data as a parameter
async function updateUserData(userData) {
  const url = "https://api.example.com/users/1"; // Replace with your API endpoint and user ID

  try {
    // Step 2: Use fetch() with PUT and include updated data in the body
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Ensure the server knows we're sending JSON
      },
      body: JSON.stringify(userData), // Convert the user data to a JSON string
    });

    // Check if the response was successful (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Step 3: Parse and log the response
    const data = await response.json(); // Parse the JSON response
    console.log("Updated User Data:", data);
  } catch (error) {
    console.error("Error updating user data:", error);
  }
}

// Event listener for the button click
document.getElementById("updateUserBtn").addEventListener("click", function () {
  // Example user data to update
  const updatedUserData = {
    name: "Alice Updated",
    email: "alice.updated@example.com",
  };

  // Call the update function with the user data
  updateUserData(updatedUserData);
});

/**1. Define an async function for the request.
2. Use fetch) with the endpoint, setting the method to POST .
3. Include headers to specify Content-Type: application/json.
4. Convert your data to JSON format with JSON. stringify() and pass it in the body option.
5. Log the response */

// Step 1: Define an async function for the POST request
async function createUser(userData) {
  const url = "https://api.example.com/users"; // Replace with your API endpoint

  try {
    // Step 2: Use fetch() with the endpoint, setting method to POST
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      // Step 4: Convert data to JSON format and pass it in the body option
      body: JSON.stringify(userData), // Send the userData as JSON
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    // Step 5: Log the response
    const data = await response.json(); // Parse the response body as JSON
    console.log("Created User:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Event listener for the button click
document.getElementById("createUserBtn").addEventListener("click", function () {
  // Example user data to send in the POST request
  const newUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  };

  // Call the function to create the user
  createUser(newUser);
});
/**1. Create a table structure in HTML.
2. Fetch data using fetch) -
3. Loop through the data, creating rows (tr ) and cells ( td) dynamically, then insert into the table. */

// Step 2: Fetch data from the API
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/users"; // Example API endpoint

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Step 3: Loop through the data and create table rows dynamically
    const tableBody = document.querySelector("#dataTable tbody");
    data.forEach((user) => {
      // Create a new row
      const row = document.createElement("tr");

      // Create cells for each piece of data and append them to the row
      const idCell = document.createElement("td");
      idCell.textContent = user.id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("There was an error fetching data:", error);
  }
}

// Fetch data when the page loads
window.onload = fetchData;
/**1. Wrap your fetch code in a try...catch block.
2. In the try block, await the fetch call and parse the JSON.
3. In the catch block, log any errors that occur during the request. */
// Step 2: Wrap the fetch code in a try...catch block
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/users"; // Example API endpoint

  try {
    // Step 3: Await the fetch call and parse the JSON in the try block
    const response = await fetch(url);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Step 4: Loop through the data and dynamically populate the table
    const tableBody = document.querySelector("#dataTable tbody");
    data.forEach((user) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = user.id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    // Step 5: In the catch block, log any errors that occur during the request
    console.error("There was an error fetching the data:", error);
  }
}

// Fetch data when the page loads
window.onload = fetchData;
/**1. Define the function with a user ID parameter.
2. Use fetch with method DELETE and the user's ID in the URL.
3. Log the response status. */
// Define the function with a user ID parameter
function deleteUser(userId) {
  // Send a DELETE request using the fetch API
  fetch(`https://example.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      // Log the response status
      console.log("Response Status:", response.status);
    })
    .catch((error) => {
      // Handle any errors that may occur during the fetch request
      console.error("Error:", error);
    });
}

// Example usage: delete user with ID 123
deleteUser(123);
/**1. Create an input and a button in HTML.
2. Capture the input value in a function triggered on button click.
3. Make an API request using the input value, then display the result. */
// Function to handle button click and make the API request
function makeApiRequest() {
  // Get the value from the input field
  const inputValue = document.getElementById("userInput").value;

  // Display a loading message while waiting for the API response
  document.getElementById("result").innerText = "Loading...";

  // Example API: We'll use a public JSON placeholder API as a sample.
  // Replace with your own API or endpoint.
  const apiUrl = `https://jsonplaceholder.typicode.com/posts?title=${inputValue}`;

  // Making the API request using fetch
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Check if we got results
      if (data.length > 0) {
        // Display the first result (for simplicity)
        document.getElementById(
          "result"
        ).innerText = `Title: ${data[0].title}\nBody: ${data[0].body}`;
      } else {
        document.getElementById("result").innerText = "No results found.";
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the API request
      document.getElementById("result").innerText = `Error: ${error.message}`;
    });
}
