# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 01  | App.tsx                            | 48              | ./src/App.tsx                                            |
| 02  | ├── AuthProvider / useAuth         | 101             | ./src/context/AuthContext.tsx                            |
| 03  | |   └── firebase.js                | 20              | ./src/firbase.js                                         |
| 04  | |       └── .env                   | 7               | ./.env                                                   |
| 05  | ├── ProtectedRoute                 | 30              | ./src/components/ProtectedRoute.tsx                      |
| 06  | └── (Outlet → Routed)              |                 |                                                          |
| 07  |     ├── Index                      | 18              | ./src/pages/Index.tsx                                    |
| 08  |     ├── Login                      | 22              | ./src/pages/Login.tsx                                    |
| 09  |     │   └── useLogin               | 26              | ./src/hooks/Login/useLogin.ts                            |
| 10  |     │       └── AuthCard           | 62              | ./src/components/Login/AuthCard.tsx                      |
| 11  |     │           └── LoginForm      | 71              | ./src/components/Login/LoginForm.tsx                     |
| 12  |     ├── SignUp                     | 37              | ./src/pages/SignUp.tsx                                   |
| 13  |     │   └── SignUpForm             | 118             | ./src/components/SignUp/SignUpForm.tsx                   |
| 14  |     │       └── useAuthForm        | 36              | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 15  |     ├── Dashboard                  | 45              | ./src/pages/Dashboard.tsx                                |
| 16  |     │   └── useDashboardData       | 29              | ./src/hooks/Dashboard/useDashboardData.ts                |
| 17  |     │       ├── AccountInfoCard    | 56              | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 18  |     │       ├── DashboardHeader    | 46              | ./src/components/Dashboard/DashboardHeader.tsx           |
| 19  |     │       ├── StatsSection       | 62              | ./src/components/Dashboard/StatsSection.tsx              |
| 20  |     │       └── WelcomeCard        | 57              | ./src/components/Dashboard/WelcomeCard.tsx               |
| 21  |     └── NotFound                   | 59              | ./src/pages/NotFound.tsx                                 |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 950             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|