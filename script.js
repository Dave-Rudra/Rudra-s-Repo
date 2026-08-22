const PRESET_CITIES = [
  {
    name: 'Paris', country: 'France', cost: 'Luxury',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    info: 'Paris, the capital of France, is famous for the Eiffel Tower, world-class museums like the Louvre, charming cafes and romantic riverside walks along the Seine.',
    history: 'Paris began as a small settlement of the Parisii tribe on the Île de la Cité over 2,000 years ago. It grew into the political and cultural capital of France, shaping art, fashion and revolution through the centuries, including the French Revolution of 1789.',
    bestTime: 'April - June, Sept - Oct'
  },
  {
    name: 'Tokyo', country: 'Japan', cost: 'Moderate',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800',
    info: 'Tokyo blends ultra-modern skyscrapers with historic temples. Expect neon-lit streets, incredible food, efficient trains and a unique mix of tradition and technology.',
    history: 'Originally a small fishing village called Edo, Tokyo became the seat of power in 1603 when the Tokugawa shogunate made it their base. It was renamed Tokyo ("Eastern Capital") in 1868 and rebuilt into the global megacity it is today after WWII.',
    bestTime: 'Mar - May, Oct - Nov'
  },
  {
    name: 'Rome', country: 'Italy', cost: 'Moderate',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    info: 'Rome, Italy\'s capital, is a living museum with the Colosseum, Roman Forum, Vatican City and centuries of history around every corner — plus unbeatable pasta and gelato.',
    history: 'Founded, according to legend, in 753 BC, Rome became the heart of one of the largest empires in history. It later became the center of the Roman Catholic Church, and its ancient ruins still stand alongside Renaissance and modern architecture.',
    bestTime: 'Apr - May, Sept - Oct'
  },
  {
    name: 'Bangkok', country: 'Thailand', cost: 'Budget',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
    info: 'Bangkok is known for ornate shrines, vibrant street life, bustling markets and some of the best street food in the world, all at very budget-friendly prices.',
    history: 'Bangkok became the capital of Siam (now Thailand) in 1782 under King Rama I, who built the Grand Palace and Wat Phra Kaew. It grew from a trading post on the Chao Phraya River into one of Southeast Asia\'s largest cities.',
    bestTime: 'Nov - Feb'
  },
  {
    name: 'Goa', country: 'India', cost: 'Moderate',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    info: 'Goa, on India\'s west coast, is famous for its palm-lined beaches, laid-back beach shacks, Portuguese-era churches and lively nightlife.',
    history: 'Goa was a Portuguese colony for over 450 years, from 1510 until it was annexed by India in 1961. That long colonial history left behind striking churches, forts and a distinct Indo-Portuguese culture still visible today.',
    bestTime: 'Nov - Feb'
  }
];

