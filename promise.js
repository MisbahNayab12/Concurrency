console.log("\n\t Preparing 3 dishes for party \n\t");
function sweetDish() {
    console.log("Preparing sweet dish...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sweet dish is ready to cool!!");
        }, 2000);
    });
}
function mainDish() {
    console.log("Soaking the rice...");
    console.log("Marinate chicken for Tikka Biryani...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Chicken is marinated!!");
        }, 4000);
    });
}
function sideDish() {
    console.log("Preparing ingredients for fries...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fries are ready!!");
        }, 6000);
    });
}
function cooking() {
    console.log("Rice has soaked!!");
    console.log("Cooking Biryani has started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Biryani is ready!!");
        }, 3000);
    });
}
async function partyMenu() {
    const step1 = await sweetDish();
    console.log(step1);
    const step2 = await mainDish();
    console.log(step2);
    const step3 = await sideDish();
    console.log(step3);
    const step4 = await cooking();
    console.log(step4);
}
partyMenu();
function finalMessage() {
    setTimeout(() => {
        console.log("\n\t All 3 dishes are ready to serve. \n\t");
    }, 16000);
}
finalMessage();
export {};
