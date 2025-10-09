# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 53              | ./src/App.tsx                                            |
| 2   | ├── AuthProvider / useAuth         | 130             | ./src/context/AuthContext.tsx                            |
| 3   | ├── ProtectedRoute                 | 36              | ./src/components/ProtectedRoute.tsx                      |
| 4   | └── (Outlet → Routed)              |                 |                                                          |
| 5   |     ├── Index                      | 14              | ./src/pages/Index.tsx                                    |
| 6   |     ├── Login                      | 25              | ./src/pages/Login.tsx                                    |
| 7   |     │   └── useLogin               | 33              | ./src/hooks/Login/useLogin.ts                            |
| 8   |     │       └── AuthCard           | 60              | ./src/components/Login/AuthCard.tsx                      |
| 9   |     │           └── LoginForm      | 73              | ./src/components/Login/LoginForm.tsx                     |
| 10  |     ├── SignUp                     | 35              | ./src/pages/SignUp.tsx                                   |
| 11  |     │   └── SignUpForm             | 71              | ./src/components/SignUp/SignUpForm.tsx                   |
| 12  |     │       └── useAuthForm        | 42              | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 13  |     ├── Dashboard                  | 45              | ./src/pages/Dashboard.tsx                                |
| 14  |     │   └── useDashboardData       | 35              | ./src/hooks/Dashboard/useDashboardData.ts                |
| 15  |     │       ├── AccountInfoCard    | 50              | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 16  |     │       ├── DashboardHeader    | 47              | ./src/components/Dashboard/DashboardHeader.tsx           |
| 17  |     │       ├── StatsSection       | 64              | ./src/components/Dashboard/StatsSection.tsx              |
| 18  |     │       └── WelcomeCard        | 54              | ./src/components/Dashboard/WelcomeCard.tsx               |
| 19  |     └── NotFound                   | 50              | ./src/pages/NotFound.tsx                                 |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 917             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|