const PRESET_ACTIVITIES = [
  {
    name: 'Eiffel Tower Summit', city: 'Paris', category: 'Sightseeing', cost: 3000,
    image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
    info: 'Ride to the very top of the Eiffel Tower for panoramic views across Paris. An iconic must-do experience with lifts and viewing decks at multiple levels.',
    history: 'Built by engineer Gustave Eiffel for the 1889 World\'s Fair, the tower was originally meant to be temporary and faced criticism from Parisians. It has since become the most recognizable symbol of France.'
  },
  {
    name: 'Louvre Museum Tour', city: 'Paris', category: 'Sightseeing', cost: 1800,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
    info: 'Explore the world\'s largest art museum, home to the Mona Lisa, Venus de Milo, and thousands of other masterpieces spanning centuries.',
    history: 'The Louvre began as a fortress in the late 12th century before becoming a royal palace. It opened as a public museum in 1793 during the French Revolution and now houses over 380,000 objects.'
  },
  {
    name: 'Shibuya Crossing', city: 'Tokyo', category: 'Food', cost: 3500,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
    info: 'Experience the world\'s busiest pedestrian crossing, surrounded by neon signs, shopping and some of Tokyo\'s best street food and izakayas.',
    history: 'Shibuya Crossing grew alongside Shibuya Station, one of Tokyo\'s busiest rail hubs, becoming a symbol of modern Tokyo\'s scale and energy, with up to 3,000 people crossing at once during peak times.'
  },
  {
    name: 'Colosseum Guided Tour', city: 'Rome', category: 'Sightseeing', cost: 2500,
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=800',
    info: 'Walk through the ancient Colosseum with a guide explaining gladiator battles, engineering feats, and the daily life of ancient Rome.',
    history: 'Completed in 80 AD under Emperor Titus, the Colosseum could hold up to 80,000 spectators for gladiator contests and public spectacles. It remains the largest amphitheater ever built.'
  },
  {
    name: 'Grand Palace', city: 'Bangkok', category: 'Sightseeing', cost: 1200,
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800',
    info: 'Visit the dazzling Grand Palace complex, including the Temple of the Emerald Buddha, ornate spires and traditional Thai architecture.',
    history: 'Built in 1782 as the official residence of the Kings of Siam, the Grand Palace was the heart of the Thai government for 150 years and remains one of the most sacred sites in the country.'
  },
  {
    name: 'Baga Beach Watersports', city: 'Goa', category: 'Adventure', cost: 1500,
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800',
    info: 'Try parasailing, jet-skiing and banana boat rides on Goa\'s lively Baga Beach, one of the most popular stretches of sand in North Goa.',
    history: 'Once a quiet fishing village, Baga transformed through the 1960s-70s hippie era and later tourism boom into one of Goa\'s most popular beaches for nightlife and watersports.'
  }
];

// ----- DATABASE SIMULATION (LocalStorage) -----
let usersDB = JSON.parse(localStorage.getItem('gt_users_db')) || [];
let tripsDB = JSON.parse(localStorage.getItem('gt_trips_db')) || [];
let currentUser = JSON.parse(localStorage.getItem('gt_current_user')) || null;
let myTrips = []; 
let activeTripIndex = 0;
let infoSelected = null;

// ==========================================
// AUTHENTICATION LOGIC
// ==========================================
function handleSignup(e) {
  e.preventDefault();
  const email = document.getElementById('regEmail').value.trim();
  const password = prompt("Create a password for your account:"); 
  
  if(!password) return alert("Password is required to sign up!");

  const existingUser = usersDB.find(u => u.email === email);
  if (existingUser) return alert("An account with this email already exists! Please log in.");

  const newUser = {
    firstName: document.getElementById('regFirstName').value,
    lastName: document.getElementById('regLastName').value,
    email: email,
    password: password 
  };
  
  usersDB.push(newUser);
  localStorage.setItem('gt_users_db', JSON.stringify(usersDB));
  loginUser(newUser);
  e.target.reset();
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = usersDB.find(u => u.email === email && u.password === password);
  
  if (user) {
    loginUser(user);
    e.target.reset();
  } else {
    alert("Invalid email or password. Please try again or sign up.");
  }
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem('gt_current_user', JSON.stringify(currentUser));
  updateAuthState();
  loadMyTrips();
  switchTab('dashboard');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('gt_current_user');
  myTrips = [];
  updateAuthState();
  loadMyTrips();
  switchTab('dashboard');
}

