Choice of stack: PERN stack (Postgres, Express, React, Node)
    - relational or not relational?
    - snippet content, title, expiry, url, views, date_posted
    - Choose relational (postgres) since we need to order pastes by views/time posted
        - Data is also consistent in input (all fields will be required)

    Express & Node:
        - Since this is a MVP, I want to use something simple so that it can be built quickly
        - Express works well with postgres

    React: 
        - Quick to set up
        - Quality user interface 
        - Components
        - Ease of testing

To generate (short) url:
    - Use base64 encoding because all base64 chars are url-safe
    - Use MD5 hash algorithm, which has a fixed length output
        - Take MD5 hash of timestamp (date_added) + title + random int
    - 22 character string output when using base64 
    - Need to regenerate if duplicate key is created
