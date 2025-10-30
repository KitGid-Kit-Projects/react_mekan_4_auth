# Component Relation Diagram (CRD)

| No | Tree                               | Lines | Path                                                     |
|----|------------------------------------|-------|----------------------------------------------------------|
| 01 | App.tsx                            |    50 | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         |    52 | ./src/context/AuthContext.tsx                            |
| 03 | │   └── firebase.js                |     29 | ./src/firebase.js                                       |
| 04 | │       └── .env                   |     6 | ./.env                                                   |
| 05 | └── (Outlet → Routed)              |       |                                                          |
| 06 |     ├── Index                      |    21 | ./src/pages/Index.tsx                                    |
| 07 |     └── Login                      |    23 | ./src/pages/Login.tsx                                    |
| 08 |         └── useLogin               |    26 | ./src/hooks/Login/useLogin.ts                            |
| 09 |             └── AuthCard           |    66 | ./src/components/Login/AuthCard.tsx                      |
| 10 |                 └── LoginForm      |    72 | ./src/components/Login/LoginForm.tsx                     |
|----|------------------------------------|-------|----------------------------------------------------------|
|    |          TOTAL CODE LINES          |   345 |                                                          |
|----|------------------------------------|-------|----------------------------------------------------------|