function updateAuthState() {
  const loggedOutNav = document.getElementById('nav-logged-out');
  const loggedInNav = document.getElementById('nav-logged-in');
  const welcomeText = document.getElementById('nav-welcome-text');
  const profileMsg = document.getElementById('profileLoggedOutMsg');

  const fNameInput = document.getElementById('profileFirstName');
  const lNameInput = document.getElementById('profileLastName');
  const emailInput = document.getElementById('profileEmail');

  if (currentUser) {
    loggedOutNav.classList.add('hidden');
    loggedInNav.classList.remove('hidden');
    loggedInNav.classList.add('flex');
    welcomeText.innerText = `Hi, ${currentUser.firstName}!`;
    
    profileMsg.classList.add('hidden');
    fNameInput.value = currentUser.firstName;
    lNameInput.value = currentUser.lastName;
    emailInput.value = currentUser.email;
  } else {
    loggedInNav.classList.add('hidden');
    loggedInNav.classList.remove('flex');
    loggedOutNav.classList.remove('hidden');
    
    profileMsg.classList.remove('hidden');
    fNameInput.value = 'Guest';
    lNameInput.value = 'User';
    emailInput.value = 'guest@example.com';
  }
}

function requireAuth(modalId) {
  if (!currentUser) {
    alert("You must be logged in to plan a trip.");
    switchTab('login');
  } else {
    openModal(modalId);
  }
}

// ==========================================
// APP STATE & ROUTING
// ==========================================
function loadMyTrips() {
  if (currentUser) {
    myTrips = tripsDB.filter(t => t.ownerEmail === currentUser.email);
  } else {
    myTrips = [];
  }
  renderDashboard();
  renderMyTripsView();
}

function saveState() {
  localStorage.setItem('gt_trips_db', JSON.stringify(tripsDB));
  loadMyTrips(); 
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('text-slate-900', 'border-b-2', 'border-slate-800'));

  const target = document.getElementById(`view-${tabId}`);
  if (target) target.classList.remove('hidden');

  const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (activeBtn) activeBtn.classList.add('text-slate-900', 'border-b-2', 'border-slate-800');

  if (tabId === 'dashboard') renderDashboard();
  if (tabId === 'my-trips') renderMyTripsView();
  if (tabId === 'explore') renderCatalog();
  if (tabId === 'profile') renderProfileGrid();
}

// ==========================================
// MODAL LOGIC
// ==========================================
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (id === 'createTripModal') renderModalSuggestions();
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.getElementById(id).classList.remove('flex');
  if (id === 'infoModal') infoSelected = null;
}

function openCityInfo(cityName) {
  const city = PRESET_CITIES.find(c => c.name === cityName);
  if (!city) return;

  infoSelected = { type: 'city', name: city.name, city: city.name };

  document.getElementById('infoName').innerText = city.name;
  document.getElementById('infoSubtitle').innerText = city.country;
  document.getElementById('infoImage').src = city.image;
  document.getElementById('infoDesc').innerText = city.info;
  document.getElementById('infoHistory').innerText = city.history;
  document.getElementById('infoFact1Label').innerText = 'Best time to visit';
  document.getElementById('infoFact1Value').innerText = city.bestTime;
  document.getElementById('infoFact2Label').innerText = 'Cost Tier';
  document.getElementById('infoFact2Value').innerText = city.cost;
  document.getElementById('infoPlanBtn').classList.remove('hidden');

  openModal('infoModal');
}

function openActivityInfo(activityName) {
  const act = PRESET_ACTIVITIES.find(a => a.name === activityName);
  if (!act) return;

  infoSelected = { type: 'activity', name: act.name, city: act.city };

  document.getElementById('infoName').innerText = act.name;
  document.getElementById('infoSubtitle').innerText = `${act.city} · ${act.category}`;
  document.getElementById('infoImage').src = act.image;
  document.getElementById('infoDesc').innerText = act.info;
  document.getElementById('infoHistory').innerText = act.history;
  document.getElementById('infoFact1Label').innerText = 'Category';
  document.getElementById('infoFact1Value').innerText = act.category;
  document.getElementById('infoFact2Label').innerText = 'Cost';
  document.getElementById('infoFact2Value').innerText = `₹${act.cost}`;
  document.getElementById('infoPlanBtn').classList.remove('hidden');

  openModal('infoModal');
}

