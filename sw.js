self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('learntotypepwa').then(function(cache) {
            return cache.addAll([
                '/learntotype',
                '/learntotype/index.html',
                '/learntotype/words-en.js',
                '/learntotype/favicon.ico',
                '/learntotype/confetti.min.js',
                '/learntotype/sounds/bell.wav',
                '/learntotype/sounds/error.wav',
                '/learntotype/sounds/success.wav',
                '/learntotype/sounds/success2.wav',
                '/learntotype/emoji.json',
                '/learntotype/images-en/Animals/Alligator.svg',
'/learntotype/images-en/Animals/Ant.svg',
'/learntotype/images-en/Animals/Bat.svg',
'/learntotype/images-en/Animals/Bear.svg',
'/learntotype/images-en/Animals/Beetle.svg',
'/learntotype/images-en/Animals/Bird.svg',
'/learntotype/images-en/Animals/Bumblebee.svg',
'/learntotype/images-en/Animals/Butterfly.svg',
'/learntotype/images-en/Animals/Cat.svg',
'/learntotype/images-en/Animals/Chick.svg',
'/learntotype/images-en/Animals/Cricket.svg',
'/learntotype/images-en/Animals/Dinosaur.svg',
'/learntotype/images-en/Animals/Dog.svg',
'/learntotype/images-en/Animals/Dolphin.svg',
'/learntotype/images-en/Animals/Dragon.svg',
'/learntotype/images-en/Animals/Duck.svg',
'/learntotype/images-en/Animals/Fish.svg',
'/learntotype/images-en/Animals/Flamingo.svg',
'/learntotype/images-en/Animals/Fox.svg',
'/learntotype/images-en/Animals/Frog.svg',
'/learntotype/images-en/Animals/Gorilla.svg',
'/learntotype/images-en/Animals/Hamster.svg',
'/learntotype/images-en/Animals/Hedgehog.svg',
'/learntotype/images-en/Animals/Hippopotamus.svg',
'/learntotype/images-en/Animals/Insect.svg',
'/learntotype/images-en/Animals/Kangaroo.svg',
'/learntotype/images-en/Animals/Koala.svg',
'/learntotype/images-en/Animals/Lizard.svg',
'/learntotype/images-en/Animals/Monkey.svg',
'/learntotype/images-en/Animals/Mosquito.svg',
'/learntotype/images-en/Animals/Mouse.svg',
'/learntotype/images-en/Animals/Octopus.svg',
'/learntotype/images-en/Animals/Orangutan.svg',
'/learntotype/images-en/Animals/Otter.svg',
'/learntotype/images-en/Animals/Owl.svg',
'/learntotype/images-en/Animals/Panda.svg',
'/learntotype/images-en/Animals/Parrot.svg',
'/learntotype/images-en/Animals/Peacock.svg',
'/learntotype/images-en/Animals/Penguin.svg',
'/learntotype/images-en/Animals/Pigeon.svg',
'/learntotype/images-en/Animals/Poodle.svg',
'/learntotype/images-en/Animals/Pufferfish.svg',
'/learntotype/images-en/Animals/Rabbit.svg',
'/learntotype/images-en/Animals/Raccoon.svg',
'/learntotype/images-en/Animals/Rat.svg',
'/learntotype/images-en/Animals/Rooster.svg',
'/learntotype/images-en/Animals/Scorpion.svg',
'/learntotype/images-en/Animals/Shark.svg',
'/learntotype/images-en/Animals/Skunk.svg',
'/learntotype/images-en/Animals/Sloth.svg',
'/learntotype/images-en/Animals/Snail.svg',
'/learntotype/images-en/Animals/Snake.svg',
'/learntotype/images-en/Animals/Spider.svg',
'/learntotype/images-en/Animals/Squirrel.svg',
'/learntotype/images-en/Animals/Swan.svg',
'/learntotype/images-en/Animals/Tiger.svg',
'/learntotype/images-en/Animals/Turkey.svg',
'/learntotype/images-en/Animals/Turtle.svg',
'/learntotype/images-en/Animals/Vultures.svg',
'/learntotype/images-en/Animals/Whale.svg',
'/learntotype/images-en/Animals/Wolf.svg',
'/learntotype/images-en/Body/Boy.svg',
'/learntotype/images-en/Body/Ear.svg',
'/learntotype/images-en/Body/Eyes.svg',
'/learntotype/images-en/Body/Fist.svg',
'/learntotype/images-en/Body/Foot.svg',
'/learntotype/images-en/Body/Girl.svg',
'/learntotype/images-en/Body/Hand.svg',
'/learntotype/images-en/Body/Heart.svg',
'/learntotype/images-en/Body/Mouth.svg',
'/learntotype/images-en/Body/Muscle.svg',
'/learntotype/images-en/Body/Nose.svg',
'/learntotype/images-en/Body/Okay.svg',
'/learntotype/images-en/Body/Tooth.svg',
'/learntotype/images-en/Body/Woman.svg',
'/learntotype/images-en/Clothes/Bag.svg',
'/learntotype/images-en/Clothes/Ballet shoes.svg',
'/learntotype/images-en/Clothes/Binoculars.svg',
'/learntotype/images-en/Clothes/Coat.svg',
'/learntotype/images-en/Clothes/Crown.svg',
'/learntotype/images-en/Clothes/Dress.svg',
'/learntotype/images-en/Clothes/Flip flops.svg',
'/learntotype/images-en/Clothes/Glasses.svg',
'/learntotype/images-en/Clothes/Glove.svg',
'/learntotype/images-en/Clothes/Hat.svg',
'/learntotype/images-en/Clothes/Helmet.svg',
'/learntotype/images-en/Clothes/Jeans.svg',
'/learntotype/images-en/Clothes/Lipstick.svg',
"/learntotype/images-en/Clothes/Magician's hat.svg",
'/learntotype/images-en/Clothes/Pants.svg',
'/learntotype/images-en/Clothes/Purse.svg',
'/learntotype/images-en/Clothes/Ring.svg',
'/learntotype/images-en/Clothes/Running shoe.svg',
'/learntotype/images-en/Clothes/Scarf.svg',
'/learntotype/images-en/Clothes/School bag.svg',
'/learntotype/images-en/Clothes/Shoe.svg',
'/learntotype/images-en/Clothes/Snowman.svg',
'/learntotype/images-en/Clothes/Socks.svg',
'/learntotype/images-en/Clothes/Sunglasses.svg',
'/learntotype/images-en/Clothes/Underpants.svg',
'/learntotype/images-en/Clothes/Walking shoe.svg',
"/learntotype/images-en/Clothes/Woman's shoe.svg",
'/learntotype/images-en/Emotions/Afraid.svg',
'/learntotype/images-en/Emotions/Angry.svg',
'/learntotype/images-en/Emotions/Applause.svg',
'/learntotype/images-en/Emotions/Cold.svg',
'/learntotype/images-en/Emotions/Crying.svg',
'/learntotype/images-en/Emotions/Down.svg',
'/learntotype/images-en/Emotions/Forbidden.svg',
'/learntotype/images-en/Emotions/Handshake.svg',
'/learntotype/images-en/Emotions/Kiss.svg',
'/learntotype/images-en/Emotions/Left.svg',
'/learntotype/images-en/Emotions/Question mark.svg',
'/learntotype/images-en/Emotions/Right.svg',
'/learntotype/images-en/Emotions/Sick.svg',
'/learntotype/images-en/Emotions/Sleep.svg',
'/learntotype/images-en/Emotions/Sneeze.svg',
'/learntotype/images-en/Emotions/Surprised.svg',
'/learntotype/images-en/Emotions/Up.svg',
'/learntotype/images-en/Emotions/Warning.svg',
'/learntotype/images-en/Food/Apple.svg',
'/learntotype/images-en/Food/Avocado.svg',
'/learntotype/images-en/Food/Baguette.svg',
'/learntotype/images-en/Food/Banana.svg',
'/learntotype/images-en/Food/Beer.svg',
'/learntotype/images-en/Food/Bottle.svg',
'/learntotype/images-en/Food/Bowl.svg',
'/learntotype/images-en/Food/Bread.svg',
'/learntotype/images-en/Food/Broccoli.svg',
'/learntotype/images-en/Food/Burrito.svg',
'/learntotype/images-en/Food/Butter.svg',
'/learntotype/images-en/Food/Candy.svg',
'/learntotype/images-en/Food/Carrot.svg',
'/learntotype/images-en/Food/Champagne.svg',
'/learntotype/images-en/Food/Cheese.svg',
'/learntotype/images-en/Food/Cherries.svg',
'/learntotype/images-en/Food/Chestnuts.svg',
'/learntotype/images-en/Food/Chicken.svg',
'/learntotype/images-en/Food/Chocolate.svg',
'/learntotype/images-en/Food/Coconut.svg',
'/learntotype/images-en/Food/Coffee.svg',
'/learntotype/images-en/Food/Cookie.svg',
'/learntotype/images-en/Food/Corn.svg',
'/learntotype/images-en/Food/Croissant.svg',
'/learntotype/images-en/Food/Cucumber.svg',
'/learntotype/images-en/Food/Cupcake.svg',
'/learntotype/images-en/Food/Dessert.svg',
'/learntotype/images-en/Food/Doughnut.svg',
'/learntotype/images-en/Food/Drink.svg',
'/learntotype/images-en/Food/Egg.svg',
'/learntotype/images-en/Food/Eggplant.svg',
'/learntotype/images-en/Food/Falafel.svg',
'/learntotype/images-en/Food/Fried egg.svg',
'/learntotype/images-en/Food/Fries.svg',
'/learntotype/images-en/Food/Garlic.svg',
'/learntotype/images-en/Food/Grapes.svg',
'/learntotype/images-en/Food/Hamburger.svg',
'/learntotype/images-en/Food/Honey.svg',
'/learntotype/images-en/Food/Hot dog.svg',
'/learntotype/images-en/Food/Hot pepper.svg',
'/learntotype/images-en/Food/Ice cream.svg',
'/learntotype/images-en/Food/Juice.svg',
'/learntotype/images-en/Food/Kiwi.svg',
'/learntotype/images-en/Food/Knife and fork.svg',
'/learntotype/images-en/Food/Knife.svg',
'/learntotype/images-en/Food/Lemon.svg',
'/learntotype/images-en/Food/Lettuce.svg',
'/learntotype/images-en/Food/Mango.svg',
'/learntotype/images-en/Food/Meat.svg',
'/learntotype/images-en/Food/Melon.svg',
'/learntotype/images-en/Food/Milk.svg',
'/learntotype/images-en/Food/Onion.svg',
'/learntotype/images-en/Food/Orange.svg',
'/learntotype/images-en/Food/Pancake.svg',
'/learntotype/images-en/Food/Peach.svg',
'/learntotype/images-en/Food/Peanut.svg',
'/learntotype/images-en/Food/Pear.svg',
'/learntotype/images-en/Food/Pie.svg',
'/learntotype/images-en/Food/Pineapple.svg',
'/learntotype/images-en/Food/Pita.svg',
'/learntotype/images-en/Food/Pizza.svg',
'/learntotype/images-en/Food/Plate.svg',
'/learntotype/images-en/Food/Popcorn.svg',
'/learntotype/images-en/Food/Potato.svg',
'/learntotype/images-en/Food/Pretzels.svg',
'/learntotype/images-en/Food/Salad.svg',
'/learntotype/images-en/Food/Salt.svg',
'/learntotype/images-en/Food/Sandwich.svg',
'/learntotype/images-en/Food/Strawberry.svg',
'/learntotype/images-en/Food/Taco.svg',
'/learntotype/images-en/Food/Tea.svg',
'/learntotype/images-en/Food/Teaspoon.svg',
'/learntotype/images-en/Food/Tin can.svg',
'/learntotype/images-en/Food/Tomato.svg',
'/learntotype/images-en/Food/Waffle.svg',
'/learntotype/images-en/Food/Watermelon.svg',
'/learntotype/images-en/Food/Whiskey.svg',
'/learntotype/images-en/Food/Wine.svg',
'/learntotype/images-en/Home/Bathroom.svg',
'/learntotype/images-en/Home/Bed.svg',
'/learntotype/images-en/Home/Book.svg',
'/learntotype/images-en/Home/Books.svg',
'/learntotype/images-en/Home/Bricks.svg',
'/learntotype/images-en/Home/Candle.svg',
'/learntotype/images-en/Home/Chair.svg',
'/learntotype/images-en/Home/Computer.svg',
'/learntotype/images-en/Home/Disc.svg',
'/learntotype/images-en/Home/Door.svg',
'/learntotype/images-en/Home/Headphones.svg',
'/learntotype/images-en/Home/Image.svg',
'/learntotype/images-en/Home/Lamp.svg',
'/learntotype/images-en/Home/Lotion.svg',
'/learntotype/images-en/Home/Newspaper.svg',
'/learntotype/images-en/Home/Phone.svg',
'/learntotype/images-en/Home/Plug.svg',
'/learntotype/images-en/Home/Radio.svg',
'/learntotype/images-en/Home/Razor.svg',
'/learntotype/images-en/Home/Screen.svg',
'/learntotype/images-en/Home/Shower.svg',
'/learntotype/images-en/Home/Soap.svg',
'/learntotype/images-en/Home/Sofa.svg',
'/learntotype/images-en/Home/Sponge.svg',
'/learntotype/images-en/Home/Television.svg',
'/learntotype/images-en/Home/Toilet paper.svg',
'/learntotype/images-en/Home/Toilet.svg',
'/learntotype/images-en/Musical instruments/Accordion.svg',
'/learntotype/images-en/Musical instruments/Drum.svg',
'/learntotype/images-en/Musical instruments/French horn.svg',
'/learntotype/images-en/Musical instruments/Guitar.svg',
'/learntotype/images-en/Musical instruments/Saxophone.svg',
'/learntotype/images-en/Musical instruments/Trumpet.svg',
'/learntotype/images-en/Musical instruments/Violin.svg',
'/learntotype/images-en/Numbers/-100.svg',
'/learntotype/images-en/Numbers/0.svg',
'/learntotype/images-en/Numbers/1.svg',
'/learntotype/images-en/Numbers/10.svg',
'/learntotype/images-en/Numbers/100.svg',
'/learntotype/images-en/Numbers/11.svg',
'/learntotype/images-en/Numbers/12.svg',
'/learntotype/images-en/Numbers/13.svg',
'/learntotype/images-en/Numbers/14.svg',
'/learntotype/images-en/Numbers/15.svg',
'/learntotype/images-en/Numbers/16.svg',
'/learntotype/images-en/Numbers/17.svg',
'/learntotype/images-en/Numbers/18.svg',
'/learntotype/images-en/Numbers/19.svg',
'/learntotype/images-en/Numbers/2.svg',
'/learntotype/images-en/Numbers/20.svg',
'/learntotype/images-en/Numbers/3.svg',
'/learntotype/images-en/Numbers/30.svg',
'/learntotype/images-en/Numbers/4.svg',
'/learntotype/images-en/Numbers/40.svg',
'/learntotype/images-en/Numbers/5.svg',
'/learntotype/images-en/Numbers/50.svg',
'/learntotype/images-en/Numbers/6.svg',
'/learntotype/images-en/Numbers/60.svg',
'/learntotype/images-en/Numbers/7.svg',
'/learntotype/images-en/Numbers/70.svg',
'/learntotype/images-en/Numbers/8.svg',
'/learntotype/images-en/Numbers/80.svg',
'/learntotype/images-en/Numbers/9.svg',
'/learntotype/images-en/Numbers/90.svg',
'/learntotype/images-en/People/Astronaut.svg',
'/learntotype/images-en/People/Baby.svg',
'/learntotype/images-en/People/Bride.svg',
'/learntotype/images-en/People/Chef.svg',
'/learntotype/images-en/People/Clown.svg',
'/learntotype/images-en/People/Constructor.svg',
'/learntotype/images-en/People/Detective.svg',
'/learntotype/images-en/People/Doctor.svg',
'/learntotype/images-en/People/Draw.svg',
'/learntotype/images-en/People/Elf.svg',
'/learntotype/images-en/People/Farmer.svg',
'/learntotype/images-en/People/Fireman.svg',
'/learntotype/images-en/People/Genie.svg',
'/learntotype/images-en/People/Ghost.svg',
'/learntotype/images-en/People/Grandfather.svg',
'/learntotype/images-en/People/Grandmother.svg',
'/learntotype/images-en/People/Judge.svg',
'/learntotype/images-en/People/Lab technician.svg',
'/learntotype/images-en/People/Magician.svg',
'/learntotype/images-en/People/Mother.svg',
'/learntotype/images-en/People/Prince.svg',
'/learntotype/images-en/People/Princess.svg',
'/learntotype/images-en/People/Santa claus.svg',
'/learntotype/images-en/People/Teacher.svg',
'/learntotype/images-en/People/Vampire.svg',
'/learntotype/images-en/People/Welder.svg',
'/learntotype/images-en/Places/Castle.svg',
'/learntotype/images-en/Places/Church.svg',
'/learntotype/images-en/Places/Circus.svg',
'/learntotype/images-en/Places/Factory.svg',
'/learntotype/images-en/Places/Ferris wheel.svg',
'/learntotype/images-en/Places/Home.svg',
'/learntotype/images-en/Places/Hospital.svg',
'/learntotype/images-en/Places/Hut.svg',
'/learntotype/images-en/Places/Island.svg',
'/learntotype/images-en/Places/Mosque.svg',
'/learntotype/images-en/Places/Mountain.svg',
'/learntotype/images-en/Places/Office.svg',
'/learntotype/images-en/Places/Roller coaster.svg',
'/learntotype/images-en/Places/School.svg',
'/learntotype/images-en/Places/Shop.svg',
'/learntotype/images-en/Places/Stadium.svg',
'/learntotype/images-en/Places/Statue of liberty.svg',
'/learntotype/images-en/Places/Synagogue.svg',
'/learntotype/images-en/Places/Tent.svg',
'/learntotype/images-en/Places/Volcano.svg',
'/learntotype/images-en/Plants/Cactus.svg',
'/learntotype/images-en/Plants/Flower.svg',
'/learntotype/images-en/Plants/Flowers.svg',
'/learntotype/images-en/Plants/Hibiscus flower.svg',
'/learntotype/images-en/Plants/Leaf.svg',
'/learntotype/images-en/Plants/Maple leaf.svg',
'/learntotype/images-en/Plants/Mushroom.svg',
'/learntotype/images-en/Plants/Rose.svg',
'/learntotype/images-en/Plants/Sunflower.svg',
'/learntotype/images-en/Plants/Tree.svg',
'/learntotype/images-en/Plants/Tulip.svg',
'/learntotype/images-en/Sport/Baseball.svg',
'/learntotype/images-en/Sport/Basketball.svg',
'/learntotype/images-en/Sport/Bowling.svg',
'/learntotype/images-en/Sport/First place.svg',
'/learntotype/images-en/Sport/Football.svg',
'/learntotype/images-en/Sport/Gate.svg',
'/learntotype/images-en/Sport/Hockey.svg',
'/learntotype/images-en/Sport/Medal.svg',
'/learntotype/images-en/Sport/Ping pong.svg',
'/learntotype/images-en/Sport/Second place.svg',
'/learntotype/images-en/Sport/Tennis ball.svg',
'/learntotype/images-en/Sport/Third place.svg',
'/learntotype/images-en/Sport/Trophy.svg',
'/learntotype/images-en/Sport/Volleyball.svg',
'/learntotype/images-en/Stuff/Abacus.svg',
'/learntotype/images-en/Stuff/Anchor.svg',
'/learntotype/images-en/Stuff/Bacteria.svg',
'/learntotype/images-en/Stuff/Bags.svg',
'/learntotype/images-en/Stuff/Ball.svg',
'/learntotype/images-en/Stuff/Balloon.svg',
'/learntotype/images-en/Stuff/Barrel.svg',
'/learntotype/images-en/Stuff/Battery.svg',
'/learntotype/images-en/Stuff/Bell.svg',
'/learntotype/images-en/Stuff/Bomb.svg',
'/learntotype/images-en/Stuff/Bone.svg',
'/learntotype/images-en/Stuff/Bow tie.svg',
'/learntotype/images-en/Stuff/Chain.svg',
'/learntotype/images-en/Stuff/Cloud.svg',
'/learntotype/images-en/Stuff/Cobwebs.svg',
'/learntotype/images-en/Stuff/Coin.svg',
'/learntotype/images-en/Stuff/Diamond.svg',
'/learntotype/images-en/Stuff/Drop.svg',
'/learntotype/images-en/Stuff/Earth.svg',
'/learntotype/images-en/Stuff/Explosion.svg',
'/learntotype/images-en/Stuff/Fire.svg',
'/learntotype/images-en/Stuff/Fireworks.svg',
'/learntotype/images-en/Stuff/Fountain.svg',
'/learntotype/images-en/Stuff/Full moon.svg',
'/learntotype/images-en/Stuff/Ice.svg',
'/learntotype/images-en/Stuff/Lightning.svg',
'/learntotype/images-en/Stuff/Log.svg',
'/learntotype/images-en/Stuff/Map.svg',
'/learntotype/images-en/Stuff/Meteor.svg',
'/learntotype/images-en/Stuff/Money.svg',
'/learntotype/images-en/Stuff/Moon.svg',
'/learntotype/images-en/Stuff/Page.svg',
'/learntotype/images-en/Stuff/Parachute.svg',
'/learntotype/images-en/Stuff/Projector.svg',
'/learntotype/images-en/Stuff/Receipt.svg',
'/learntotype/images-en/Stuff/Scales.svg',
'/learntotype/images-en/Stuff/Scroll.svg',
'/learntotype/images-en/Stuff/Shell.svg',
'/learntotype/images-en/Stuff/Shopping cart.svg',
'/learntotype/images-en/Stuff/Siren.svg',
'/learntotype/images-en/Stuff/Snowflake.svg',
'/learntotype/images-en/Stuff/Star.svg',
'/learntotype/images-en/Stuff/Stone.svg',
'/learntotype/images-en/Stuff/Stopwatch.svg',
'/learntotype/images-en/Stuff/Suitcase.svg',
'/learntotype/images-en/Stuff/Tornado.svg',
'/learntotype/images-en/Stuff/Traffic lights.svg',
'/learntotype/images-en/Tools/Alarm clock.svg',
'/learntotype/images-en/Tools/Axe.svg',
'/learntotype/images-en/Tools/Basket.svg',
'/learntotype/images-en/Tools/Bow and arrow.svg',
'/learntotype/images-en/Tools/Broom.svg',
'/learntotype/images-en/Tools/Camera.svg',
'/learntotype/images-en/Tools/Colors.svg',
'/learntotype/images-en/Tools/Compass.svg',
'/learntotype/images-en/Tools/Dagger.svg',
'/learntotype/images-en/Tools/Fire extinguisher.svg',
'/learntotype/images-en/Tools/Flashlight.svg',
'/learntotype/images-en/Tools/Hammer.svg',
'/learntotype/images-en/Tools/Hourglass.svg',
'/learntotype/images-en/Tools/Jug.svg',
'/learntotype/images-en/Tools/Key.svg',
'/learntotype/images-en/Tools/Lock.svg',
'/learntotype/images-en/Tools/Magnet.svg',
'/learntotype/images-en/Tools/Magnifying glass.svg',
'/learntotype/images-en/Tools/Megaphone.svg',
'/learntotype/images-en/Tools/Microphone.svg',
'/learntotype/images-en/Tools/Pick.svg',
'/learntotype/images-en/Tools/Plaster.svg',
'/learntotype/images-en/Tools/Printer.svg',
'/learntotype/images-en/Tools/Safety pin.svg',
'/learntotype/images-en/Tools/Shield.svg',
'/learntotype/images-en/Tools/Stethoscope.svg',
'/learntotype/images-en/Tools/Swords.svg',
'/learntotype/images-en/Tools/Syringe.svg',
'/learntotype/images-en/Tools/Test tube.svg',
'/learntotype/images-en/Tools/Thermometer.svg',
'/learntotype/images-en/Tools/Toolbox.svg',
'/learntotype/images-en/Tools/Umbrella.svg',
'/learntotype/images-en/Tools/Vest.svg',
'/learntotype/images-en/Tools/Watch.svg',
'/learntotype/images-en/Tools/Wire.svg',
'/learntotype/images-en/Tools/Wrench.svg',
'/learntotype/images-en/Transportation/Airplane.svg',
'/learntotype/images-en/Transportation/Ambulance.svg',
'/learntotype/images-en/Transportation/Bicycle.svg',
'/learntotype/images-en/Transportation/Boat.svg',
'/learntotype/images-en/Transportation/Bus.svg',
'/learntotype/images-en/Transportation/Cab.svg',
'/learntotype/images-en/Transportation/Canoe.svg',
'/learntotype/images-en/Transportation/Car.svg',
'/learntotype/images-en/Transportation/Fire truck.svg',
'/learntotype/images-en/Transportation/Fuel.svg',
'/learntotype/images-en/Transportation/Locomotive.svg',
'/learntotype/images-en/Transportation/Moped.svg',
'/learntotype/images-en/Transportation/Motorcycle.svg',
'/learntotype/images-en/Transportation/Plane.svg',
'/learntotype/images-en/Transportation/Police car.svg',
'/learntotype/images-en/Transportation/Race car.svg',
'/learntotype/images-en/Transportation/Sailboat.svg',
'/learntotype/images-en/Transportation/Scooter.svg',
'/learntotype/images-en/Transportation/Skateboard.svg',
'/learntotype/images-en/Transportation/Speedboat.svg',
'/learntotype/images-en/Transportation/Tractor.svg',
'/learntotype/images-en/Transportation/Truck.svg',
'/learntotype/images-en/Transportation/Wheelchair.svg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});