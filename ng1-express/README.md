This little project is designed to show some Angular, Express, EJS, Monk, Bootstrap CSS features.

### Angular features:
- bootstrap
- controller
- data-binding
- modeling (directive)
- filters

### Express features:

Express installed under EJS templating engine. The framework is designed to be a rich routing engine, however it lacks the controller conception. About the `controller` will talk in my other small projetc. For now this work shows:
- Registering dependecies, so they would be accesable via routes
- Use different type of routes (GET, POST) to distinct protocols (other servicing engines do not distinct this). 
- Get data in JSON
- Record data to database using Monk

### EJS features:

- Pass the data to template
- Inculde partial templates to maintain Layout conception

### Monk features:

- `Promises` in-buit DB abstraction engine

### Bootstrap CSS

- Simple templating engine designed to minimize css usage and ensure normalized cross-browsers behaviour


## Quick Start
```
git clone https://github.com/topday/tests

cd ng1-express/

npm install

npm start
```


##HOWTO initialize empty shell Angular1 and Express

install express as the project render and service 
```
npm install express express-generator
```

build project file structure with css 'sass' preprocess and 'ejs' templating engine
```
express -f -c sass -e #current default ejs version < 1. Many important features are not avilable yet.
```

install and store angular and the rest tool
```
npm install angular express express-generator jquery2 bootstrap mongodb monk --save
```