function planTripFromInfo() {
  if (!infoSelected) return;
  closeModal('infoModal');
  requireAuth('createTripModal');
  setTimeout(() => {
    const titleInput = document.getElementById('formTripTitle');
    if (titleInput && !titleInput.value) titleInput.value = `Trip to ${infoSelected.city}`;
  }, 50);
}

// ==========================================
// RENDERING UI
// ==========================================
function calculateTotalCost(trip) {
  return trip.stops.reduce((acc, stop) => acc + stop.activities.reduce((sAcc, act) => sAcc + Number(act.cost || 0), 0), 0);
}

function renderDashboard() {
  const searchInput = document.getElementById('dashSearchInput');
  const search = searchInput ? searchInput.value.toLowerCase() : '';
  const costFilter = document.getElementById('dashCostFilter') ? document.getElementById('dashCostFilter').value : 'All';

  const filteredCities = PRESET_CITIES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search) || c.country.toLowerCase().includes(search);
    const matchesCost = costFilter === 'All' || c.cost === costFilter;
    return matchesSearch && matchesCost;
  });

  const gridContainer = document.getElementById('dashDestinationsGrid');
  if (gridContainer) {
    gridContainer.innerHTML = filteredCities.map(c => `
      <div onclick="openCityInfo('${c.name}')" class="border border-slate-300 rounded-md overflow-hidden hover:shadow-md cursor-pointer h-32 relative">
        <img src="${c.image}" class="w-full h-full object-cover" />
        <div class="absolute bottom-0 w-full bg-white/90 p-1 text-center border-t border-slate-300 text-xs font-bold">${c.name}</div>
      </div>
    `).join('') || `<p class="col-span-2 md:col-span-5 text-sm text-slate-400 py-4 text-center">No destinations match the selected filters.</p>`;
  }

  const today = new Date().toISOString().split('T')[0];

  document.getElementById('dashTripsGrid').innerHTML = myTrips.slice(0, 3).map((trip) => {
    let statusText = 'Ongoing';
    let statusColor = 'bg-yellow-100 text-yellow-700 border-yellow-300';
    
    if (today < trip.startDate) {
        statusText = 'Upcoming';
        statusColor = 'bg-blue-100 text-blue-700 border-blue-300';
    } else if (today > trip.endDate) {
        statusText = 'Completed';
        statusColor = 'bg-green-100 text-green-700 border-green-300';
    }

    return `
    <div onclick="openTripWorkspace(${myTrips.indexOf(trip)})" class="border border-slate-300 rounded-md overflow-hidden hover:shadow-md cursor-pointer flex flex-col h-48 bg-white">
      <div class="h-2/3 bg-slate-50 flex items-center justify-center border-b border-slate-200">
         <span class="border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusColor}">
            ${statusText}
         </span>
      </div>
      <div class="p-2 flex-1 flex flex-col justify-center text-center">
         <h4 class="font-bold text-sm text-slate-800 truncate">${trip.title}</h4>
         <p class="text-[11px] text-slate-500 mt-0.5">${trip.startDate} to ${trip.endDate}</p>
      </div>
    </div>
  `;
  }).join('') || `<div class="col-span-3 text-center text-slate-500 py-8 border border-dashed border-slate-300 rounded-md bg-white">No previous trips found. Sign up and create one!</div>`;
}

