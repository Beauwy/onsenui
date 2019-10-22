// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDpGGVZib9xCafbvGhoEj1T1-jJ0ptkab8",
    authDomain: "foodpj-9550d.firebaseapp.com",
    databaseURL: "https://foodpj-9550d.firebaseio.com",
    projectId: "foodpj-9550d",
    storageBucket: "foodpj-9550d.appspot.com",
    messagingSenderId: "603895277613",
    appId: "1:603895277613:web:e330f1b4fe8ad86b0870a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

document.addEventListener('init', function (event) {
  var page = event.target;


  if (page.id === 'homePage') {
    console.log("homePage");

    $("#thaibtn").click(function () {
      localStorage.setItem("selectedCategory", "thai");
      $("#content")[0].load("category.html");
    });

    $("#drinkbtn").click(function () {
      localStorage.setItem("selectedCategory", "drink");
      $("#content")[0].load("category.html");
    });

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("carousel").empty();
    db.collection("restaurant").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().rest_id}" class="recomended_item" onclick="">
            <img src="${doc.data().rest_url}" width="120" height="120"></div>
            <div class="recomended_item_title" id="item1_${doc.data().rest_id}">${doc.data().rest_name}</div>
        </ons-carousel-item>`
        $("#carousel").append(item);
      });
    });
  }

  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });
  }

  if (page.id === 'categoryPage') {
    var category = localStorage.getItem("selectedCategory");
    console.log("categoryPage:" + category);

    $("#header").html(category);

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#list").empty();
    db.collection("recommended").where("category", "==", category).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item = `<ons-row class="category">
                <ons-col modifier="nodivider">
                    <div class="category_header" style="background-image: url('${doc.data().photoUrl}')">
                        <figure class="category_thumbnail" id="thaibtn">
                            <div class="category_title" id="Category_1_name">${doc.data().name}</div>
                        </figure>
                    </div>
                </ons-col>
         </ons-row>`
        $("#list").append(item);
        console.log(doc.data().name);
        
      });
    });

  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }
});
