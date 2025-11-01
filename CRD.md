# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 37              | ./src/App.tsx                                            |
| 2   | ├── AuthProvider / useAuth         | 29              | ./src/context/AuthContext.tsx                            |
| 5   | │   └── firebase.js                | 11              | ./src/pages/Index.tsx                                    |
| 5   | │       └── .env                   | 11              | ./src/pages/Index.tsx                                    |
| 05  | └── (Outlet → Routed)              |                 |                                                          |
| 20  |     └── NotFound                   | 70              | ./src/pages/NotFound.tsx                                 |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 365             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|