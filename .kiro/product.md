# Product: Delhi Street Food Recommender

## Purpose
Delhi has one of the richest and most diverse street food cultures in India, shaped by climate, time of day, locality, and cultural habits.
This project is designed to recommend local street food in Delhi using cultural, environmental, and behavioural contexts.  
It helps visitors and newcomers discover the right food at the right time, based on real-world behavioural patterns followed by locals.

The system mimics how a local Delhi resident would suggest food in real life.

---

## City Context
City: Delhi, India

Delhi has a rich and diverse street food culture shaped by:
- Extreme weather (hot summers, cold winters)
- Time-based eating habits
- Busy markets and street vendors
- Strong preference for flavorful and filling food

Food choices in Delhi change noticeably with time of day and season.

---
Target Users

-Tourists visiting Delhi
-New residents or students
-Food explorers unfamiliar with local patterns
-Anyone who can't decide and wants quick, trustworthy food suggestions

## User Context Inputs

The system considers the following inputs:

- Time of day (morning, afternoon, evening, night)
- Weather (hot, moderate, cold)
- Food preference (sweet, spicy, chatpata, salty)
- Diet type (vegetarian/non-vegetarian)

These inputs help determine the most suitable local food recommendation.

---

## Core Design Philosophy

-Zero typing, minimal effort
-Users select preferences using buttons and toggles.
-No long text input required.
-Context-aware decisions

Recommendations depend on:

-Time of day
-Weather conditions
-Flavor preference
-Dietary choice (veg / non-veg)
-Location within Delhi (optional)
-Human-like logic

The system mimics how a local would suggest food.
Suggestions feel natural, not algorithmic.

## Food Behaviour Rules

### Time-Based Rules
- Morning (7–11 AM):  
  Chole bhature, aloo kachori, bedmi puri

- Afternoon (12–4 PM):  
  Fruit chaat, kulfi, light snacks

- Evening (5–8 PM):  
  Golgappa, aloo tikki, papdi chaat

- Night (8 PM onwards):  
  Momos, rolls, kebabs, tandoori snacks

---

### Weather-Based Rules
- Hot weather:  
  Kulfi, lemon soda, fruit chaat, cold lassi

- Cold weather:  
  Momos, gajar ka halwa, pakoras, hot tea

- Moderate weather:  
  Chaat, rolls, grilled snacks

---

## Cultural & Behavioral Insights
- Crowded stalls are trusted more than empty ones  
- Evening is the most popular time for street food  
- Fried and spicy foods are preferred in colder weather  
- Sweet dishes are commonly eaten during festivals and winter  

---

## Input Parameters (User Selections)

### Flavor Preference

User can select one or more: (Button)

-Spicy
-Sweet
-Sour
-Chatpata
-Salty
-“Surprise me”

### Dietary Preference

-Vegetarian
-Non-Vegetarian

### Time & Weather (Auto-detected)

The system automatically detects:

-Time of day (morning / afternoon / evening / night)
-Local temperature (hot / moderate / cold)

   User does not need to input this manually.

## UI / UX Design Principles

### Visual Style

-Warm colors inspired by street food (orange, red, yellow)
-Minimal text, large clickable buttons
-Friendly icons instead of long descriptions

## Interaction Design

-No typing required
-Button-based selection
-Auto-detection of time and weather
-Dynamic food suggestion cards

### Example Pop-up Messages

- “It’s chilly outside — perfect time for hot momos!”
- “Evening in Delhi calls for chaat. Try aloo tikki nearby.”
- “Hot afternoon? A glass of cold lassi would be perfect.”

## Output Behaviour
The system should:
- Suggest food based on context
- Display short, friendly messages
- Explain *why* a particular food is recommended

Example:
> “It’s a cool evening in Delhi — perfect time for hot momos or aloo tikki from a busy street stall.”

---

## Goal
To demonstrate how local cultural knowledge can be structured into rules and used to make smart, human-like food recommendations.
