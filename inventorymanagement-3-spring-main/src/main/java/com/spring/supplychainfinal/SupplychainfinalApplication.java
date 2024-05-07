package com.spring.supplychainfinal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.spring.supplychainfinal.service.FileUploadService;

@SpringBootApplication
public class SupplychainfinalApplication extends SpringBootServletInitializer implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SupplychainfinalApplication.class, args);
	}
	
	@Autowired
	private FileUploadService fileUploadService;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		fileUploadService.init();
		
	}

}
