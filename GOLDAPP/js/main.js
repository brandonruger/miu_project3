/*Brandon Ruger
 *MiU 1310
 *Project 3 */


$('#home').on('pageinit', function(){
	//code needed for home page goes here
        var addForm = $('#addItemForm');
                               
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $('#addItemForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
                            errorMsgs.click();
                            var newHtml = '';
                            for (var key in validator.submitted) {
                                var label = $('label[for^="' + key + '"]').not('[generated]');
                                var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                                var fieldName = legend.length ? legend.text() : label.text();
                                newHtml +='<li>' + fieldName +'</li>';
                            };
                            $("#errorMessages ul").html(newHtml)
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
        function getSelectedCheckedBoxes() {
        if ($('#medication1').prop("checked")) {
            fleaValue = $('#medication1:checkbox:checked').val();
        } else {
            fleaValue = "No"
        };
        if ($('#medication2').prop("checked")){
            heartwormValue = $('#medication2:checkbox:checked').val();
        } else {
            heartwormValue = "No"
        };
        if ($('#medication3').prop("checked")) {
            otherValue = $('#medication3:checkbox:checked').val();
        } else{
            otherValue = "No"
        };
    }

var storeData = function(key){
    
    if (!key) {
        var generateId = Math.floor(Math.random()*100000001);
        }else{
            //Set the id to the existing key we're editing, so it will save over the data.
            generateId = key;
        }
        
        //Gather up all our form field values and store in an object.
        //Object properties contain array with the form label and input value.
        getSelectedCheckedBoxes(); 
        var itemList                = {};
            itemList.name           = ["Pet Name:", $('#name').val()];
            itemList.age            = ["Pet Age:", $('#age').val()];
            itemList.type           = ["Pet Type:", $('#type').val()];
            itemList.medication1    = ["Flea:", fleaValue];
            itemList.medication2    = ["Heartworm:", heartwormValue];
            itemList.medication3    = ["Other:", otherValue];
            itemList.reminderDate   = ["Date:", $('#reminderDate').val()];
            itemList.scale          = ["Range:", $('#scale').val()];
            itemList.notes          = ["Note:", $('#notes').val()];
            
            //Save data into Local Storage
            localStorage.setItem(generateId, JSON.stringify(itemList));
            alert("Reminder has been added!");
    };
});
    
var clickSubmit = function(){
	var getButton = $('#submitButton');
        getButton.addEventListener("click", storeData);
};

var deleteItem = function (){
			
};
					
var clearLocal = function(){

};
	


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};



//Variable Defaults
var fleaValue;
var heartwormValue;
var otherValue;
/*var createButton = $('submitButton');
createButton.addEventListener("click", storeData);*/

