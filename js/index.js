function displayFeaturedEvents(){
    const container = document.getElementById("featuredEvents");

    if(!container) return;

    const FeaturedEvents = events.slice(0,3);
    container.innerHTML = FeaturedEvents.map(event=>`
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

document.addEventListener("DOMContentLoaded",displayFeaturedEvents);