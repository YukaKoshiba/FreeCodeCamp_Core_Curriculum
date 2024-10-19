let price = 19.5;
let cid = [
  ['PENNY', 1], 
  ['NICKEL', 0], 
  ['DIME', 0], 
  ['QUARTER', 0], 
  ['ONE', 0], 
  ['FIVE', 0], 
  ['TEN', 0], 
  ['TWENTY', 0], 
  ['ONE HUNDRED', 0]
];
console.log(cid);

// Reset #change-due
const resetChangeDue = (changeHundred, changeTwenty, changeTen, changeFive, changeOne, changeQuarter, changeDime, changeNickel, changePenny) => {

  changeHundred.innerHTML = '';
  changeTwenty.innerHTML = '';
  changeTen.innerHTML = '';
  changeFive.innerHTML = '';
  changeOne.innerHTML = '';
  changeQuarter.innerHTML = '';
  changeDime.innerHTML = '';
  changeNickel.innerHTML = '';
  changePenny.innerHTML = '';
};

// Check register cash's count
const checkRegister = (availableCid) => {
  console.log("availableCid",availableCid);

  const hundredIndex = availableCid.findIndex(coin => coin[0] === 'ONE HUNDRED');
  const twentyIndex = availableCid.findIndex(coin => coin[0] === 'TWENTY');
  const tenIndex = availableCid.findIndex(coin => coin[0] === 'TEN');
  const fiveIndex = availableCid.findIndex(coin => coin[0] === 'FIVE');
  const oneIndex = availableCid.findIndex(coin => coin[0] === 'ONE');
  const quarterIndex = availableCid.findIndex(coin => coin[0] === 'QUARTER');
  const dimeIndex = availableCid.findIndex(coin => coin[0] === 'DIME');
  const nickelIndex = availableCid.findIndex(coin => coin[0] === 'NICKEL');
  const pennyIndex = availableCid.findIndex(coin => coin[0] === 'PENNY');

  // Now you can access the coin name using index 0
  const hundred = availableCid[hundredIndex][1];
  const twenty = availableCid[twentyIndex][1];
  const ten = availableCid[tenIndex][1];
  const five = availableCid[fiveIndex][1];
  const one = availableCid[oneIndex][1];
  const quarter = availableCid[quarterIndex][1];
  const dime = availableCid[dimeIndex][1];
  const nickel = availableCid[nickelIndex][1];
  const penny = availableCid[pennyIndex][1];

  return {
    hundred,
    twenty,
    ten,
    five,
    one,
    quarter,
    dime,
    nickel,
    penny
  };
};

// Check coin pattern
const checkCoinPattern = (availableCid, difference) => {
  let cashStock = checkRegister(availableCid);
console.log("cashStock",cashStock);

  let numHundred = 0;
  let numTwenty = 0;
  let numTen = 0;
  let numFive = 0;
  let numOne = 0;
  let numQuarter = 0;
  let numDime = 0;
  let numNickel = 0;
  let numPenny = 0;
  let leftHundred = cashStock.hundred;
  let leftTwenty = cashStock.twenty;
  let leftTen = cashStock.ten;
  let leftFive = cashStock.five;
  let leftOne = cashStock.one;
  let leftQuarter = cashStock.quarter;
  let leftDime = cashStock.dime;
  let leftNickel = cashStock.nickel;
  let leftPenny = cashStock.penny;
  let changeFlg = false;

  // Calc cash
  if (difference >= 10000 && cashStock.hundred >= 10000) {
    if (difference <= cashStock.hundred) {
      numHundred = Math.floor(difference / 10000) * 10000;
    } else {
      numHundred = cashStock.hundred;
    }
      difference = difference - numHundred;
      leftHundred = cashStock.hundred - numHundred;
    }

    if (difference >= 2000 && cashStock.twenty >= 2000) {
      if (difference <= cashStock.twenty) {
        numTwenty = Math.floor(difference / 2000) * 2000;
      } else {
        numTwenty = cashStock.twenty;
      }
        difference = difference - numTwenty;
        leftTwenty = cashStock.twenty - numTwenty; 
    }

    if (difference >= 1000 && cashStock.ten >= 1000) {
      if (difference <= cashStock.ten) {
        numTen = Math.floor(difference / 1000) * 1000;
      } else {
        numTen = cashStock.ten;
      }
      difference = difference - numTen;
      leftTen = cashStock.ten - numTen;
    }

    if (difference >= 500 && cashStock.five >= 500) {
      if (difference <= cashStock.five) {
        numFive = Math.floor(difference / 500) * 500;
      } else {
        numFive = cashStock.five;
      }
        difference = difference - numFive;
        leftFive = cashStock.five - numFive;
      }
      
      if (difference >= 100 && cashStock.one >= 100) {
        if (difference <= cashStock.one) {
            numOne = Math.floor(difference / 100) * 100;
        } else {
          numOne = cashStock.one ;
        }
          difference = difference - numOne;
          leftOne = cashStock.one - numOne;
        }

        if (difference >= 25 && cashStock.quarter >= 25) {
          if (difference <= cashStock.quarter) {
            numQuarter = Math.floor(difference / 25) * 25;
          } else {
            numQuarter = cashStock.quarter;
          }
          difference = difference - numQuarter;
          leftQuarter = cashStock.quarter - numQuarter;
        }

        if (difference >= 10 && cashStock.dime >= 10) {
          if (difference <= cashStock.dime) {
            numDime = Math.floor(difference / 10) * 10;
          } else {
              numDime = cashStock.dime;
          }
          difference = difference - numDime;
          leftDime = cashStock.dime - numDime;
        }

        if (difference >= 5 && cashStock.nickel >= 5) {
          if (difference <= cashStock.nickel) {
              numNickel = Math.floor(difference / 5) * 5;
          } else {
            numNickel = cashStock.nickel;
          }
          difference = difference - numNickel;
          leftNickel = cashStock.nickel - numNickel
        }

        if (difference >= 1 && cashStock.penny >= 1) {
          if (difference <= cashStock.penny) {
            numPenny = difference;
          } else {
            numPenny = cashStock.penny;
          }
          difference = difference - numPenny;
          leftPenny = cashStock.penny - numPenny;
        }

console.log("残りのおつり￠",difference);
        
        if (difference > 0) {
          changeFlg = false;
        } else {
          changeFlg = true;
        }

        return {
        numHundred,
        numTwenty,
        numTen,
        numFive,
        numOne,
        numQuarter,
        numDime,
        numNickel,
        numPenny,
        leftHundred,
        leftTwenty,
        leftTen,
        leftFive,
        leftOne,
        leftQuarter,
        leftDime,
        leftNickel,
        leftPenny,
        changeFlg
      };
};

