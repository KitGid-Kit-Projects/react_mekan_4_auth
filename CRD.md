# Component Relation Diagram (CRD)

| No | Tree                               | Lines | Path                                                     |
|----|------------------------------------|-------|----------------------------------------------------------|
| 01 | App.tsx                            |    50 | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         |   101 | ./src/context/AuthContext.tsx                            |
| 03 | |   └── firebase.js                |    20 | ./src/firebase.js                                        |
| 04 | |       └── .env                   |     7 | ./.env                                                   |
| 05 | └── (Outlet → Routed)              |       |                                                          |
| 06 |     ├── Index                      |    19 | ./src/pages/Index.tsx                                    |
| 07 |     ├── Login                      |    22 | ./src/pages/Login.tsx                                    |
| 08 |     │   └── useLogin               |    26 | ./src/hooks/Login/useLogin.ts                            |
| 09 |     │       └── AuthCard           |    68 | ./src/components/Login/AuthCard.tsx                      |
| 10 |     │           └── LoginForm      |    74 | ./src/components/Login/LoginForm.tsx                     |
| 11 |     ├── SignUp                     |    55 | ./src/pages/SignUp.tsx                                   |
| 12 |     │   └── SignUpForm             |   121 | ./src/components/SignUp/SignUpForm.tsx                   |
| 13 |     │       └── useAuthForm        |    35 | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 14 |     └── NotFound                   |    59 | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------|----------------------------------------------------------|
|    |                 TOTAL CODE LINES   |   657 |                                                          |
|----|------------------------------------|-------|----------------------------------------------------------|