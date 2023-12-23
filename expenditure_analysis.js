function calculateTotalSpentByCategory(transactions) {
    let result = [];
    const abc = transactions.length;
    for(let i=0; i<abc; i++){
        let newObj = {
            category: transactions[i]["category"],
            totalSpent: transactions[i]["price"],
        }
        result.push(newObj);
    }
    return [result];
}

const transactions = [
    {id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
    },
    {id: 2,
		timestamp: 1656076800000,
		price: 30,
		category: 'Clothes',
		itemName: 'Pizza',
    },
    {id: 3,
		timestamp: 1656076800000,
		price: 20,
		category: 'Living',
		itemName: 'Pizza',
    },
    {id: 4,
		timestamp: 1656076800000,
		price: 60,
		category: 'Furniture',
		itemName: 'Pizza',
    },
]
let result = calculateTotalSpentByCategory(transactions)

console.log(result);
module.exports = calculateTotalSpentByCategory;