class superHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = superHero;


// this lead to cathing
// module.exports = new superHero("batman")    
