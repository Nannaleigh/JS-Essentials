/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const bag = {
    name: "Sherlock Holmes Bag",
    volume: 15,
    color: "brown",
    pocketNum: 4,
    strapLength: 36,
    bagSecured: false,
    toggleLock: function(status) {
        this.bagSecured = status;
    }
}

console.log(bag);

const box = {
    numOfItems: 5,
    typesOfItems: 6,
    isReusable: true,
    toggleUse: function(status) {
        this.isReusable = status
    }
}
box.toggleUse(false)
console.log(box.isReusable)