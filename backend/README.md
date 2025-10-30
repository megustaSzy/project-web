






# Set Up

- install dependencies

```bash
    npm install
```

- Rename file ```.env.example ``` file to  ``` .env ```

- Open the ``` .env ``` file and update the ``` DATABASE_URL ``` configuration to match your PostgreSQL username, password, and database name.
    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/db_lamigo?schema=public"
    ```
    
- Run the following command to apply the database migrations
    ```npx prisma db push```
    
- Run the following command in the terminal
    ```bash
    npm run dev
    ```
