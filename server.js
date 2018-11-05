var express = require('express');
var app = express();
const request = require('request');

var port = process.env.PORT || 8080;
app.use(express.static(__dirname));

app.get("/", function(req, res){

  var test_json = {
    "count": 24,
    "recipes": [
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/495802",
            "title": "Chicken cacciatore",
            "source_url": "http://www.bbcgoodfood.com/recipes/4251/chicken-cacciatore",
            "recipe_id": "495802",
            "image_url": "http://static.food2fork.com/4251_MEDIUM71f0.jpg",
            "social_rank": 99.99999994031722,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "A Spicy Perspective",
            "f2f_url": "http://food2fork.com/view/aa60ec",
            "title": "Butter Chicken Sliders with Pickled Mango Slaw",
            "source_url": "http://www.aspicyperspective.com/2013/03/butter-chicken-sliders-big-land-olakes-giveaway.html",
            "recipe_id": "aa60ec",
            "image_url": "http://static.food2fork.com/IMG_35501180x1803eee.jpg",
            "social_rank": 99.99888808120132,
            "publisher_url": "http://www.aspicyperspective.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/5052",
            "title": "Buffalo Chicken Chili",
            "source_url": "http://allrecipes.com/Recipe/Buffalo-Chicken-Chili/Detail.aspx",
            "recipe_id": "5052",
            "image_url": "http://static.food2fork.com/2028272b37.jpg",
            "social_rank": 94.58658353411347,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/7536",
            "title": "Chicken Tinga Tostados",
            "source_url": "http://allrecipes.com/Recipe/Chicken-Tinga-Tostados/Detail.aspx",
            "recipe_id": "7536",
            "image_url": "http://static.food2fork.com/858984337e.jpg",
            "social_rank": 88.4168442855139,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/b4eaa4",
            "title": "Chicken &amp; broccoli pasta bake",
            "source_url": "http://www.bbcgoodfood.com/recipes/1948/chicken-and-broccoli-pasta-bake",
            "recipe_id": "b4eaa4",
            "image_url": "http://static.food2fork.com/1948_MEDIUM8fbc.jpg",
            "social_rank": 87.255689704409,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/5f3b80",
            "title": "Sweet &amp; sour chicken &amp; veg",
            "source_url": "http://www.bbcgoodfood.com/recipes/1162660/sweet-and-sour-chicken-and-veg",
            "recipe_id": "5f3b80",
            "image_url": "http://static.food2fork.com/1162660_MEDIUMe96a.jpg",
            "social_rank": 85.55485980745388,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "Two Peas and Their Pod",
            "f2f_url": "http://food2fork.com/view/54546",
            "title": "BBQ Chicken Salad",
            "source_url": "http://www.twopeasandtheirpod.com/bbq-chicken-salad/",
            "recipe_id": "54546",
            "image_url": "http://static.food2fork.com/bbqchickensaladrecipeff5e.jpg",
            "social_rank": 50.98575586971927,
            "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
            "publisher": "Cookstr",
            "f2f_url": "http://food2fork.com/view/41861",
            "title": "Hungarian Chicken",
            "source_url": "http://www.cookstr.com/recipes/hungarian-chicken",
            "recipe_id": "41861",
            "image_url": "http://static.food2fork.com/recipe45848e73.jpg",
            "social_rank": 49.97787980428896,
            "publisher_url": "http://www.cookstr.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/2153dd",
            "title": "Pan-fried chicken with tomato &amp; olive sauce",
            "source_url": "http://www.bbcgoodfood.com/recipes/1577641/panfried-chicken-with-tomato-and-olive-sauce",
            "recipe_id": "2153dd",
            "image_url": "http://static.food2fork.com/1577641_MEDIUM7160.jpg",
            "social_rank": 45.324016858030845,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/c61475",
            "title": "Jambalaya",
            "source_url": "http://www.bbcgoodfood.com/recipes/6891/jambalaya-",
            "recipe_id": "c61475",
            "image_url": "http://static.food2fork.com/11937_medium1830.jpg",
            "social_rank": 41.30699021566346,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/5e6fed",
            "title": "Crock-Pot&#174; Chicken Chili",
            "source_url": "http://allrecipes.com/Recipe/Crock-Pot-Chicken-Chili/Detail.aspx",
            "recipe_id": "5e6fed",
            "image_url": "http://static.food2fork.com/96328187eb.jpg",
            "social_rank": 40.38275965826239,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "Framed Cooks",
            "f2f_url": "http://food2fork.com/view/73ccae",
            "title": "Chicken Parmigiana",
            "source_url": "http://www.framedcooks.com/2010/04/chicken-parmigiana.html",
            "recipe_id": "73ccae",
            "image_url": "http://static.food2fork.com/820217976_GF6W2M76b2.jpg",
            "social_rank": 40.269481599159086,
            "publisher_url": "http://framedcooks.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/273d29",
            "title": "Grilled chicken with spicy guacamole &amp; corn chips",
            "source_url": "http://www.bbcgoodfood.com/recipes/11239/grilled-chicken-with-spicy-guacamole-and-corn-chip",
            "recipe_id": "273d29",
            "image_url": "http://static.food2fork.com/11239_MEDIUMca8e.jpg",
            "social_rank": 39.364753686191456,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/300213",
            "title": "Dr. Lee's Red Wine Chicken Stew",
            "source_url": "http://www.epicurious.com/recipes/food/views/Dr-Lees-Red-Wine-Chicken-Stew-357010",
            "recipe_id": "300213",
            "image_url": "http://static.food2fork.com/35701098c2.jpg",
            "social_rank": 38.29241224243811,
            "publisher_url": "http://www.epicurious.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/62ae8b",
            "title": "Parmesan chicken with lemon courgettes",
            "source_url": "http://www.bbcgoodfood.com/recipes/4208/parmesan-chicken-with-lemon-courgettes",
            "recipe_id": "62ae8b",
            "image_url": "http://static.food2fork.com/4208_MEDIUM29e0.jpg",
            "social_rank": 36.088265538228484,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/36c08f",
            "title": "Stuffed Zucchini Boats with Meat",
            "source_url": "http://allrecipes.com/Recipe/Stuffed-Zucchini-Boats-With-Meat/Detail.aspx",
            "recipe_id": "36c08f",
            "image_url": "http://static.food2fork.com/1003624a519.jpg",
            "social_rank": 35.870031786361324,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/2ee49e",
            "title": "Thomato Chicken",
            "source_url": "http://www.bbcgoodfood.com/recipes/94602/thomato-chicken",
            "recipe_id": "2ee49e",
            "image_url": "http://static.food2fork.com/117031_mediume8ba.jpg",
            "social_rank": 35.349974841285395,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/18103",
            "title": "Kabsa",
            "source_url": "http://allrecipes.com/Recipe/Kabsa/Detail.aspx",
            "recipe_id": "18103",
            "image_url": "http://static.food2fork.com/9336060010.jpg",
            "social_rank": 34.97292728912428,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "What's Gaby Cooking",
            "f2f_url": "http://food2fork.com/view/3e6177",
            "title": "Grilled Cheese Month &amp; Smoky BBQ Chicken Grilled Cheese",
            "source_url": "http://whatsgabycooking.com/bbq-chicken-grilled-cheese/",
            "recipe_id": "3e6177",
            "image_url": "http://static.food2fork.com/IMG_179621024x6824dcc.jpg",
            "social_rank": 34.90320409565892,
            "publisher_url": "http://whatsgabycooking.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/29669",
            "title": "Southwest Garden Stew",
            "source_url": "http://allrecipes.com/Recipe/Southwest-Garden-Stew/Detail.aspx",
            "recipe_id": "29669",
            "image_url": "http://static.food2fork.com/8721462da.jpg",
            "social_rank": 34.87380013597463,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/283a71",
            "title": "Chicken Ragout  la Ana",
            "source_url": "http://www.bbcgoodfood.com/recipes/2057644/chicken-ragout-la-ana-",
            "recipe_id": "283a71",
            "image_url": "http://static.food2fork.com/1314125_medium8ecc.jpg",
            "social_rank": 34.80777735743579,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "Cookstr",
            "f2f_url": "http://food2fork.com/view/42473",
            "title": "Chicken and Seafood Stew with Coconut Milk and Nuts",
            "source_url": "http://www.cookstr.com/recipes/chicken-and-seafood-stew-with-coconut-milk-and-nuts",
            "recipe_id": "42473",
            "image_url": "http://static.food2fork.com/recipe4733ae43.jpg",
            "social_rank": 34.80777735743579,
            "publisher_url": "http://www.cookstr.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/e27f06",
            "title": "Barbecue Arbeque Chicken",
            "source_url": "http://www.bbcgoodfood.com/recipes/1428655/barbecue-arbeque-chicken-",
            "recipe_id": "e27f06",
            "image_url": "http://static.food2fork.com/929123_medium2470.jpg",
            "social_rank": 34.80777735743579,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "Cookstr",
            "f2f_url": "http://food2fork.com/view/6f387d",
            "title": "Caponata",
            "source_url": "http://www.cookstr.com/recipes/caponata-3",
            "recipe_id": "6f387d",
            "image_url": "http://static.food2fork.com/recipe15707e9fc.jpg",
            "social_rank": 34.80777735743579,
            "publisher_url": "http://www.cookstr.com"
        }
    ]
}

  res.send(test_json);
  console.log("APP RUNNING");
})

