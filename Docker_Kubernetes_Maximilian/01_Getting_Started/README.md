# Getting Started

## What is Docker? And Why?

**Docker** is a container technology: A tool for creating and managing containers.

**Container** is software development is a standardized unit of software. A package of code and dependencies to run that
code. (e.g. Node.js code + Node.js runtime). \
The same container always yields the exact same application and execution behavior! No matter where or by whom it might
be executed.

### Why Containers?

1. Different Development & Production environments: We want to build and test in exactly (!) the same environment as we
   later run our app in.
2. Different Development Environments Within a Team / Company: every team should have the exactly same environment when
   working on the same project.
3. Clashing Tools / Versions Between Different Projects: when switching between projects, tools, used in project A
   should not clash with tools used in project B.

### Solution: Virtual Machines / Virtual Operating Systems
- Pros
  - Separate environments
  - Environment-specific configurations are possible
  - Environment configurations can be shared and reproduced reliably
- Cons
   - Redundant duplication, waste of space
   - Performance can be slow, boot times can be long 
   - Reproducing on another computer / serve is possible but may still be tricky

