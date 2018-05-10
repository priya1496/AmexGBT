/**
 * Place booking transaction by TMC
 * @param {com.syntel.demo.travel.PlaceBooking} placeBookingTx - the place booking transaction
 * @transaction
 */
function PlaceBooking(placeBookingTx) {
 
 return getAssetRegistry('com.syntel.demo.travel.Booking').then(function(bookingRegistry) {
	    
		var factory = getFactory();
		
		// Create booking asset.
        var bookAsset = factory.newResource('com.syntel.demo.travel', 'Booking', placeBookingTx.bookingId);
	    bookAsset.bookingId = placeBookingTx.bookingId;
	    bookAsset.PNR = placeBookingTx.PNR;	    
	    bookAsset.bookingIATA = placeBookingTx.bookingIATA;
		bookAsset.bookingBranch = placeBookingTx.bookingBranch;	    
		bookAsset.custmerNo= placeBookingTx.custmerNo;	    
		bookAsset.checkInDate = placeBookingTx.checkInDate;	    
		bookAsset.checkOutDate = placeBookingTx.checkOutDate;	    
		bookAsset.NoOfNights = placeBookingTx.NoOfNights;	
		bookAsset.NoOfTravler = placeBookingTx.NoOfTravler;
        bookAsset.Travelername= placeBookingTx.Travelername;
		bookAsset.Currency = placeBookingTx.Currency;
        bookAsset.propertyname = placeBookingTx.propertyname;
        bookAsset.propertyaddress= placeBookingTx.propertyaddress;
        bookAsset.destinationCode = placeBookingTx.destinationCode;
        bookAsset.roomType = placeBookingTx.roomType;
        bookAsset.roomRate = placeBookingTx.roomRate;
        bookAsset.fareAmount = placeBookingTx.fareAmount;
        bookAsset.taxAmount = placeBookingTx.taxAmount;
        //bookAsset.taxAmount = placeBookingTx.taxAmount;

         
	
             return bookingRegistry.add(bookAsset);
	});       	
}




/**
 * Update checkout transaction by Supplier
 * @param {com.syntel.demo.travel.UpdateCheckout} updateCheckoutTx - update checkout transaction
 * @transaction
 */
function UpdateCheckout(updateCheckoutTx) {	
  
 return getAssetRegistry('com.syntel.demo.travel.Booking')
    .then(function(bookingRegistry) {
      
    //var factory = getFactory();
    // Create booking asset.
      // var bookAsset = factory.newResource('com.syntel.demo.travel', 'Booking', updateCheckoutTx.bookingId);
      
      updateCheckoutTx.booking.ActulcheckInDate = updateCheckoutTx.ActulcheckInDate;
      updateCheckoutTx.booking.ActulcheckOutDate = updateCheckoutTx.ActulcheckOutDate;
      updateCheckoutTx.booking.ActulNoOfNights = updateCheckoutTx.ActulNoOfNights;
      updateCheckoutTx.booking.ActulfareAmount = updateCheckoutTx.ActulfareAmount;
      updateCheckoutTx.booking.ActultaxAmount = updateCheckoutTx.ActultaxAmount;
      updateCheckoutTx.booking.invoiceDue = updateCheckoutTx.invoiceDue;
      updateCheckoutTx.booking.invoiceTax = updateCheckoutTx.invoiceTax;
      updateCheckoutTx.booking.totalInvoice = updateCheckoutTx.totalInvoice;
   
   
	return bookingRegistry.update(updateCheckoutTx.booking);
  });
	
	}

	
/**
 * Update commission transaction by Supplier
 * @param {com.syntel.demo.travel.UpdateCommission} updateCommissionTX - update commission transaction
 * @transaction
 */


function UpdateCommission(updateCommissionTX) {	
  
 return getAssetRegistry('com.syntel.demo.travel.Booking')
    .then(function(bookingRegistry) {
      
    //var factory = getFactory();
    // Create booking asset.
      // var bookAsset = factory.newResource('com.syntel.demo.travel', 'Booking', updateCheckoutTx.bookingId);
      
      
      updateCommissionTX.booking.commissionAmount = updateCommissionTX.commissionAmount;
     
   
	return bookingRegistry.update(updateCommissionTX.booking);
  });
	
	}

	
		
		
		