app.get("/get", function(req, res){
  var test = {
    "recipe": {
        "publisher": "A Spicy Perspective",
        "f2f_url": "http://food2fork.com/view/aa60ec",
        "ingredients": [
            "For the Slaw:",
            " cup hot water",
            " cup sugar",
            " cup white vinegar",
            "1 teaspoon salt",
            "1 firm ripe mango, peeled and cut julienne",
            "1 cup jicama, julienne",
            " cup radicchio, julienne",
            "For the Butter Chicken:",
            "2 half sticks Land O Lakes",
            "Salted Butter (",
            "1/2",
            "cup)",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "1  tbs. garam masala*",
            " tsp. cinnamon",
            "1 tsp. salt",
            "28-ounces can crushed tomatoes",
            "1  tablespoons tomato paste",
            "1  pounds chicken breasts (6 breasts)",
            " cup heavy cream",
            "24 small rolls, halved",
            "Cilantro leaves for garnish"
        ],
        "source_url": "http://www.aspicyperspective.com/2013/03/butter-chicken-sliders-big-land-olakes-giveaway.html",
        "recipe_id": "aa60ec",
        "image_url": "http://static.food2fork.com/IMG_35501180x1803eee.jpg",
        "social_rank": 99.99888808120132,
        "publisher_url": "http://www.aspicyperspective.com",
        "title": "Butter Chicken Sliders with Pickled Mango Slaw"
    }
}

  res.send(test)
})

app.get("/api/search", function(req, res){

  var api_key = "1e5917ecde2177374331c2ad9f6c2485";
  params = req.query.q;
  params = encodeURIComponent(params);
  var url = "https://www.food2fork.com/api/search?key=" + api_key + "&q=" + params + "&page=1";
  // console.log(url);
  request(url, {json: true}, (err, response, body) => {
    if(err){return console.log("error")}
    // console.log(req.query);
    // console.log(params);
    res.send(body);
  });
  //res.send("url");
  // console.log("APP RUNNING");
})

app.listen(port, function(){
  console.log("app running");
})
