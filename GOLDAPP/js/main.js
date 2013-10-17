$('#home').on('pageinit', function(){
	//code needed for home page goes here
        var addForm = $('#addItemForm');
                               
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $('#addItemForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
                            errorMsgs.click();
                            var html = '';
                            for (var key in validator.submitted) {
                                var label = $('label[for^="' + key + '"]').not('[generated]');
                                var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                                var fieldName = legend.length ? legend.text(): label.text();
                                html +='<li>' + fieldName +'</li>';
                            };
                            $("#errorMessages ul").html(html)
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

function getSelectedCheckedBoxes() {
        if ($('medication1').checked) {
            fleaValue = $('medication1').value;
        } else {
            fleaValue = "No"
        };
        if ($('medication2').checked){
            heartwormValue = $('medication2').value;
        } else {
            heartwormValue = "No"
        };
        if ($('medication3').checked) {
            otherValue = $('medication3').value;
        } else{
            otherValue = "No"
        };
    }

var storeData = function(data){
    
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
            itemList.name           = ["Pet Name:", $('name').value];
            itemList.age            = ["Pet Age:", $('age').value];
            itemList.type           = ["Pet Type:", $('type').value];
            itemList.medication1    = ["Flea:", fleaValue];
            itemList.medication2    = ["Heartworm:", heartwormValue];
            itemList.medication3    = ["Other:", otherValue];
            itemList.reminderDate   = ["Date:", $('reminderDate').value];
            itemList.scale          = ["Range:", $('scale').value];
            itemList.notes          = ["Note:", $('notes').value];
            
            //Save data into Local Storage
            localStorage.setItem(generateId, JSON.stringify(itemList));
            alert("Reminder has been added!");
    };
	

var deleteItem = function (){
			
};
					
var clearLocal = function(){

};

//Variable Defaults
var fleaValue;
var heartwormValue;
var otherValue;
var createButton = $('submitButton');
createButton.addEventListener("click", storeData);

