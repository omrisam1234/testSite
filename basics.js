var car = {
    type:"hunch", 
    age:11, 
    color: "red",
    desc: function(){
        return "type: " + this.type + "<br>age: " + this.age + "<br>color:" + this.color;
    }
}

var cards=['first','second','third']

createCards = function(){

        var newElem = document.createElement("div");
        newElem.className="card"
        newElem.innerHTML= 'hello';
        document.getElementById("contain").appendChild(newElem);
    
    
}



