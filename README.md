## URL SHORTNER

Created By: Stephen Goncalves

Status: In Progress 🙌

### Overview

Simple URL Shortner.

### Technologies used

- NodeJs
    - Vue3
    - Express
    - TypeScript
    - TDD

- MongoDB

### Purpose

Apply my knowledge my Rest API build knowlegde, TDD and NoSQL database consumption.🚀

### To Do

[ ] Create a server
    [ ] Routes
    [ ]
[ ] Serve a static HTML file as main page
[ ] 

### Flow

##### Front-end

- User paste the link and a optinal slug.
- User click 'Generate' button.
- Front end send the request to back-end:   
    ```
    {
        "url": "https://example.com/",
        "slug": "example"
    }
    ```

##### Back-end
- Must have a funciton that execute every 5 minutes, check the database for URLs with create older than 30 minutes. If so, must be deleted.

- 


### How to use

<!-- TO-DO
1. Clone this repo:

`git clone git@github.com:stgonzales/twa-backend.git`

2. Go to **twa-backend** folder and install all dependecies just executing `yarn`.  

3. Make sure you have ***Postgres*** pre-installed locally with all the credentials bellow:

```
"username": "postgres",
"password": "docker",
"database": "twa",
```

> *If you want to use your own Postgres instance just change the **ormconfig.json** with details*
>
> *I used a docker ***Postgres*** image, feel free to use the way you want*


4. Execute the migrations command:

`yarn typeorm migration:run`

5. Import the Insomnia Workspace JSON file into Insomnia. 

> *Make sure to install [Insomnia Core](https://insomnia.rest/) first.*

6. Run the server:

`yarn run dev:server`

7. Play around with the requests!

>*Remember that this is a Work in Progress so bugs/no working feature is expected* -->