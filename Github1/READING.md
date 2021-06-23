### საკითხავი მასალები 📚

# Authentication API

### მისამართი: https://comm-auth.kapo.dev

#### Sign Up

- **path** :`/auth/signup`
- **body** :

```json
{
  "username": "kapo123",
  "firstName": "Giorgi",
  "lastName": "Kapanadze",
  "email": "kapo@kapo.dev",
  "password": "asfasfasfasfasfasf",
  "birthDate": "2021-06-17"
}
```

- ვალიდაციები
  - username
    - სტრინგი, 2-დან 26 სიმბოლომდე
  - firstName
    - სტრინგი, 2დან 51 სიმბოლომდე
  - lastName
    - სტრინგი, 2დან 51 სიმბოლომდე\
  - email
    - ვალიდური ელ-ფოსტა `@` და `.` სიმბოლოებით
  - password
    - სტრინგი 8 დან 31 სიმბოლომდე
  - birthDate
    - date სტრინგი

#### 🔔🔔🔔 `username` და `email` არის უნიკალური ველები ანუ ერთი და იგივე მნიშნველობით ვერ შექმნით რამდენიმე ექაუნთს

#### Sign In

- **path** :`/auth/signin`
- **body** :

```json
{
  "username": "kapo123",
  "password": "asfasfasfasfasfasf"
}
```

- ვალიდაციები
  - username
    - სტრინგი, 2-დან 26 სიმბოლომდე
  - password
    - სტრინგი 8 დან 31 სიმბოლომდე


### ლიმიტაცები

- 1 საათში შეგიძლიატ 150 მოთხოვნის გაშვება
- 1 საათში შეგიძლიათ 25 მომხარებლის რეგისტრაცია