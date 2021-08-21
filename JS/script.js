/* Memory */
const memory8 = document.getElementById('8gb-memory');
const memory16 = document.getElementById('16gb-memory');
const extraMemoryCost = document.getElementById('extra-memory-cost');
/* Storage */
const ssd256 = document.getElementById('256gb-ssd');
const ssd512 = document.getElementById('512gb-ssd');
const ssd1tb = document.getElementById('1tb-ssd');
const extraStorageCost = document.getElementById('extra-storage-cost');
/* Delivery Charge */
const freeCharge = document.getElementById('free-charge');
const deliveryCharge = document.getElementById('delivery-charge');
const deliveryChargeDisplay = document.getElementById('delivery-charge-display');
/* Total Price */
const totalPrice = document.getElementById('total-price');
/* Best Price */
const bestPrice = document.getElementById('best-price');
/* Prome Code */
const promoCodeInput = document.getElementById('promo-code-input');
const applyButton = document.getElementById('apply-button');
/* Total */
const total = document.getElementById('total');

/* Memory Onclick */
memory8.addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    updateTotal();
})
memory16.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    updateTotal();
})
/* Storage Onclick */
ssd256.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    updateTotal();
})
ssd512.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    updateTotal();
})
ssd1tb.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    updateTotal();
})
/* Delivery Charge Onclick */
freeCharge.addEventListener('click', function () {
    deliveryChargeDisplay.innerText = '0';
    updateTotal();
})
deliveryCharge.addEventListener('click', function () {
    deliveryChargeDisplay.innerText = '20';
    updateTotal();
})
/* Update Total */
function updateTotal() {
    const bestPriceUpdate = Number(bestPrice.innerText);
    const extraMemoryCostUpdate = Number(extraMemoryCost.innerText);
    const extraStorageCostUpdate = Number(extraStorageCost.innerText);
    const deliveryChargeDisplayUpdate = Number(deliveryChargeDisplay.innerText);
    const totalCost = bestPriceUpdate + extraMemoryCostUpdate + extraStorageCostUpdate + deliveryChargeDisplayUpdate;
    totalPrice.innerText = totalCost;
    total.innerText = totalCost
    return totalCost;
}
applyButton.addEventListener('click', function () {
    if (promoCodeInput.value == 'stevekaku') {
        const totalCostNew = updateTotal() * .2;
        const totalCostUpdate = updateTotal() - totalCostNew;
        total.innerText = totalCostUpdate;
        promoCodeInput.value = '';
    }
})