# JavaScript Skills Training Framework

A structured approach to mastering JavaScript through deliberate practice and progressive learning.

## 📁 Project Structure

```
src/
├── theme-name/              # e.g., variables, functions, arrays
│   ├── exercise/            # Challenge files (you write code here)
│   │   ├── 01-challenges.js
│   │   ├── 02-challenges.js
│   │   └── 03-challenges.js
│   └── answer/              # Solution files (reference answers)
│       ├── 01-solutions.js
│       ├── 02-solutions.js
│       └── 03-solutions.js
```

## 📋 Naming Conventions

### Folders
- **Theme folders**: lowercase, descriptive names (e.g., `variables`, `functions`, `arrays`, `objects`)
- **Subfolders**: 
  - `exercise/` - Contains challenge files
  - `answer/` - Contains solution files

### Files
- **Exercise files**: `NN-challenges.js` (where NN is a two-digit number)
  - Example: `01-challenges.js`, `02-challenges.js`
  
- **Solution files**: `NN-solutions.js` (matching the exercise number)
  - Example: `01-solutions.js`, `02-solutions.js`

## 🚀 How to Use

### 1. Choose a Theme
Navigate to the theme folder you want to practice (e.g., `src/variables/`)

### 2. Work on Exercises
Open the challenge file in the `exercise/` folder:
```bash
cd src/variables/exercise
node 01-challenges.js
```
or 

```bash
node src/variables/exercise/01-challenges.js
```

### 3. Write Your Code
- Read the comments in the challenge file
- Write your solution in the provided spaces
- Test your code by running the file

### 4. Check Your Answers
Compare your solution with the reference in the `answer/` folder:
```bash
cd ../answer
node 01-solutions.js
```

### 5. Verify Understanding
- Make sure your output matches the solution
- Study the differences if your approach differs
- Add comments to clarify concepts you learned

## 📝 Adding a New Theme

When starting a new JavaScript topic, follow this template:

1. **Create the theme folder:**
   ```bash
   mkdir src/your-theme-name
   ```

2. **Create subfolders:**
   ```bash
   mkdir src/your-theme-name/exercise
   mkdir src/your-theme-name/answer
   ```

3. **Create challenge file:**
   ```bash
   touch src/your-theme-name/exercise/01-challenges.js
   ```

4. **Create solution file:**
   ```bash
   touch src/your-theme-name/answer/01-solutions.js
   ```

5. **Add exercises and solutions**

## 🎯 Learning Path Suggestion

Recommended order for themes:

1. **variables** - let, const, data types, typeof
2. **operators** - arithmetic, comparison, logical
3. **conditionals** - if/else, switch, ternary
4. **functions** - declarations, expressions, arrow functions
5. **arrays** - methods, iteration, manipulation
6. **objects** - properties, methods, destructuring
7. **loops** - for, while, do-while, for-of, for-in
8. **scope** - global, local, block scope, closures
9. **callbacks** - higher-order functions, callback patterns
10. **promises** - async/await, error handling
11. **classes** - OOP, inheritance, prototypes
12. **modules** - import/export, ES6 modules

## 💡 Best Practices

- **Consistency**: Always use the naming convention
- **Comments**: Document your thought process in exercises
- **Progression**: Complete exercises in order (01, 02, 03...)
- **Testing**: Run your code frequently to catch errors early
- **Review**: Revisit old themes periodically to reinforce learning

## 📊 Tracking Progress

Mark completed themes by updating this checklist:

- [ x ] variables
- [ x ] operators
- [ x ] conditionals
- [ x ] functions
- [ x ] arrays
- [ x ] objects
- [ x ] loops
- [ x ] scope
- [ x ] callbacks
- [ x ] promises
- [ x ] classes
- [ x ] modules

## 🛠️ Requirements

- Node.js installed (v14 or higher recommended)
- Code editor (VS Code recommended)
- Terminal/Command Prompt

## 📚 Example: Variables Theme

Current structure for the variables theme:

```
src/variables/
├── exercise/
│   └── 01-challenges.js    # 15 exercises on variables and types
└── answer/
    └── 01-solutions.js      # Complete solutions with explanations
```

## 🤝 Contributing

This is a personal learning journey. Feel free to:
- Add more exercises to existing themes
- Create new themes for advanced topics
- Improve solution explanations
- Add test cases

## 📝 Notes

- Each challenge file should have clear instructions in comments
- Solution files should demonstrate best practices
- Focus on understanding, not just completing
- Experiment beyond the exercises once comfortable

---

**Happy Coding! 🚀**

*"The expert in anything was once a beginner."*
