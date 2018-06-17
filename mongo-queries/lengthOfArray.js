db.accommodations.find( { $where: "this.name.length > 1" } );
