# Component Relation Diagram (CRD) — Code Line Navigation Table

| No | Tree                               | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Code Lines STEP 4 | Code Lines STEP 5 | Path                                                     |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
| 01 | App.tsx                            | 58                | 58                | 58                | 77                | 58                | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         | 164               | 164               | 164               | 164               | 164               | ./src/context/AuthContext.tsx                            |
| 3  | |   └── firebase.js                | 29                | 29                | 29                | 29                | 29                | ./src/firbase.js                                         |
| 4  | |       └── .env                   | 6                 | 6                 | 6                 | 6                 | 6                 | ./.env                                                   |
| 03 | ├── ProtectedRoute                 |                   |                   |                   |                   | 58                | ./src/components/ProtectedRoute.tsx                      |
| 04 | └── (Outlet → Routed)              |                   |                   |                   |                   |                   |                                                          |
| 05 |     ├── Index                      |                   | 24                | 24                | 27                | 24                | ./src/pages/Index.tsx                                    |
| 06 |     ├── Login                      |                   | 35                | 35                | 35                | 35                | ./src/pages/Login.tsx                                    |
| 07 |     │   └── useLogin               |                   | 56                | 56                | 58                | 56                | ./src/hooks/Login/useLogin.ts                            |
| 08 |     │       └── AuthCard           |                   | 83                | 83                | 91                | 83                | ./src/components/Login/AuthCard.tsx                      |
| 09 |     │           └── LoginForm      |                   | 87                | 87                | 92                | 87                | ./src/components/Login/LoginForm.tsx                     |
| 10 |     ├── SignUp                     |                   |                   | 41                | 72                | 41                | ./src/pages/SignUp.tsx                                   |
| 11 |     │   └── SignUpForm             |                   |                   | 141               | 148               | 141               | ./src/components/SignUp/SignUpForm.tsx                   |
| 12 |     │       └── useAuthForm        |                   |                   | 72                | 76                | 72                | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 13 |     ├── Dashboard                  |                   |                   |                   | 67                | 65                | ./src/pages/Dashboard.tsx                                |
| 14 |     │   └── useDashboardData       |                   |                   |                   | 53                | 48                | ./src/hooks/Dashboard/useDashboardData.ts                |
| 15 |     │       ├── AccountInfoCard    |                   |                   |                   | 78                | 71                | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 16 |     │       ├── DashboardHeader    |                   |                   |                   | 74                | 65                | ./src/components/Dashboard/DashboardHeader.tsx           |
| 17 |     │       ├── StatsSection       |                   |                   |                   | 86                | 88                | ./src/components/Dashboard/StatsSection.tsx              |
| 18 |     │       └── WelcomeCard        |                   |                   |                   | 78                | 75                | ./src/components/Dashboard/WelcomeCard.tsx               |
| 19 |     └── NotFound                   |                   |                   |                   | 70                | 50                | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
|    |             TOTAL CODE LINES       | 257               | 542               | 796               | 1323              | 1316              |                                                          |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|