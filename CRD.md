# Component Relation Diagram (CRD)

| No | Tree                               | Lines | Path                                                     |
|----|------------------------------------|-------|----------------------------------------------------------|
| 01 | App.tsx                            |    53 | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         |    76 | ./src/context/AuthContext.tsx                            |
| 03 | │   └── firebase.js                |    20 | ./src/firebase.js                                        |
| 04 | │       └── .env                   |     7 | ./.env                                                   |
| 05 | └── (Outlet → Routed)              |       |                                                          |
| 06 |     ├── Index                      |    18 | ./src/pages/Index.tsx                                    |
| 07 |     ├── Login                      |    22 | ./src/pages/Login.tsx                                    |
| 08 |     │   └── useLogin               |    26 | ./src/hooks/Login/useLogin.ts                            |
| 09 |     │       └── AuthCard           |    61 | ./src/components/Login/AuthCard.tsx                      |
| 10 |     │           └── LoginForm      |    71 | ./src/components/Login/LoginForm.tsx                     |
| 11 |     └── NotFound                   |    59 | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------|----------------------------------------------------------|
|    |                 TOTAL CODE LINES   |   413 |                                                          |
|----|------------------------------------|-------|----------------------------------------------------------|
