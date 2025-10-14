# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 47              | ./src/App.tsx                                            |
| 2   | ├── AuthProvider / useAuth         | 101             | ./src/context/AuthContext.tsx                            |
| 4   | └── (Outlet → Routed)              |                 |                                                          |
| 5   |     ├── Index                      | 11              | ./src/pages/Index.tsx                                    |
| 6   |     ├── Login                      | 21              | ./src/pages/Login.tsx                                    |
| 7   |     │   ├── useLogin               | 26              | ./src/hooks/Login/useLogin.ts                            |
| 8   |     │   └── AuthCard               | 53              | ./src/components/Login/AuthCard.tsx                      |
| 9   |     │       └── LoginForm          | 67              | ./src/components/Login/LoginForm.tsx                     |
| 10  |     └── SignUp                     | 30              | ./src/pages/SignUp.tsx                                   |
| 11  |         └── SignUpForm             | 62              | ./src/components/SignUp/SignUpForm.tsx                   |
| 12  |             └── useAuthForm        | 35              | ./src/hooks/SignUp/useAuthForm.tsx                       |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 792             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|