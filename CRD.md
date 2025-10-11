# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 47              | ./src/App.tsx                                            |
| 2   | ├── ProtectedRoute                 | 28              | ./src/components/ProtectedRoute.tsx                      |
| 3   | └── (Outlet → Routed)              |                 |                                                          |
| 4   |     ├── Index                      | 11              | ./src/pages/Index.tsx                                    |
| 5   |     ├── Login                      | 21              | ./src/pages/Login.tsx                                    |
| 6   |     │   └── useLogin               | 26              | ./src/hooks/Login/useLogin.ts                            |
| 7   |     │       └── AuthCard           | 53              | ./src/components/Login/AuthCard.tsx                      |
| 8   |     │           └── LoginForm      | 67              | ./src/components/Login/LoginForm.tsx                     |
| 9   |     ├── SignUp                     | 30              | ./src/pages/SignUp.tsx                                   |
| 10  |     │   └── SignUpForm             | 62              | ./src/components/SignUp/SignUpForm.tsx                   |
| 11  |     │       └── useAuthForm        | 35              | ./src/hooks/SignUp/useAuthForm.tsx                       |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 481             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|