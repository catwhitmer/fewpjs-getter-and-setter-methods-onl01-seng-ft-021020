class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter () {
    this.radius * 2
 }

  get circumference() {
    Math.PI *(this.radius + this.radius)
  } 

  get area() {
    (Math.PI * (this.radius ** 2))
  }

  set diameter(diameter) {
 
  }

  set circumference(circumference) {
   
  } 

  set area(area) {
 
  }
}

