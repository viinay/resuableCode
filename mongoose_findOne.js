Model.fineOne({name:'bourne'},function(err,doc){
	doc.name='json borne';
	doc.visits.$inc();
	doc.save();
	
}) 