window.onload = function() {
  let purchaseBtnCount = 0;
  let availableCid = [];
  let totalCid = 0;

  // get HTMl elements
  const changeStatus = document.getElementById('change-status');
  const changeHundred = document.getElementById('change-hundred');
  const changeTwenty = document.getElementById('change-twenty');
  const changeTen = document.getElementById('change-ten')
  const changeFive = document.getElementById('change-five');
  const changeOne = document.getElementById('change-one');
  const changeQuarter = document.getElementById('change-quarter');
  const changeDime = document.getElementById('change-dime');
  const changeNickel = document.getElementById('change-nickel');
  const changePenny = document.getElementById('change-penny');

  const cash = document.getElementById('cash');

  const purchaseBtn = document.getElementById('purchase-btn');
  const priceElement = document.getElementById('price');
  const drawerPennies = document.getElementById('drawer-pennies');
  const drawerNickels = document.getElementById('drawer-nickels');
  const drawerDimes = document.getElementById('drawer-dimes');
  const drawerQuarters = document.getElementById('drawer-quarters');
  const drawerOnes = document.getElementById('drawer-ones');
  const drawerFives = document.getElementById('drawer-fives');
  const drawerTens = document.getElementById('drawer-tens');
  const drawerTwenties = document.getElementById('drawer-twenties');
  const drawerHundreds = document.getElementById('drawer-hundreds');

  // Display price
  priceElement.innerHTML = `<p>Price: $${price}</p>`;

  // Display drawer
  const penny = cid.find(coin => coin[0] === 'PENNY');
drawerPennies.innerHTML = `<p>Pennies: $${penny[1]}</p>`;
  const nickel = cid.find(coin => coin[0] === 'NICKEL');
drawerNickels.innerHTML = `<p>Nickels: $${nickel[1]}</p>`;
  const dime = cid.find(coin => coin[0] === 'DIME');
drawerDimes.innerHTML = `<p>Dimes: $${dime[1]}</p>`;
  const quarter = cid.find(coin => coin[0] === 'QUARTER');
drawerQuarters.innerHTML = `<p>Quarters: $${quarter[1]}</p>`;
  const one = cid.find(coin => coin[0] === 'ONE');
drawerOnes.innerHTML = `<p>Ones: $${one[1]}</p>`;
  const five = cid.find(coin => coin[0] === 'FIVE');
drawerFives.innerHTML = `<p>Fives: $${five[1]}</p>`;
  const ten = cid.find(coin => coin[0] === 'TEN');
drawerTens.innerHTML = `<p>Tens: $${ten[1]}</p>`;
  const tenty = cid.find(coin => coin[0] === 'TWENTY');
drawerTwenties.innerHTML = `<p>Twenties: $${tenty[1]}</p>`;
  const hundred = cid.find(coin => coin[0] === 'ONE HUNDRED');
drawerHundreds.innerHTML = `<p>Hundreds: $${hundred[1]}</p>`;

  purchaseBtn.addEventListener('click', () => {
    // To avoid decimal calculations, convert cid to cents.
    let centCid = cid.map(([coin, amount]) => {
    let decimalAmount = new Decimal(amount);
    let decimalCid = decimalAmount.mul(100);
    return [coin, decimalCid.toNumber()];
    });
console.log("centCid", centCid);

    // Reset display change
    resetChangeDue(changeHundred, changeTwenty, changeTen, changeFive, changeOne, changeQuarter, changeDime, changeNickel, changePenny);

    const sentCash = new Decimal(cash.value).mul(100).toNumber();
    const sentPrice = new Decimal(price).mul(100).toNumber();
console.log("受取金額￠", sentCash);
console.log("値段￠", sentPrice);

    // Check inputted cash
    // Not enough cash
    if (sentCash < sentPrice) {
      alert('Customer does not have enough money to purchase the item');
      console.log("アラート");
    }
    // No cash
    if (sentCash === sentPrice) {
      changeStatus.innerHTML = '<p>No change due - customer paid with exact cash</p>';
      console.log("お釣り不要");
    }

    // Calcurate cash
    if (sentCash > sentPrice) {
      purchaseBtnCount++;
      console.log("purchaseBtnCount", purchaseBtnCount);

      if (purchaseBtnCount > 1) {
        availableCid = availableCid.slice();
      } else {
        availableCid = centCid.slice();
      }
      totalCid = parseFloat(availableCid.reduce((total, coin) => total + coin[1], 0));

      let difference;

      if (totalCid === 0) {
        return { changeFlg: false };
      } else {
         // Calcurate register total
      difference =  sentCash - sentPrice;
console.log("おつり￠",difference);
      }

      // Check lack of change
      if (difference > totalCid) {
        changeStatus.innerHTML = '<p>Status: INSUFFICIENT_FUNDS </p>';
      } else {
        let result = checkCoinPattern(availableCid, difference);
console.log("計算結果result", result);

        // Check coin pattern
        if (!result.changeFlg) {
          // Enable to return change
          changeStatus.innerHTML = '<p>Status: INSUFFICIENT_FUNDS </p>';
        // Return changes
        } else {
          // Display #change-due
          result.numHundred >= 10000 ? 
          changeHundred.innerHTML = `<p>ONE HUNDRED: $${result.numHundred / 100} </p>` : '';

          result.numTwenty >= 2000 ? 
            changeTwenty.innerHTML = `<p>TWENTY: $${result.numTwenty / 100} </p>` : '';

          result.numTen >= 1000 ? 
            changeTen.innerHTML = `<p>TEN: $${result.numTen / 100} </p>` : '';

          result.numFive >= 500 ? 
            changeFive.innerHTML = `<p>FIVE: $${result.numFive / 100} </p>` : '';
      
          result.numOne >= 100 ? 
            changeOne.innerHTML = `<p>ONE: $${result.numOne / 100} </p>` : '';
      
          result.numQuarter >= 25 ? 
            changeQuarter.innerHTML = `<p>QUARTER: $${result.numQuarter / 100} </p>` : '';
      
          result.numDime >= 10 ? 
            changeDime.innerHTML = `<p>DIME: $${result.numDime / 100} </p>` : '';
      
          result.numNickel >= 5 ? 
            changeNickel.innerHTML = `<p>NICKEL: $${result.numNickel / 100} </p>` : '';
      
          result.numPenny >= 1 ? 
            changePenny.innerHTML = `<p>PENNY: $${result.numPenny / 100} </p>` : '';

          // Update drawer
          drawerPennies.innerHTML = `<p>Pennies: $${result.leftPenny / 100} </p>`;

          drawerNickels.innerHTML = `<p>Nickels: $${result.leftNickel / 100} </p>`;

          drawerDimes.innerHTML = `<p>Dimes: $${result.leftDime / 100} </p>`;

          drawerQuarters.innerHTML = `<p>Quarters: $${result.leftQuarter / 100} </p>`;

          drawerOnes.innerHTML = `<p>Ones: $${result.leftOne / 100} </p>`;

          drawerFives.innerHTML = `<p>Fives: $${result.leftFive / 100} </p>`;

          drawerTens.innerHTML = `<p>Tens: $${result.leftTen / 100} </p>`;

          drawerTwenties.innerHTML = `<p>Twenties: $${result.leftTwenty / 100} </p>`;

          drawerHundreds.innerHTML = `<p>Hundreds: $${result.leftHundred / 100} </p>`;

          availableCid = [
            ['PENNY', result.leftPenny], 
            ['NICKEL', result.leftNickel], 
            ['DIME', result.leftDime], 
            ['QUARTER', result.leftQuarter], 
            ['ONE', result.leftOne],  
            ['FIVE', result.leftFive], 
            ['TEN', result.leftTen], 
            ['TWENTY', result.leftTwenty], 
            ['ONE HUNDRED', result.leftHundred]];

          // Change Status
          if (sentPrice < sentCash && totalCid - difference > 0) { 
            changeStatus.innerHTML = '<p>Status: OPEN </p>';
            console.log("Status: OPEN");
          } else if (sentPrice < sentCash && difference === totalCid) {
            changeStatus.innerHTML = '<p>Status: CLOSED </p>';
            console.log("Status: CLOSE");
          }
        }
      }
    }
    // Clear inputed cash
    cash.value = '';
  });
};

price = 19.5;
cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
cash.value = 20;
document.querySelector('#purchase-btn').click();
