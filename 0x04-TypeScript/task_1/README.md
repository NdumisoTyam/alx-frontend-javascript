# Task 1: Teacher Interface

This folder implements a simple TypeScript interface called \`Teacher\` and provides a minimal build setup.

---

## Files

- \`js/main.ts\`  
  Contains the \`Teacher\` interface definition and an example object.

- \`package.json\`  
  Defines scripts and dependencies.

- \`tsconfig.json\`  
  TypeScript compiler options.

- \`webpack.config.js\`  
  Bundles your code for development or production.

---

## Getting Started

### Prerequisites

You need to have Node.js (v12+) and npm installed.

### Installation

From the project root:

\`\`\`bash
cd 0x04-TypeScript/task_1
npm install
\`\`\`

### Build & Run

- **Build & watch (Dev):**

  \`\`\`bash
  npm run build:dev
  \`\`\`

- **Build for production:**

  \`\`\`bash
  npm run build
  \`\`\`

- **Run with ts-node (quick check):**

  \`\`\`bash
  npx ts-node js/main.ts
  \`\`\`

---

## How It Works

1. **Interface Definition**  
   The \`Teacher\` interface enforces:
   - \`firstName\` and \`lastName\` as read-only strings  
   - \`fullTimeEmployee\` as a boolean  
   - Optional \`yearsOfExperience\`  
   - A flexible index signature for extra properties  

2. **Example Usage**  
   In \`js/main.ts\`, we create \`teacher3\` to demonstrate:
   \`\`\`ts
   const teacher3: Teacher = {
     firstName: 'John',
     lastName: 'Doe',
     fullTimeEmployee: false,
     location: 'London',
     contract: false,        // extra property via index signature
   };
   \`\`\`

3. **Bundling**  
   Webpack reads from \`js/main.ts\`, compiles down to JavaScript, and outputs to \`dist/main.js\`.

---

## Next Steps

- Add more interfaces or utility types.  
- Expand your build to include tests with Jest or Mocha.  
- Integrate ESLint/Prettier for consistent code style.

---

## License

This project is licensed under the MIT License.  
