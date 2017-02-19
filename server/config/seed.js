/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Menu = require('../api/menu/menu.model');
var Config = require('../api/config/config.model');
var Categorias = require('../api/categoria/categoria.model');
var SpecialToday = require('../api/specialtoday/specialtoday.model');

Categorias.find({}).remove(function(){
  Categorias.create({ident:["Entrantes","Ensaladas","Principales"]});
});

Menu.find({}).remove(function(){
  Menu.create({orden:1, dia:"Monday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]},
    {orden:2, dia:"Tuesday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]},
    {orden:3, dia:"Wednesday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]},
    {orden:4, dia:"Thursday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]},
    {orden:5, dia:"Friday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]},
    {orden:6, dia:"Saturday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]},
    {orden:7, dia:"Sunday",categorias:[{pos:0,ident:"Entrantes",menu:[{foto:1,name:"Crema de Queso",precio:2.00,descripcion:"muy bueno"},{foto:2,name:"Crema Aurora",precio:2.00,descripcion:"muy bueno"}]},{pos:1,ident:"Ensaladas",menu:[{foto:1,name:"Ensalada Verde",precio:1.00,descripcion:"Deliciosa ensaldad de lechuga con tomate queso."},{foto:2,name:"Ensalada de Pepino",precio:1.5,descripcion:"Deliciosa ensaldad de pepeno y sal pimentada."}]},{pos:2,ident:"Principales",menu:[{foto:1,name:"Rizoto de mar",precio:4.5,descripcion:"Delicioso rizoto con langosta, camarones y pescado de primera calidad.",special:true},{foto:2,name:"Rizoto de carne",precio:4.5,descripcion:"Delicioso rizoto con carne de res, cerdo, carnero y pollo.",special:true}]}]}
  );
});

Config.find({}).remove(function(){
  Config.create({logo:"Restaurantes",titulo:"Menu of the",comentario:"Seleccione los platos que más le guste",carrito_titulo:"Food to domicile",location:"Panorama #305 esq Tulipán municipio Plaza de la Revolución, La Habana, Cuba",opening:[{dias:"Lunes-Viernes",horas:"8am-11pm"},{dias:"Sábado-Domingo",horas:"10am-11pm"}],email:"larosanegra@gmail.com",phone:"5378819567"});
});

SpecialToday.find({}).remove(function(){
  SpecialToday.create({name:"Rizoto de Mar",precio:4.90},{name:"Rizoto de Carne",precio:5.00},{name:"Paella a la española",precio:6.00});
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
