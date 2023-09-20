--- Create a table for the database
CREATE TABLE public.snippet
( 
    snippet_id SERIAL NOT NULL,
    content TEXT NOT NULL,
    title VARCHAR(30) NOT NULL,
    added_date timestamp NOT NULL,
    expiry_date timestamp NOT NULL,
    views integer NOT NULL,
    url VARCHAR(100) NOT NULL,
    PRIMARY KEY (snippet_id)
);

-- Seed data for products table
INSERT INTO public.snippet (snippet_id, content, title, added_date, expiry_date, views, url) VALUES (1,  'helloworld', 'My first snippet', '2023-09-20 21:05:06', '2023-09-20 21:15:06', 0, 'zyx.com');
INSERT INTO public.snippet (snippet_id, content, title, added_date, expiry_date, views, url) VALUES (2,  'byeworld', 'My second snippet', '2023-09-20 21:05:06', '2023-09-20 21:25:06', 1, 'abc.com');
INSERT INTO public.snippet (snippet_id, content, title, added_date, expiry_date, views, url) VALUES (3,  'hello again', 'My third snippet', '2023-09-20 21:15:06', '2023-09-20 21:35:06', 30, 'pqr.com');
INSERT INTO public.snippet (snippet_id, content, title, added_date, expiry_date, views, url) VALUES (4,  'hello \n can you hear me', 'My fourth snippet', '2023-09-21 21:05:06', '2023-09-21 21:15:06', 4, 'sdf.com');
