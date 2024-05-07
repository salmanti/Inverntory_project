package com.spring.supplychainfinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.supplychainfinal.dto.ResponseMessege;
import com.spring.supplychainfinal.service.FileUploadService;


@RestController
public class FileUploadControll {
	
//	@Autowired
//	ResponseMessege responseMessege;
	
	@Autowired
	FileUploadService fileUploadService;
	
	@PostMapping("/upload")
	public ResponseEntity<ResponseMessege> uploadFile(@RequestParam("file") MultipartFile file){
		
		String messege = "";
		try {
			
			fileUploadService.save(file);
			messege ="Uploaded the file successfully :" + file.getOriginalFilename();
			
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessege(messege));
		
			
		} catch (Exception e) {
			
			
			messege ="Coluld not upload the file: " + file.getOriginalFilename() 
			+ ".Error:  " + e.getMessage();
			
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessege(messege));
		}
		
	}
	

}
