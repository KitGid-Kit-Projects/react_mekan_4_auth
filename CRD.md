# Component Relation Diagram (CRD)

| No | Tree                               | Lines | Path                                                     |
|----|------------------------------------|-------|----------------------------------------------------------|
| 01 | App.tsx                            |    58 | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         |   164 | ./src/context/AuthContext.tsx                            |
| 03 | │   ├── firebase.js                |    29 | ./src/firbase.js                                         |
| 04 | │       └── .env                   |     6 | ./.env                                                   |
| 05 | └── (Outlet → Routed)              |       |                                                          |
| 06 |     ├── Index                      |    24 | ./src/pages/Index.tsx                                    |
| 07 |     ├── Login                      |    35 | ./src/pages/Login.tsx                                    |
| 08 |     │   └── useLogin               |    56 | ./src/hooks/Login/useLogin.ts                            |
| 09 |     │       └── AuthCard           |    83 | ./src/components/Login/AuthCard.tsx                      |
| 10 |     │           └── LoginForm      |    87 | ./src/components/Login/LoginForm.tsx                     |
| 11 |     ├── SignUp                     |    41 | ./src/pages/SignUp.tsx                                   |
| 12 |     │   └── SignUpForm             |   141 | ./src/components/SignUp/SignUpForm.tsx                   |
| 13 |     │       └── useAuthForm        |    72 | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 14 |     └── NotFound                   |    70 | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------|----------------------------------------------------------|
|    |                 TOTAL CODE LINES   |   796 |                                                          |
|----|------------------------------------|-------|----------------------------------------------------------|
