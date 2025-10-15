# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 47              | ./src/App.tsx                                            |
| 2   | ├── AuthProvider / useAuth         | 100             | ./src/context/AuthContext.tsx                            |
| 3   | ├── ProtectedRoute                 | 27              | ./src/components/ProtectedRoute.tsx                      |
| 4   | └── (Outlet → Routed)              |                 |                                                          |
| 5   |     ├── Index                      | 11              | ./src/pages/Index.tsx                                    |
| 6   |     ├── Login                      | 21              | ./src/pages/Login.tsx                                    |
| 7   |     │   └── useLogin               | 26              | ./src/hooks/Login/useLogin.ts                            |
| 8   |     │       └── AuthCard           | 53              | ./src/components/Login/AuthCard.tsx                      |
| 9   |     │           └── LoginForm      | 67              | ./src/components/Login/LoginForm.tsx                     |
| 10  |     ├── SignUp                     | 30              | ./src/pages/SignUp.tsx                                   |
| 11  |     │   └── SignUpForm             | 62              | ./src/components/SignUp/SignUpForm.tsx                   |
| 12  |     │       └── useAuthForm        | 35              | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 12  |     ├── Dashboard                  | 39              | ./src/pages/Dashboard.tsx                                |
| 13  |     │   └── useDashboardData       | 29              | ./src/hooks/Dashboard/useDashboardData.ts                |
| 14  |     │       ├── AccountInfoCard    | 46              | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 15  |     │       ├── DashboardHeader    | 42              | ./src/components/Dashboard/DashboardHeader.tsx           |
| 16  |     │       ├── StatsSection       | 59              | ./src/components/Dashboard/StatsSection.tsx              |
| 17  |     │       └── WelcomeCard        | 50              | ./src/components/Dashboard/WelcomeCard.tsx               |
| 18  |     └── NotFound                   | 46              | ./src/pages/NotFound.tsx                                 |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 790             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|