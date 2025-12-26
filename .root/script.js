// Food database with context-aware recommendations
const foodDatabase = {
    morning: {
        veg: {
            spicy: { name: "Chole Bhature", desc: "Fluffy bread with spicy chickpea curry - a Delhi morning classic!" },
            sweet: { name: "Aloo Kachori", desc: "Sweet and savory potato-filled pastry, perfect with morning tea" },
            chatpata: { name: "Bedmi Puri", desc: "Crispy puri with tangy aloo sabzi - morning street food favorite" },
            salty: { name: "Paranthe", desc: "Stuffed flatbread from Chandni Chowk - hearty morning meal" },
            sour: { name: "Fruit Chaat", desc: "Fresh seasonal fruits with tangy spices to start your day" }
        },
        "non-veg": {
            spicy: { name: "Keema Paratha", desc: "Spiced minced meat stuffed in crispy bread" },
            sweet: { name: "Chicken Roll", desc: "Sweet and savory chicken wrapped in soft roti" },
            chatpata: { name: "Egg Paratha", desc: "Street-style egg-stuffed paratha with tangy chutneys" },
            salty: { name: "Mutton Kachori", desc: "Flaky pastry filled with spiced mutton" },
            sour: { name: "Chicken Chaat", desc: "Tangy chicken pieces with fresh vegetables and spices" }
        }
    },
    afternoon: {
        veg: {
            spicy: { name: "Raj Kachori", desc: "Large crispy shell filled with spicy chutneys and yogurt" },
            sweet: { name: "Kulfi", desc: "Creamy traditional ice cream - perfect for hot afternoons!" },
            chatpata: { name: "Bhel Puri", desc: "Crunchy mix of puffed rice, sev, and tangy chutneys" },
            salty: { name: "Samosa Chaat", desc: "Crushed samosas topped with yogurt and chutneys" },
            sour: { name: "Aam Panna", desc: "Refreshing raw mango drink to beat the afternoon heat" }
        },
        "non-veg": {
            spicy: { name: "Chicken Tikka Roll", desc: "Spicy grilled chicken wrapped in soft roomali roti" },
            sweet: { name: "Fish Fry", desc: "Sweet and spicy battered fish - afternoon street delight" },
            chatpata: { name: "Chicken Chaat", desc: "Tangy chicken pieces mixed with onions and spices" },
            salty: { name: "Seekh Kebab", desc: "Grilled minced meat skewers with mint chutney" },
            sour: { name: "Fish Tikka", desc: "Tangy marinated fish pieces grilled to perfection" }
        }
    },
    evening: {
        veg: {
            spicy: { name: "Aloo Tikki", desc: "Crispy potato patties with spicy chutneys - evening favorite!" },
            sweet: { name: "Jalebi", desc: "Sweet spiral pastry soaked in sugar syrup" },
            chatpata: { name: "Golgappa", desc: "Crispy shells filled with tangy water - the ultimate evening snack!" },
            salty: { name: "Papdi Chaat", desc: "Crispy wafers topped with yogurt, chutneys, and sev" },
            sour: { name: "Dahi Bhalla", desc: "Soft lentil dumplings in tangy yogurt with tamarind chutney" }
        },
        "non-veg": {
            spicy: { name: "Chicken Momos", desc: "Steamed dumplings filled with spicy chicken - evening comfort food!" },
            sweet: { name: "Mutton Roll", desc: "Sweet and spicy mutton wrapped in soft paratha" },
            chatpata: { name: "Chicken Tikka", desc: "Grilled chicken pieces with tangy mint chutney" },
            salty: { name: "Fish Pakora", desc: "Crispy battered fish pieces - perfect evening snack" },
            sour: { name: "Chicken Chaat", desc: "Tangy chicken salad with onions and lime" }
        }
    },
    night: {
        veg: {
            spicy: { name: "Veg Momos", desc: "Hot steamed dumplings with spicy sauce - perfect for cool nights!" },
            sweet: { name: "Gajar Ka Halwa", desc: "Warm carrot pudding - comforting night dessert" },
            chatpata: { name: "Pav Bhaji", desc: "Spicy vegetable curry with buttered bread" },
            salty: { name: "Veg Roll", desc: "Mixed vegetables wrapped in soft roti with sauces" },
            sour: { name: "Chana Chaat", desc: "Tangy chickpea salad with fresh vegetables" }
        },
        "non-veg": {
            spicy: { name: "Chicken Momos", desc: "Hot steamed dumplings - the ultimate Delhi night food!" },
            sweet: { name: "Mutton Biryani", desc: "Fragrant rice with tender mutton - hearty night meal" },
            chatpata: { name: "Chicken Roll", desc: "Spicy chicken wrapped in soft roomali roti" },
            salty: { name: "Seekh Kebab", desc: "Grilled meat skewers - perfect for night cravings" },
            sour: { name: "Fish Tikka", desc: "Tangy grilled fish pieces with mint chutney" }
        }
    }
};

// Weather-based context messages
const weatherMessages = {
    hot: {
        morning: "Hot morning in Delhi - time for something refreshing!",
        afternoon: "Scorching afternoon - you need something cool and light!",
        evening: "Still hot outside - perfect time for chilled treats!",
        night: "Warm night - light and cooling food is ideal!"
    },
    moderate: {
        morning: "Pleasant morning weather - great time for hearty breakfast!",
        afternoon: "Perfect afternoon weather for street food exploration!",
        evening: "Beautiful evening in Delhi - ideal for chaat and snacks!",
        night: "Cool and comfortable night - perfect for hot, filling food!"
    },
    cold: {
        morning: "Chilly morning - you need something warm and filling!",
        afternoon: "Cool afternoon - time for some hot and spicy treats!",
        evening: "Cold evening in Delhi - hot food will warm you up!",
        night: "Cold night - perfect time for steaming hot comfort food!"
    }
};