function renderMyTripsView() {
  const today = new Date().toISOString().split('T')[0];
  
  const upcoming = myTrips.filter(t => today < t.startDate);
  const completed = myTrips.filter(t => today > t.endDate);
  const ongoing = myTrips.filter(t => today >= t.startDate && today <= t.endDate);

  const renderList = (list) => list.map(t => `
    <div onclick="openTripWorkspace(${myTrips.indexOf(t)})" class="w-full bg-white border border-slate-300 rounded-md p-4 flex justify-between items-center hover:shadow-md cursor-pointer">
       <div>
          <h4 class="font-bold text-slate-800">${t.title}</h4>
          <p class="text-xs text-slate-500">Date Range: ${t.startDate} to ${t.endDate}</p>
       </div>
       <div class="text-right">
          <span class="border border-slate-300 px-3 py-1 rounded text-xs font-semibold bg-slate-50">Budget: ₹${calculateTotalCost(t)}</span>
       </div>
    </div>
  `).join('') || `<div class="w-full bg-white border border-slate-300 rounded-md p-4 text-center text-slate-400 text-sm">No trips in this section.</div>`;

  document.getElementById('upcomingTripsList').innerHTML = renderList(upcoming);
  document.getElementById('completedTripsList').innerHTML = renderList(completed);
  
  const ongoingContainer = document.querySelector('#view-my-trips > div:nth-child(2) .space-y-3');
  if (ongoingContainer) {
     ongoingContainer.innerHTML = renderList(ongoing);
  }
}

function renderProfileGrid() {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = myTrips.filter(t => today < t.startDate);
  const completed = myTrips.filter(t => today > t.endDate);

  const generateGrid = (list) => list.map(t => `
    <div class="border border-slate-300 rounded-md p-2 text-center bg-white">
       <div class="h-24 bg-slate-50 border-b border-slate-200 rounded-sm mb-2 flex items-center justify-center">
         <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">TRIP</span>
       </div>
       <h5 class="text-xs font-bold truncate mb-2">${t.title}</h5>
       <button onclick="openTripWorkspace(${myTrips.indexOf(t)})" class="text-[10px] uppercase border border-slate-400 px-3 py-1 rounded-sm hover:bg-slate-50 font-bold">View</button>
    </div>
  `).join('');

  document.getElementById('profileUpcomingGrid').innerHTML = generateGrid(upcoming) || `<p class="text-xs text-slate-400 col-span-2">No preplanned trips.</p>`;
  document.getElementById('profileCompletedGrid').innerHTML = generateGrid(completed) || `<p class="text-xs text-slate-400 col-span-2">No previous trips.</p>`;
}

function renderCatalog() {
  const search = document.getElementById('catalogSearchInput').value.toLowerCase();
  const costFilter = document.getElementById('catalogCostFilter').value;
  const catFilter = document.getElementById('catalogCategoryFilter').value;
  
  const filteredCities = PRESET_CITIES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search) || c.country.toLowerCase().includes(search);
    const matchesCost = costFilter === 'All' || c.cost === costFilter;
    const matchesCat = catFilter === 'All'; 
    return matchesSearch && matchesCost && matchesCat;
  });

  const filteredActivities = PRESET_ACTIVITIES.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(search) || a.city.toLowerCase().includes(search);
    const matchesCat = catFilter === 'All' || a.category === catFilter;
    
    let aCostTier = 'Budget';
    if (a.cost >= 4000) aCostTier = 'Luxury';
    else if (a.cost >= 2000) aCostTier = 'Moderate';

    const matchesCost = costFilter === 'All' || aCostTier === costFilter;

    return matchesSearch && matchesCat && matchesCost;
  });

  const mixedData = [
      ...filteredCities.map(c => ({ title: c.name, desc: c.country, type: 'City', extra: c.cost, clickFn: `openCityInfo('${c.name}')` })),
      ...filteredActivities.map(a => ({ title: a.name, desc: a.city, type: 'Activity', extra: `₹${a.cost} - ${a.category}`, clickFn: `openActivityInfo('${a.name}')` }))
  ];

  document.getElementById('catalogList').innerHTML = mixedData.map(item => `
    <div onclick="${item.clickFn}" class="w-full bg-white border border-slate-300 p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer">
       <div>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">${item.type}</p>
          <h4 class="font-bold text-slate-800 text-sm">${item.title}</h4>
       </div>
       <div class="text-right">
          <p class="text-xs text-slate-600 font-semibold mb-1">${item.desc}</p>
          <span class="border border-slate-300 px-2 py-0.5 rounded text-[10px] bg-slate-100">${item.extra}</span>
       </div>
    </div>
  `).join('') || `<div class="text-sm text-slate-400 p-4 border border-slate-300 text-center bg-white rounded-md">No matching options found.</div>`;
}

