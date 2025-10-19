# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 58              | ./src/App.tsx                                            |
| 2   | ├── AuthProvider / useAuth         | 164             | ./src/context/AuthContext.tsx                            |
| 3   | |   ├── firebase.js                | 29              | ./src/firbase.js                                         |
| 4   | |   └── .env                       | 6               | ./.env                                                   |
| 5   | ├── ProtectedRoute                 | 58              | ./src/components/ProtectedRoute.tsx                      |
| 6   | └── (Outlet → Routed)              |                 |                                                          |
| 7   |     ├── Index                      | 24              | ./src/pages/Index.tsx                                    |
| 8   |     ├── Login                      | 35              | ./src/pages/Login.tsx                                    |
| 9   |     │   └── useLogin               | 56              | ./src/hooks/Login/useLogin.ts                            |
| 10  |     │       └── AuthCard           | 83              | ./src/components/Login/AuthCard.tsx                      |
| 11  |     │           └── LoginForm      | 87              | ./src/components/Login/LoginForm.tsx                     |
| 12  |     ├── SignUp                     | 41              | ./src/pages/SignUp.tsx                                   |
| 13  |     │   └── SignUpForm             | 141             | ./src/components/SignUp/SignUpForm.tsx                   |
| 14  |     │       └── useAuthForm        | 72              | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 15  |     ├── Dashboard                  | 65              | ./src/pages/Dashboard.tsx                                |
| 16  |     │   └── useDashboardData       | 48              | ./src/hooks/Dashboard/useDashboardData.ts                |
| 17  |     │       ├── AccountInfoCard    | 71              | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 18  |     │       ├── DashboardHeader    | 65              | ./src/components/Dashboard/DashboardHeader.tsx           |
| 19  |     │       ├── StatsSection       | 88              | ./src/components/Dashboard/StatsSection.tsx              |
| 20  |     │       └── WelcomeCard        | 75              | ./src/components/Dashboard/WelcomeCard.tsx               |
| 21  |     └── NotFound                   | 50              | ./src/pages/NotFound.tsx                                 |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 1316            |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|