// App state
let selectedFlavors = [];
let selectedDiet = 'veg';
let currentTime = 'evening';
let currentWeather = 'moderate';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    updateTimeAndWeather();
    setupEventListeners();
    setInterval(updateTimeAndWeather, 60000); // Update every minute
});

function updateTimeAndWeather() {
    const now = new Date();
    const hour = now.getHours();
    
    // Determine time of day
    if (hour >= 7 && hour < 12) {
        currentTime = 'morning';
        document.getElementById('time-display').textContent = '🌅 Morning';
    } else if (hour >= 12 && hour < 17) {
        currentTime = 'afternoon';
        document.getElementById('time-display').textContent = '☀️ Afternoon';
    } else if (hour >= 17 && hour < 21) {
        currentTime = 'evening';
        document.getElementById('time-display').textContent = '🌆 Evening';
    } else {
        currentTime = 'night';
        document.getElementById('time-display').textContent = '🌙 Night';
    }
    
    // Simulate weather (in real app, this would come from weather API)
    const weatherOptions = ['hot', 'moderate', 'cold'];
    const month = now.getMonth();
    
    // Seasonal weather simulation for Delhi
    if (month >= 3 && month <= 6) { // April to July - Hot
        currentWeather = Math.random() > 0.3 ? 'hot' : 'moderate';
    } else if (month >= 11 || month <= 1) { // Dec to Feb - Cold
        currentWeather = Math.random() > 0.3 ? 'cold' : 'moderate';
    } else { // Moderate months
        currentWeather = 'moderate';
    }
    
    const weatherEmojis = { hot: '🔥', moderate: '🌤️', cold: '❄️' };
    const weatherText = currentWeather.charAt(0).toUpperCase() + currentWeather.slice(1);
    document.getElementById('weather-display').textContent = `${weatherEmojis[currentWeather]} ${weatherText}`;
}

function setupEventListeners() {
    // Flavor button listeners
    document.querySelectorAll('.flavor-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const flavor = this.dataset.flavor;
            
            if (flavor === 'surprise') {
                // Clear other selections and select surprise
                document.querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedFlavors = ['surprise'];
            } else {
                // Remove surprise if selecting specific flavor
                document.querySelector('[data-flavor="surprise"]').classList.remove('active');
                
                // Toggle this flavor
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    if (!selectedFlavors.includes(flavor)) {
                        selectedFlavors.push(flavor);
                    }
                } else {
                    selectedFlavors = selectedFlavors.filter(f => f !== flavor);
                }
            }
        });
    });
    
    // Diet button listeners
    document.querySelectorAll('.diet-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedDiet = this.dataset.diet;
        });
    });
    
    // Recommendation button listener
    document.getElementById('get-recommendation').addEventListener('click', getRecommendation);
}

// Notification messages based on context
const notificationMessages = {
    hot: {
        morning: "🔥 Hot morning in Delhi! Time for something refreshing to start your day right!",
        afternoon: "☀️ Scorching afternoon heat! You definitely need something cool and refreshing!",
        evening: "🌅 Still hot outside! Perfect time for chilled treats to beat the heat!",
        night: "🌙 Warm night ahead! Light and cooling food will keep you comfortable!"
    },
    moderate: {
        morning: "🌤️ Beautiful morning weather! Perfect time for hearty Delhi breakfast!",
        afternoon: "☀️ Lovely afternoon! Ideal weather for exploring Delhi's street food scene!",
        evening: "🌆 Perfect evening in Delhi! Time for the city's famous chaat and snacks!",
        night: "🌙 Cool and comfortable night! Perfect for hot, filling comfort food!"
    },
    cold: {
        morning: "❄️ Chilly morning in Delhi! You need something warm and filling to start strong!",
        afternoon: "🌨️ Cool afternoon! Time for some hot and spicy treats to warm you up!",
        evening: "🌃 Cold evening vibes! Hot street food will definitely warm your soul!",
        night: "❄️ Cold Delhi night! Perfect time for steaming hot comfort food!"
    }
};

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}

function getRecommendation() {
    if (selectedFlavors.length === 0) {
        showNotification('🤔 Please select at least one flavor preference to get your perfect recommendation!');
        return;
    }
    
    // Show notification first
    const notificationMsg = notificationMessages[currentWeather][currentTime];
    showNotification(notificationMsg);
    
    let recommendation;
    
    if (selectedFlavors.includes('surprise')) {
        // Random recommendation
        const flavors = ['spicy', 'sweet', 'chatpata', 'salty', 'sour'];
        const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
        recommendation = foodDatabase[currentTime][selectedDiet][randomFlavor];
    } else {
        // Pick first selected flavor for recommendation
        const primaryFlavor = selectedFlavors[0];
        recommendation = foodDatabase[currentTime][selectedDiet][primaryFlavor];
    }
    
    // Display recommendation after a short delay
    setTimeout(() => {
        document.getElementById('food-name').textContent = recommendation.name;
        document.getElementById('food-description').textContent = recommendation.desc;
        
        // Context message
        const contextMsg = weatherMessages[currentWeather][currentTime];
        document.getElementById('context-reason').textContent = contextMsg;
        
        // Show recommendation with animation
        const recDiv = document.getElementById('recommendation');
        recDiv.classList.remove('hidden');
        recDiv.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}