function renderModalSuggestions() {
  document.getElementById('modalSuggestionsGrid').innerHTML = PRESET_CITIES.map(c => `
     <div class="border border-slate-300 rounded-sm p-2 text-center h-24 relative overflow-hidden">
        <img src="${c.image}" class="absolute inset-0 w-full h-full object-cover opacity-50"/>
        <span class="relative z-10 font-bold text-slate-900 text-sm bg-white/80 px-2 py-1 rounded">${c.name}</span>
     </div>
  `).join('');
}

// ==========================================
// WORKSPACE / ITINERARY LOGIC
// ==========================================
function openTripWorkspace(idx) {
  activeTripIndex = idx;
  const trip = myTrips[idx];
  document.getElementById('detailTripTitle').innerText = `Itinerary: ${trip.title}`;
  document.getElementById('detailTripTotal').innerText = `Total Estimated Budget: ₹${calculateTotalCost(trip)}`;
  
  renderTimeline();
  switchTab('trip-detail');
}

function renderTimeline() {
  const trip = myTrips[activeTripIndex];
  let html = '';

  if (trip.stops.length === 0) {
      html = `<div class="w-full border border-dashed border-slate-400 p-8 text-center text-slate-500 rounded-md">Section 1: All necessary information about this section will appear here.<br>Use the button below to start building.</div>`;
  } else {
      trip.stops.forEach((stop, sIdx) => {
        html += `
          <div class="relative bg-white border border-slate-300 rounded-md mb-8 shadow-sm">
            <div class="bg-slate-100 border-b border-slate-300 p-4 flex justify-between items-center">
               <div>
                 <h3 class="font-bold text-slate-800 text-base">Section ${sIdx + 1}: ${stop.city}</h3>
                 <p class="text-xs text-slate-500">Date Range: ${stop.startDate} to ${stop.endDate}</p>
               </div>
               <div class="flex gap-2">
                 <button onclick="openAddActivityModal(${sIdx})" class="border border-slate-400 bg-white text-xs px-3 py-1 font-bold rounded-sm">+ Add Activity</button>
                 <button onclick="removeStop(${sIdx})" class="text-red-500 font-bold text-xs px-2">✕</button>
               </div>
            </div>
            <div class="p-4 space-y-3">
               ${stop.activities.length === 0 ? '<p class="text-xs text-slate-400 text-center py-2">No physical activities added yet.</p>' : ''}
               ${stop.activities.map((a, aIdx) => `
                 <div class="grid grid-cols-12 gap-4 items-center border border-slate-200 p-2 rounded-sm bg-slate-50">
                    <div class="col-span-2 text-center border-r border-slate-300 pr-2">
                      <span class="block border border-slate-300 bg-white text-xs font-bold py-1">Day ${a.dayNumber}</span>
                    </div>
                    <div class="col-span-7 pl-2">
                       <p class="font-semibold text-sm text-slate-800">${a.name}</p>
                       <p class="text-[10px] text-slate-500 uppercase tracking-wide">${a.category}</p>
                    </div>
                    <div class="col-span-3 text-right flex justify-end items-center gap-2">
                       <span class="border border-slate-300 bg-white px-2 py-1 text-xs font-bold">₹${a.cost}</span>
                       <button onclick="removeActivity(${sIdx}, ${aIdx})" class="text-slate-400 hover:text-red-500 text-xs">✕</button>
                    </div>
                 </div>
               `).join('')}
            </div>
          </div>
          ${sIdx < trip.stops.length - 1 ? `<div class="w-full flex justify-center -mt-8 mb-2"><div class="h-6 border-l-2 border-slate-800"></div></div><div class="w-full flex justify-center mb-6"><div class="border-t-2 border-slate-800 w-2 transform rotate-45 mt-[-2px]"></div><div class="border-t-2 border-slate-800 w-2 transform -rotate-45 mt-[-2px] ml-[-8px]"></div></div>` : ''}
        `;
      });
  }
  document.getElementById('itineraryTimeline').innerHTML = html;
}

