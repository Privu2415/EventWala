// Shared Event Data
const events = [
  { id: 2, title: "DIVINE Mumbai Rap Night", artist: "DIVINE", genre: "Desi Hip Hop", date: "2026-03-10", time: "8:00 PM", venue: "NSCI Dome", city: "Mumbai", state: "Maharashtra", price: 2000, image: "https://m.media-amazon.com/images/I/510wdRw3OCL._AC_UF894,1000_QL80_.jpg", description: "Mumbai’s own DIVINE brings hardcore street rap and chartbusters live on stage.", capacity: 8000, duration: "2.5 hours" },
  { id: 3, title: "Raftaar Live – Hardcore India Tour", artist: "Raftaar", genre: "Desi Hip Hop", date: "2026-03-18", time: "7:30 PM", venue: "Talkatora Stadium", city: "Delhi", state: "Delhi", price: 1800, image: "https://m.media-amazon.com/images/I/81gkwHMf6uL._AC_UF894,1000_QL80_.jpg", description: "Witness Raftaar’s explosive performance with power-packed rap and dance anthems.", capacity: 7000, duration: "2 hours" },
  { id: 4, title: "KR$NA – Still Here Concert", artist: "KR$NA", genre: "Desi Hip Hop", date: "2026-04-05", time: "8:00 PM", venue: "Phoenix Arena", city: "Bengaluru", state: "Karnataka", price: 2200, image: "https://m.media-amazon.com/images/I/51naKRHaygL.jpg", description: "Lyrical mastery meets raw energy as KR$NA performs his most iconic tracks.", capacity: 6000, duration: "2 hours" },
  { id: 5, title: "Seedhe Maut Live – Delhi Cypher", artist: "Seedhe Maut", genre: "Desi Hip Hop", date: "2026-04-12", time: "7:00 PM", venue: "Jawaharlal Nehru Stadium", city: "Delhi", state: "Delhi", price: 1600, image: "https://i.pinimg.com/236x/f1/07/cd/f107cd0c140f90651d69f693f058f20f.jpg", description: "Seedhe Maut brings Delhi’s underground hip-hop vibe with raw bars and mosh pits.", capacity: 6500, duration: "2 hours" },
  { id: 6, title: "MC Stan – Tadipaar Tour", artist: "MC Stan", genre: "Desi Hip Hop", date: "2026-04-20", time: "8:30 PM", venue: "Shanmukhananda Hall", city: "Pune", state: "Maharashtra", price: 1700, image: "https://rukminim2.flixcart.com/image/480/640/xif0q/poster/c/1/a/medium-mc-stan-poster-mc-stan-rapper-poster-digital-art-painting-original-imah8ax5yctddah3.jpeg?q=90", description: "Experience MC Stan’s unique trap sound and viral hits in a high-voltage live performance.", capacity: 5000, duration: "1.5 hours" },
  { id: 7, title: "Emiway Bantai – Independent Tour", artist: "Emiway Bantai", genre: "Desi Hip Hop", date: "2026-05-02", time: "7:30 PM", venue: "Gachibowli Indoor Stadium", city: "Hyderabad", state: "Telangana", price: 1500, image: "https://m.media-amazon.com/images/I/513y2sUNWGL._AC_UF894,1000_QL80_.jpg", description: "India’s biggest independent rapper Emiway Bantai performs his biggest hits.", capacity: 7000, duration: "2 hours" }
];

const users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
const isAuthenticated = () => !!localStorage.getItem('jwtToken');

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-IN", options);
}


function goToEventDetail(eventId) {
  if (!isAuthenticated()) {
    alert('Please login to view event details');
    window.location.href = 'login.html';
    return;
  }
  window.location.href = `event-detail.html?id=${eventId}`;
}