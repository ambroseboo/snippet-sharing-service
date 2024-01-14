# Snippet Sharing Service (For GovTech TAP 2024)
This is a project for the GovTech Technology Associate Programme 2024. The aim is to create a PasteBin clone, which supports the following functionalities:
* Snippet Creation
   * A snippet should consist of a title and its contents.
   * The snippet should respect formatting entered by the user (eg. whitespace, new lines).
   * The snippet should be assigned a unique URL. It should be automatically generated.
* Snippet Retrieval
   * Users should be able to access a snippet by entering its unique URL and view the stored content.
* Snippet Views and Statistics
   * Track and display the number of views for each snippet. Each time a snippet is accessed, its view counter is incremented by 1.
* Snippet Listing
   * Users should be able to view a list of all snippets. Users should be able to sort by most recent snippets (default) or by most number of views. There should be either infinite scrolling or pagination for every 10 snippets listed.
* Persistence
   * Implement storage for the snippets using a database to ensure that the created snippets and their respective metadata are stored and retrievable.
* Snippet Expiration
   * Automatically remove snippets from being readable after a specified period (in minutes after creation) to simulate an expiration policy. You may decide whether the snippet contents are deleted from the database.

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

## How the short url is generated:
- Use base64 encoding because all base64 chars are url-safe
- Use MD5 hash algorithm, which has a fixed length output
    - Take MD5 hash of (timestamp (date_added) + title + random int)
- Consistent 22 character string output when using base64 
- Need to regenerate if duplicate key is created

## Deployment
- This project is deployed on Vercel (https://snippet-sharing-service-olive.vercel.app/). Backend and database hosted on Render.
- Please be patient when opening the app, the backend will take some time to "wake up" (due to being hosted on Render)
- The hosted database will be taken down on 21 Dec 2023 (due to hosting limitations on Render). Please inform me if you need me to host a new database.
