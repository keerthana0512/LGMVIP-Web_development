const cardGrid = document.getElementById("cardGrid");
const loader = document.getElementById("loader");

function createCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const userImage = document.createElement("img");
  userImage.src = user.avatar;
  userImage.alt = `${user.first_name} ${user.last_name}`;

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = `${user.first_name} ${user.last_name}`;

  const cardEmail = document.createElement("p");
  cardEmail.textContent = user.email;

  card.appendChild(userImage);
  card.appendChild(cardTitle);
  card.appendChild(cardEmail);

  return card;
}
async function getUsers() {
    loader.style.display = "block";
    cardGrid.innerHTML = "";
    loader.innerHTML = '<div class="loader-spinner"></div><div class="loader-text">Loading...</div>'; 
  
    // Simulate a 10-second loading time
    await new Promise((resolve) => setTimeout(resolve, 5000));
  
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      const users = data.data;
  
      users.forEach((user) => {
        const card = createCard(user);
        cardGrid.appendChild(card);
      });
  
      loader.style.display = "none";
    } catch (error) {
      console.error("Error fetching users:", error);
      loader.style.display = "none";
    }
  }
  
