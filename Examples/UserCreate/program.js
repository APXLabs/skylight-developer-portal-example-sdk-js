Skylight.Init();
//@skydocs.start(users.create)
//Version 1.0.2 of the JS SDK
var user = new User("Taylor", "Korpa");
//Alternative: var user = new User("Taylor", "Korpa", "taylor.korpa")
Skylight.CreateNewUser(user);
//@skydocs.end()