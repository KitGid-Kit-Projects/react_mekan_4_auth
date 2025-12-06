# Component Relation Diagram (CRD) — Code Line Navigation Table

| No | Tree                               | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Code Lines STEP 4 | Code Lines STEP 5 | Path                                                     |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
| 01 | App.tsx                            | 40                | 44                | 53                | 50                | 48                | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         | 30                | 52                | 76                | 101               | 101               | ./src/context/AuthContext.tsx                            |
| 3  | |   └── firebase.js                | 20                | 20                | 20                | 20                | 20                | ./src/firbase.js                                         |
| 4  | |       └── .env                   | 7                 | 7                 | 7                 | 7                 | 7                 | ./.env                                                   |
| 03 | ├── ProtectedRoute                 |                   |                   | 21                |                   | 30                | ./src/components/ProtectedRoute.tsx                      |
| 04 | └── (Outlet → Routed)              |                   |                   |                   |                   |                   |                                                          |
| 05 |     ├── Index                      |                   |                   | 18                | 19                | 18                | ./src/pages/Index.tsx                                    |
| 06 |     ├── Login                      |                   |                   | 22                | 22                | 22                | ./src/pages/Login.tsx                                    |
| 07 |     │   └── useLogin               |                   |                   | 26                | 26                | 26                | ./src/hooks/Login/useLogin.ts                            |
| 08 |     │       └── AuthCard           |                   |                   | 61                | 68                | 62                | ./src/components/Login/AuthCard.tsx                      |
| 09 |     │           └── LoginForm      |                   |                   | 71                | 74                | 71                | ./src/components/Login/LoginForm.tsx                     |
| 10 |     ├── SignUp                     |                   |                   |                   | 37                | 37                | ./src/pages/SignUp.tsx                                   |
| 11 |     │   └── SignUpForm             |                   |                   |                   | 118               | 118               | ./src/components/SignUp/SignUpForm.tsx                   |
| 12 |     │       └── useAuthForm        |                   |                   |                   | 35                | 36                | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 13 |     ├── Dashboard                  |                   |                   |                   |                   | 45                | ./src/pages/Dashboard.tsx                                |
| 14 |     │   └── useDashboardData       |                   |                   |                   |                   | 29                | ./src/hooks/Dashboard/useDashboardData.ts                |
| 15 |     │       ├── AccountInfoCard    |                   |                   |                   |                   | 56                | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 16 |     │       ├── DashboardHeader    |                   |                   |                   |                   | 46                | ./src/components/Dashboard/DashboardHeader.tsx           |
| 17 |     │       ├── StatsSection       |                   |                   |                   |                   | 62                | ./src/components/Dashboard/StatsSection.tsx              |
| 18 |     │       └── WelcomeCard        |                   |                   |                   |                   | 57                | ./src/components/Dashboard/WelcomeCard.tsx               |
| 19 |     └── NotFound                   | 58                | 70                | 59                | 59                | 59                | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
|    |             TOTAL CODE LINES       | 155               | 181               | 414               | 657               | 950               |                                                          |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
