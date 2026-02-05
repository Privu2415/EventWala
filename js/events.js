function displayAllEvents(eventsToShow = events) {
  const container = document.getElementById("eventsContainer");
  if (!container) return;

  if (eventsToShow.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No events found.</p>';
    return;
  }

  container.innerHTML = eventsToShow.map(event => `
    <div class="event-card" onclick="goToEventDetail(${event.id})">
        <img src="${event.image}" alt="${event.title}" class="event-image">
        <div class="event-info">
            <span class="event-genre">${event.genre}</span>
            <h3>${event.title}</h3>
            <div class="event-artist">🎤 ${event.artist}</div>
            <div class="event-details">
                📅 ${formatDate(event.date)}<br>
                📍 ${event.venue}, ${event.city}
            </div>
            <div class="event-price">From ₹${event.price}</div>
            <button class="btn btn-primary">View Details</button>
        </div>
    </div>
  `).join("");
}

function searchEvents() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filtered = events.filter(e => 
    e.title.toLowerCase().includes(searchTerm) || 
    e.artist.toLowerCase().includes(searchTerm) || 
    e.city.toLowerCase().includes(searchTerm)
  );
  displayAllEvents(filtered);
}

function filterEvents() {
  const genreFilter = document.getElementById("genreFilter").value;
  const filtered = genreFilter === "" ? events : events.filter(e => e.genre === genreFilter);
  displayAllEvents(filtered);
}

function displayEventDetail() {
  const container = document.getElementById("eventDetailContainer");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const eventId = parseInt(urlParams.get("id"));
  const event = events.find(e => e.id === eventId);

  if (!event) {
    container.innerHTML = "<p>Event not found</p>";
    return;
  }

container.innerHTML = `
<div class="event-layout">

  <!-- LEFT: POSTER ONLY -->
  <div class="event-left">
    <img src="${event.image}" class="event-poster">
  </div>

  <!-- RIGHT: INFO + ABOUT -->
  <div class="event-right">

    <!-- INFO CARD -->
    <div class="event-info-card">
      <h1 class="event-title">${event.title}</h1>

      <div class="event-meta">🎤 ${event.artist}</div>

      <div class="event-tags">
        <span class="event-tag">${event.genre}</span>
        <span class="event-tag warning" id="countdownBadge">Loading...</span>
      </div>

      <div class="event-info-row">📅 ${formatDate(event.date)}</div>
      <div class="event-info-row">🕐 ${event.time}</div>
      <div class="event-info-row">📍 ${event.venue}, ${event.city}</div>
      <div class="event-info-row">👥 ${event.capacity.toLocaleString()} seats</div>

      <div class="event-price-row">
        <div>
          <div class="event-starts">Starts from</div>
          <div class="event-price">₹${event.price}</div>
        </div>

        <button class="event-book-btn" onclick="bookEvent(${event.id})">
          Book Tickets
        </button>
      </div>
    </div>

    <!-- ABOUT CARD (NOW UNDER RIGHT SIDE) -->
    <div class="event-about event-about-right">
      <h2>About the Event</h2>
      <p>${event.description}</p>
    </div>


  </div>
</div>
`;

updateCountdown(event.date);


  updateCountdown(event.date);
}


function bookEvent(eventId) {
  const event = events.find(e => e.id === eventId);
  alert(`Booking confirmed for ${event.title}!\nConfirmation sent to ${currentUser.email}`);
}

document.addEventListener("DOMContentLoaded", () => {
  displayAllEvents();
  displayEventDetail();
});