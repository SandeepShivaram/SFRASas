'use strict';


var URLUtils = require('dw/web/URLUtils');
var Customer = require('dw/customer/Customer');
var base =module.superModule;
/**
 * Creates a plain object that contains profile information
 * @param {Object} customer - current customer's profile
 * @returns {Object} an object that contains information about the current customer's profile
 */
function getloyaltyDetails(customer) {
    var result;
    if (customer) {
        result = {
            isloyaltySelected: customer.raw.profile.custom.signupForLoyalty,
            rewardPoint: customer.raw.profile.custom.rewardPoints,           
        };
    } else {
        result = null;
    }
    return result;
}


/**
 * Account class that represents the current customer's profile dashboard
 * @param {Object} currentCustomer - Current customer
 * @param {Object} addressModel - The current customer's preferred address
 * @param {Object} orderModel - The current customer's order history
 * @constructor
 */
module.exports= function (currentCustomer, addressModel, orderModel) {
    base.call(this, currentCustomer, addressModel, orderModel);    
    this.loyalty = getloyaltyDetails(currentCustomer);   
}

