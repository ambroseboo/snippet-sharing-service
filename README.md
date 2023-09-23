# Snippet Sharing Service (For GovTech TAP 2024)
## Choice of stack: PERN stack (Postgres, Express, React, Node)
* Data: snippet content, title, expiry, url, views, date_posted
* Choose relational (postgres) since we need to order snippets by views/time posted
* Data is also consistent in input (all fields will be required)
* Express & Node:
    * Since this is a MVP, I want to use something simple so that it can be built quickly
* React: 
    * Quick to set up
    * Quality user interface 
    * Components
    * Ease of testing

## To generate (short) url:
- Use base64 encoding because all base64 chars are url-safe
- Use MD5 hash algorithm, which has a fixed length output
    - Take MD5 hash of (timestamp (date_added) + title + random int)
- Consistent 22 character string output when using base64 
- Need to regenerate if duplicate key is created

## Deployment
- This project is deployed on Vercel (https://snippet-sharing-service-olive.vercel.app/). Backend and database hosted on Render.
- Please be patient when opening the app, the backend will take some time to "wake up" (due to being hosted on Render)
- The hosted database will be taken down on 21 Dec 2023 (due to hosting limitations on Render). Please inform me if you need me to host a new database.
