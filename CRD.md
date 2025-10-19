# Component Relation Diagram (CRD)

| No | Tree                               | Lines | Path                                                     |
|----|------------------------------------|-------|----------------------------------------------------------|
| 01 | App.tsx                            |    58 | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         |   164 | ./src/context/AuthContext.tsx                            |
| 03 | │   ├── firebase.js                |    29 | ./src/firbase.js                                         |
| 04 | │       └── .env                   |     6 | ./.env                                                   |
| 05 | ├── ProtectedRoute                 |    58 | ./src/components/ProtectedRoute.tsx                      |
| 06 | └── (Outlet → Routed)              |       |                                                          |
| 07 |     ├── Index                      |    24 | ./src/pages/Index.tsx                                    |
| 08 |     └── Login                      |    35 | ./src/pages/Login.tsx                                    |
| 09 |         └── useLogin               |    56 | ./src/hooks/Login/useLogin.ts                            |
| 10 |             └── AuthCard           |    83 | ./src/components/Login/AuthCard.tsx                      |
| 11 |                 └── LoginForm      |    87 | ./src/components/Login/LoginForm.tsx                     |
|----|------------------------------------|-------|----------------------------------------------------------|
|    |          TOTAL CODE LINES          |   600 |                                                          |
|----|------------------------------------|-------|----------------------------------------------------------|