function exportTripPDF() {
  const element = document.getElementById('printableItinerary');
  const tripTitle = myTrips[activeTripIndex] ? myTrips[activeTripIndex].title : 'Trip-Itinerary';
  
  const options = {
    margin:       10,
    filename:     `${tripTitle.replace(/\s+/g, '_')}_Itinerary.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(options).save();
}

function handleCreateTrip(e) {
  e.preventDefault();
  const newTrip = {
    id: 't-' + Date.now(),
    ownerEmail: currentUser.email,
    title: document.getElementById('formTripTitle').value,
    startDate: document.getElementById('formTripStart').value,
    endDate: document.getElementById('formTripEnd').value,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
    stops: []
  };
  tripsDB.unshift(newTrip); 
  closeModal('createTripModal');
  e.target.reset();
  saveState();
  openTripWorkspace(0);
}

function handleAddStop(e) {
  e.preventDefault();
  const trip = myTrips[activeTripIndex];
  const stopStart = document.getElementById('formStopStart').value;
  const stopEnd = document.getElementById('formStopEnd').value;

  if (stopStart < trip.startDate || stopEnd > trip.endDate) {
    alert(`Error: Destination dates must fall within your main trip dates (${trip.startDate} to ${trip.endDate}).`);
    return; 
  }

  if (stopStart > stopEnd) {
    alert("Error: Start Date cannot be after the End Date.");
    return; 
  }

  trip.stops.push({
    city: document.getElementById('formStopCity').value,
    startDate: stopStart,
    endDate: stopEnd,
    activities: []
  });
  
  const globalIndex = tripsDB.findIndex(t => t.id === trip.id);
  tripsDB[globalIndex] = trip;
  
  closeModal('addStopModal');
  e.target.reset();
  saveState();
  openTripWorkspace(activeTripIndex);
}

function openAddActivityModal(stopIdx) {
  document.getElementById('formTargetStopIdx').value = stopIdx;
  openModal('addActivityModal');
}

function handleAddActivity(e) {
  e.preventDefault();
  const sIdx = document.getElementById('formTargetStopIdx').value;
  myTrips[activeTripIndex].stops[sIdx].activities.push({
    name: document.getElementById('formActName').value,
    category: document.getElementById('formActCategory').value,
    cost: Number(document.getElementById('formActCost').value),
    dayNumber: Number(document.getElementById('formActDay').value || 1)
  });
  
  const globalIndex = tripsDB.findIndex(t => t.id === myTrips[activeTripIndex].id);
  tripsDB[globalIndex] = myTrips[activeTripIndex];

  closeModal('addActivityModal');
  e.target.reset();
  saveState();
  openTripWorkspace(activeTripIndex);
}

function removeStop(sIdx) {
  if(confirm('Delete section?')) {
    myTrips[activeTripIndex].stops.splice(sIdx, 1);
    const globalIndex = tripsDB.findIndex(t => t.id === myTrips[activeTripIndex].id);
    tripsDB[globalIndex] = myTrips[activeTripIndex];
    saveState();
    openTripWorkspace(activeTripIndex);
  }
}

function removeActivity(sIdx, aIdx) {
  myTrips[activeTripIndex].stops[sIdx].activities.splice(aIdx, 1);
  const globalIndex = tripsDB.findIndex(t => t.id === myTrips[activeTripIndex].id);
  tripsDB[globalIndex] = myTrips[activeTripIndex];
  saveState();
  openTripWorkspace(activeTripIndex);
}

function openShareModal() {
  openModal('shareModal');
}

// Init App
updateAuthState(); 
loadMyTrips(); 
switchTab('dashboard');