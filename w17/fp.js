class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    waterConsum,
    dishAndWasher,
    itemPurchasePoints,
    waste,
    recycling,
    vehicleMiles,
    publicMiles,
    flightMiles
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsum = waterConsum;
    this.dishAndWasher = dishAndWasher;
    this.itemPurchasePoints = itemPurchasePoints;
    this.waste = waste;
    this.recycling = recycling;
    this.vehicleMiles = vehicleMiles;
    this.publicMiles = publicMiles;
    this.flightMiles = flightMiles;

    this.total = 0;
    this.total += this.determineHouseHoldPts();
    this.total += this.determineHouseSizePts();
    this.total += this.determineFoodPts();
    this.total += this.determineFoodSourcePts();
    this.total += this.determineWaterPts();
    this.total += this.itemPurchasePoints;
    this.total += this.calculateTransportationPts(); // Add transportation points
  }

  calculateTransportationPts() {
    let points = 0;

    // Vehicle miles scoring
    switch (this.vehicleMiles) {
      case "none":
        break;
      case "lessThan1000":
        points += 4;
        break;
      case "1000to10000":
        points += 6;
        break;
      case "10000to15000":
        points += 10;
        break;
      case "moreThan15000":
        points += 12;
        break;
      default:
        break;
    }

    // Public transportation miles scoring
    switch (this.publicMiles) {
      case "none":
        break;
      case "lessThan1000":
        points += 2;
        break;
      case "1000to10000":
        points += 4;
        break;
      case "10000to15000":
        points += 6;
        break;
      case "15000to20000":
        points += 10;
        break;
      case "moreThan20000":
        points += 12;
        break;
      default:
        break;
    }

    // Flight miles scoring
    switch (this.flightMiles) {
      case "short":
        points += 2;
        break;
      case "medium":
        points += 6;
        break;
      case "long":
        points += 20;
        break;
      default:
        break;
    }

    return points;
  }

  determineHouseHoldPts() {
    let points = 0;
    switch (this.houseMembers) {
      case 1: points = 14; break;
      case 2: points = 12; break;
      case 3: points = 10; break;
      case 4: points = 8; break;
      default: points = 6; break;
    }
    return points;
  }

  determineHouseSizePts() {
    let points = 0;
    switch (this.houseSize) {
      case "large": points = 10; break;
      case "medium": points = 7; break;
      default: points = 4; break;
    }
    return points;
  }

  determineFoodPts() {
    let points = 0;
    switch (this.foodChoice) {
      case "high": points = 10; break;
      case "average": points = 6; break;
      default: points = 2; break;
    }
    return points;
  }

  determineFoodSourcePts() {
    let points = 0;
    switch (this.foodSource) {
      case "most": points = 14; break;
      case "some": points = 8; break;
      default: points = 2; break;
    }
    return points;
  }

  determineWaterPts() {
    let points = 0;
    if (this.waterConsum <= 4) {
      points = 6;
    } else if (this.waterConsum <= 9) {
      points = 12;
    } else {
      points = 18;
    }
    if (this.dishAndWasher) {
      points += 2;
    }
    this.waterConsumPoints = points;
    return points;
  }
}

export { FP };
