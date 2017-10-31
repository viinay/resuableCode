Model.fineOne({name:'bourne'},function(err,doc){
	doc.name='json borne';
	doc.visits.$inc();
	doc.save();
}) 


Model.findById(docId,function(err,doc){
   if(err){/*handle err*/}
   doc.arrayList.push(obj); 
   /*
   	A document's _id value is actually assigned by the client,
	not the server. So the _id of the new comment is available right after you call above line
   */
   doc.arrayList[doc.arrayList.length-1]._id
   doc.save(function(err,result){
       if(err){}
       console.log(result)
   })
});
