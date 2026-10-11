# Google Maps Embed Setup

## To get the correct embed URL from your Google Maps link:

1. Open this link in your browser: https://maps.app.goo.gl/EhhCSR8uzLr9j8XX7
2. Once the map loads, click on the **"Share"** button (bottom of the map)
3. Select **"Embed a map"** tab
4. Choose your preferred map size
5. Copy the `src` attribute from the iframe code (the long URL starting with `https://www.google.com/maps/embed?...`)
6. Replace the `src` value in `src/pages/Contact.tsx` on line 112

## Current Embed URL Location:
File: `src/pages/Contact.tsx`  
Line: ~112  
Look for: `<iframe src="...">`

## Alternative: Using Place Name
If the above doesn't work, you can also use a place search embed format. Update the iframe src to:
```
https://www.google.com/maps/embed/v1/place?q=KLE+BCA+BBA+College+Sarwark+Karnataka&zoom=15
```

Note: This may require a Google Maps API key for some features.


