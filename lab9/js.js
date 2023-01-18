var dt = new DataTransfer();
 
$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();
 
	for(var i = 0; i < this.files.length; i++){
		let file = this.files.item(i);
		dt.items.add(file);    
   
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function(){
			let new_file_input = '<div class="input-file-list-item">' +
				'<img class="input-file-list-img" src="' + reader.result + '">' +
			'</div>';
      document.getElementById("myspan").textContent=file.name+"    ["+file.size+" б]";
      document.getElementById("input-file").style.borderColor = '#3CA255';
      document.getElementById("myspan").style.color = '#3CA255';
      document.querySelector("#image").src = "vector2.png";
			$files_list.append(new_file_input); 
      
		}
    // progress-bar
    progressNode = document.getElementById("progress");
  
    reader.onprogress = function(event) {
      if (event.lengthComputable) {
        progressNode.max = event.total;
        progressNode.value = event.loaded;
      }
    };
    reader.readAsText(file);


    
	};
	this.files = dt.files;
});

