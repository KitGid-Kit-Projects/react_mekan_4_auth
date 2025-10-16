# Component Relation Diagram (CRD) — Code Line Navigation Table

| No | Tree                               | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Code Lines STEP 4 | Code Lines STEP 5 | Path                                                     |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
| 01 | App.tsx                            | 37                | 43                | 43                | 44                | 47                | ./src/App.tsx                                            |
| 02 | ├── AuthProvider / useAuth         | 29                | 50                | 68                | 100               | 100               | ./src/context/AuthContext.tsx                            |
| 03 | ├── ProtectedRoute                 |                   |                   |                   |                   | 27                | ./src/components/ProtectedRoute.tsx                      |
| 04 | └── (Outlet → Routed)              |                   |                   |                   |                   |                   |                                                          |
| 05 |     ├── Index                      | 11                | 11                | 11                | 11                | 11                | ./src/pages/Index.tsx                                    |
| 06 |     ├── Login                      | 21                | 21                | 21                | 21                | 21                | ./src/pages/Login.tsx                                    |
| 07 |     │   └── useLogin               | 24                | 26                | 26                | 26                | 26                | ./src/hooks/Login/useLogin.ts                            |
| 08 |     │       └── AuthCard           | 53                | 53                | 53                | 53                | 53                | ./src/components/Login/AuthCard.tsx                      |
| 09 |     │           └── LoginForm      | 67                | 67                | 67                | 67                | 67                | ./src/components/Login/LoginForm.tsx                     |
| 10 |     ├── SignUp                     | 30                | 30                | 30                | 30                | 30                | ./src/pages/SignUp.tsx                                   |
| 11 |     │   └── SignUpForm             | 62                | 62                | 62                | 62                | 62                | ./src/components/SignUp/SignUpForm.tsx                   |
| 12 |     │       └── useAuthForm        | 31                | 34                | 35                | 35                | 35                | ./src/hooks/SignUp/useAuthForm.tsx                       |
| 13 |     ├── Dashboard                  |                   |                   |                   | 39                | 39                | ./src/pages/Dashboard.tsx                                |
| 14 |     │   └── useDashboardData       |                   |                   |                   | 29                | 29                | ./src/hooks/Dashboard/useDashboardData.ts                |
| 15 |     │       ├── AccountInfoCard    |                   |                   |                   | 46                | 46                | ./src/components/Dashboard/AccountInfoCard.tsx           |
| 16 |     │       ├── DashboardHeader    |                   |                   |                   | 42                | 42                | ./src/components/Dashboard/DashboardHeader.tsx           |
| 17 |     │       ├── StatsSection       |                   |                   |                   | 59                | 59                | ./src/components/Dashboard/StatsSection.tsx              |
| 18 |     │       └── WelcomeCard        |                   |                   |                   | 50                | 50                | ./src/components/Dashboard/WelcomeCard.tsx               |
| 19 |     └── NotFound                   |                   |                   |                   | 46                | 46                | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
|    |             TOTAL CODE LINES       | 365               | 397               | 416               | 760               | 790               |                                                          |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
