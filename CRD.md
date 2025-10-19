# Component Relation Diagram (CRD)

| No | Tree                               | Lines | Path                                                     |
|----|------------------------------------|------:|----------------------------------------------------------|
| 01 | App.tsx                            |    77 | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         |   164 | ./src/context/AuthContext.tsx                            |
| 03 | |   ├── firebase.js                |    29 | ./src/firebase.js                                        |
| 04 | |       ├── .env                   |     6 | ./.env                                                   |
| 05 | └── (Outlet → Routed)              |       |                                                          |
| 06 |     ├── Index                      |    27 | ./src/pages/Index.tsx                                    |
| 07 |     ├── Login                      |    35 | ./src/pages/Login.tsx                                    |
| 08 |     │   └── useLogin               |    58 | ./src/hooks/Login/useLogin.ts                            |
| 09 |     │       └── AuthCard           |    91 | ./src/components/Login/AuthCard.tsx                      |
| 10 |     │           └── LoginForm      |    92 | ./src/components/Login/LoginForm.tsx                     |
| 11 |     ├── SignUp                     |    72 | ./src/pages/SignUp.tsx                                   |
| 12 |     │   └── SignUpForm             |   148 | ./src/components/SignUp/SignUpForm.tsx                   |
| 13 |     │       └── useAuthForm        |    76 | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 14 |     ├── Dashboard                  |    67 | ./src/pages/Dashboard.tsx                                |
| 15 |     │   └── useDashboardData       |    53 | ./src/hooks/Dashboard/useDashboardData.ts                |
| 16 |     │       ├── AccountInfoCard    |    78 | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 17 |     │       ├── DashboardHeader    |    74 | ./src/components/Dashboard/DashboardHeader.tsx           |
| 18 |     │       ├── StatsSection       |    86 | ./src/components/Dashboard/StatsSection.tsx              |
| 19 |     │       └── WelcomeCard        |    78 | ./src/components/Dashboard/WelcomeCard.tsx               |
| 20 |     └── NotFound                   |    70 | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------|----------------------------------------------------------|
|    |                 TOTAL CODE LINES   |  1381 |                                                          |
|----|------------------------------------|-------|----------------------------------------------------------|