package com.example.demo.controller;

import com.example.demo.dto.GeneralResponse;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.RequestReportDto;
import com.example.demo.services.LaboratoryServices;
import com.example.demo.services.LoginResponse;
import com.example.demo.services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/laboratory")
@CrossOrigin(origins = "http://localhost:3000")
public class LaboratoryController {
    @Autowired
    private LaboratoryServices laboratoryServices;

    @PostMapping("requestReport")
    public ResponseEntity<?> loginUser(@RequestBody RequestReportDto requestReportDto){
        GeneralResponse generalResponse =laboratoryServices.saveRequestReport(requestReportDto);
        return ResponseEntity.ok(generalResponse);
    }
}
