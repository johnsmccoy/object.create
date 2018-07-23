// const financial = Object.create(null, {
//     conpany: {
//         value: "GreenGots",
//         enumerable: true,
//         writeable: true
//     },
   
//     speciality: {
//         value: "Goblins",
//         enumerable: true,
//         writeable: true
//     },

//     name: {
//         value: "Ginger Weasley",
//         enumerable: true,
//     },

//     portfolio: {
//         value: ["curse breaking", "breakingcurse", "survivingattack", "chickenfingers"],
//         enumerable: true,
//         writeable: false
//     },
    
//     worth: {
//         value: "",
//         enumerable: false,
//     },
    
// })


const advisor = Object.create(null, {
    company: 
    {
        value: "GreenGots",
        enumerable: true,
        writeable: true
    },

    specialty: {
        value: "Goblins",
        enumerable: true,
        writeable: true
    },

    name: {
        value: "Bill Weasley",
        enumerable: true,
    },

    portfolio:{
        value:[ 
            {
                symbol: "CBR",
                name: "Curse Breaking Inc",
                shares: 450,
                valuation: 34567891
            },
            {
                symbol: "FDE",
                name: "Fighting Death Eaters, LLC",
                shares: 231,
                valuation: 4563728
            },
            {
                symbol: "SWA",
                name: "Surviving a werewolf attack, LLC",
                shares: 798,
                valuation: 89000
            },
            {
                symbol: "WWW",
                name: "Weasley's Wizarding Wheezes Co.",
                shares: 2300,
                valuation: 1000000000
            }
        ],
        enumerable: false,
        writable: true
    },
    worth: {
        value: function (){
            let total = 0
        },
        enumerable: false
    },
    purchase: {
        value: function(symbol,name,quantity, price){
            advisor.portfolio.push({
                symbol: symbol,
                name: name,
                shares: quantity,
                valuation: price
            })

        },
        enumerable: false
    },
    sell: {
        value: function (symbol, name, quantity, price) {
            let portfolio = advisor.portfolio;
            for (let i = 0; i < portfolio.length; i++) {
                if (portfolio[i].symbol === symbol
                    && portfolio[i].name === name
                    && portfolio[i].shares === quantity
                    && portfolio[i].valuation === price){
                        console.log("got 1", i);
                         portfolio.splice([i])
                }
            }
        },
     enumerable: false
    }
    
});

advisor.purchase("SNUX", 1000, 300);
advisor.purchase("AAPL", 2000, 400);
console.log(advisor);
advisor.sell("SBUX", 1000, 300);
console.log(advisor)