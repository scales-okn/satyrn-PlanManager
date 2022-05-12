# satyrn-PlanManager
The Plan Manager package that supports plan generation, satisfying parameter requirements, and associated NLG


## How to used it?
Include the following package to your dependencies.
```
"dependencies": {
    "statement-mananger": "https://github.com/nu-c3lab/satyrn-PlanManager.git"
  }
```
and
```
npm install
```


## How to maintain?
```
git add .
npm run commit
npm run release
```

## How to develop?
The devhelper directory contains a little test bed for exploring the generated plans. To leverage it, cd into the base directory of this repo and run `python -m http.server` to start a python server. Then visit `http://localhost:8000/devhelper/` in your browser (assuming default http.server behavior). A bare bones html file will present the test plan readout for the current version of the library.
