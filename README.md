# satyrn-PlanManager
The JavaScript-based Plan Manager package that supports plan generation, satisfying parameter requirements, and associated responses. Pending port to Python.

### License

This repo is part of Satyrn.
Satyrn is free software: you can redistribute it and/or modify it under 
the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version.
Satyrn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with Satyrn. 
If not, see <https://www.gnu.org/licenses/>.


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
