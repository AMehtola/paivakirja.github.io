var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').classname;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    };
    
    //changin class name, yea
    document.getElementById('cool').className = 'cool red';
}
var sayMyName = function (name) {
    alert('My name is: '+name);
}


var car = {
    make: 'VW',
    type: 'Polo',
    color: 'Blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats:  [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4',
        'seat 5'
        ],
        turOn: function () {
            this.isTurnedOn = true;
        },
        fly: function () {
            alert ('fly');
        },
        switchCar: function (isOn) {
            console.log('turn car '+isOn);
            if (isOn == true) {
                this.isTurnedOn = true;
            } else {
                this.isTurnedOn = false;
            }
            
        }
    };


console.log('hello there');
