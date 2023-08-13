## Initial Steps to Follow

### **STEP 1**

Create a folder and open it on vscode.

### **STEP 2**

Next, initialize it as an npm project:

    npm init -y

### **STEP 3**

Run the following command from inside your project directory to install the TypeScript:

    npm install --save-dev typescript

### **STEP 4**

In the root directory create a file named tsconfig.json and paste the following line of code.

    {
        "compilerOptions": {
            "module": "commonjs",
            "esModuleInterop": true,
            "target": "es6",
            "moduleResolution": "node",
            "sourceMap": true,
            "outDir": "dist"
        },
        "lib": ["es2015", "es2016", "dom", "es2018.promise"]
    }

### **STEP 5**

Create a file named app.ts and all your coding will be placed here.

### **STEP 6**

Install nodemon with ts

        yarn add --dev nodemon ts-node

### **STEP 7**

Inside package.json under scripts, and the below line.

            "dev": "nodemon ./app.ts"

### **STEP 8**

Finally run the script

            npm run dev

# **Happy Coding**
